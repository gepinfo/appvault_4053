import * as mongoose from 'mongoose';
import saleforceModel from '../models/daomodels/salesforcepapi';
import * as fetch from 'node-fetch';
import { ApiAdapter } from '../config/apiAdapter';
import { URL, URLSearchParams } from 'url';
import * as btoa from 'btoa';
import { CustomLogger } from '../config/Logger'


export class SalesforceServiceDao {
    private saleforceModel = saleforceModel;
    constructor() { }
    getCredentialsData(connectorName) {
        return new Promise(resolve => {
            new ApiAdapter().get(`${process.env.APIGATEWAY}/web/scmbyname?connector_name=` + connectorName).then(
                (data:any) => {
                    data.response.json().then(result => {
                        resolve(result);
                    })
                }
            )
        })
    }
    public async GpSearch(salesforceData, callback) {

        new CustomLogger().showLogger('info', 'Enter into SalesforceServiceDao.ts: GpSearch');

        let credentialData: any = await this.getCredentialsData('saleforcepathapi');

        fetch(`${credentialData.data.domain}/services/data/${credentialData.data.version}/sobjects/${salesforceData.featurename}`,
            { 
                method: "GET", 
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': 'Bearer ' + credentialData.data.bearer_token 
                } 
            }).then((result) => result.json()).then((result) => {

            new CustomLogger().showLogger('info', 'Exit from SalesforceServiceDao.ts: GpSearch');

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }
    public async GpDelete(objectId, objectName, callback) {

        new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpDelete');

        let credentialData: any = await this.getCredentialsData('saleforcepathapi');

        fetch(`${credentialData.data.domain}/services/data/${credentialData.data.version}/sobjects/${objectName}/${objectId}`, 
        { 
            method: "DELETE", 
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + credentialData.data.bearer_token 
            } 
        }).then((result) => result.json()).then((result) => {

            new CustomLogger().showLogger('info', 'Exit from SalesforceServiceDao.ts: GpSearch');

            callback({statusObject: 'deleted By Object'});
        }).catch((error) => {
            callback(error);
        });
    }
    public async GpSearchForUpdate(salesforceData, callback) {

        new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpSearchForUpdate');
        let salesForceObjectName = salesforceData.featureName;
        let salesForceObjectId = salesforceData.Id;
        let credentialData: any = await this.getCredentialsData('saleforcepathapi');
        delete salesforceData.featureName;
        delete salesforceData.created_by;
        delete salesforceData.Id;
        fetch(`${credentialData.data.domain}/services/data/${credentialData.data.version}/sobjects/${salesForceObjectName}/${salesForceObjectId}`, 
        { 
            method: "PATCH", 
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + credentialData.data.bearer_token 
            },
            body: JSON.stringify(salesforceData)
        }).then((result) => result.json()).then((result) => {

            new CustomLogger().showLogger('info', 'Exit from SalesforceServiceDao.ts: GpSearch');

            callback({statusObject: 'Updated by Object'});
        }).catch((error) => {
            callback(error);
        });
    }
    public async GpUpdate(salesforceData, callback) {

        new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpUpdate');

        let credentialData: any = await this.getCredentialsData('saleforcepathapi');
        
        fetch(`${credentialData.data.domain}/services/data/${credentialData.data.version}/sobjects/${salesforceData.sobject}/${credentialData.data.sobjectID}`, 
        { 
            method: "PATCH", 
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + credentialData.data.bearer_token 
            },
            body: salesforceData.object
        }).then((result) => result.json()).then((result) => {

            new CustomLogger().showLogger('info', 'Exit from SalesforceServiceDao.ts: GpSearch');

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }
    public async GpGetEntityById(salesforceData, callback) {

        new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpGetEntityById');

        let credentialData: any = await this.getCredentialsData('saleforcepathapi');
        
        fetch(`${credentialData.data.domain}/services/data/${credentialData.data.version}/sobjects/${salesforceData.objectName}/${salesforceData.id}`, 
        { 
            method: "GET", 
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + credentialData.data.bearer_token 
            } 
        }).then((result) => result.json()).then((result) => {

        new CustomLogger().showLogger('info', 'Exit from SalesforceServiceDao.ts: GpSearch');

        callback(result);
        }).catch((error) => {
            callback(error);
        });
    }
    public async GpGetAllValues(objectName, callback) {

        new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpGetAllValues');

        let credentialData: any = await this.getCredentialsData('saleforcepathapi');
        
        fetch(`${credentialData.data.domain}/services/data/${credentialData.data.version}/sobjects/${objectName}`, 
        { 
            method: "GET", 
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + credentialData.data.bearer_token 
            } 
        }).then((result) => result.json()).then((result) => {

            new CustomLogger().showLogger('info', 'Exit from SalesforceServiceDao.ts: GpSearch');

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }
    public async GpCreate(salesforceData, callback) {

        new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpCreate');

        // let temp = new this.saleforceModel(salesforceData);
        let salesForceObject = salesforceData.featureName;
        
        let credentialData: any = await this.getCredentialsData('saleforcepathapi');
        delete salesforceData.featureName;
        delete salesforceData.created_by;
        
        fetch(`${credentialData.data.domain}/services/data/${credentialData.data.version}/sobjects/${salesForceObject}`, 
        { 
            method: "POST", 
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + credentialData.data.bearer_token 
            },
            body: JSON.stringify(salesforceData)
        }).then((result) => result.json()).then((result) => {

            new CustomLogger().showLogger('info', 'Exit from SalesforceServiceDao.ts: GpCreate');

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }
    public async GpGetNounCreatedBy(salesforceData, callback) {

        new CustomLogger().showLogger('info', 'Enter into SalesforceServiceDao.ts: GpGetNounCreatedBy');

        this.saleforceModel.aggregate(([
            { $match: { $and: [{ created_by: salesforceData.created_by }] } }
        ])).then((result) => {

            new CustomLogger().showLogger('info', 'Exit from SalesforceServiceDao.ts: GpGetNounCreatedBy');

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }


    public async salesforcelogin(salesforceData, callback) {

        new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpCreate');

        let temp = new this.saleforceModel(salesforceData);
        let credentialData: any = await this.getCredentialsData('saleforcepathapi');

        let loginAuth = {
            username: credentialData.data.username,
            password: credentialData.data.password,
            client_id: credentialData.data.client_id,
            client_secret: credentialData.data.client_secret,
            grant_type: 'password'
        }

        
        fetch(`https://login.salesforce.com/services/oauth2/token`, 
        { 
            method: "POST", 
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: loginAuth
        }).then((result) => result.json()).then((result) => {

            new CustomLogger().showLogger('info', 'Exit from SalesforceServiceDao.ts: GpSearch');

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }


}