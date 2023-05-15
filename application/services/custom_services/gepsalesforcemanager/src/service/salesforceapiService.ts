import { Request, Response } from 'express';
import { SalesforceServiceDao } from '../dao/salesforceapiDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let salesforceserviceDao = new SalesforceServiceDao();

export class SaleforceService {

    constructor() { }

    public GpSearch(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into testsaleforcepathapiService.ts: GpSearch')
        let testsaleforcepathapiData = req.query;
        salesforceserviceDao.GpSearch(testsaleforcepathapiData, (response) => {
            new CustomLogger().showLogger('info', 'Exit from testsaleforcepathapiService.ts: GpSearch')
            callback(response);
        });
    }
    public GpDelete(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpDelete')
        let ObjectId = req.params.id;
        let ObjectName = req.query.featurename;
        salesforceserviceDao.GpDelete(ObjectId, ObjectName, (response) => {
            new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpDelete')
            callback(response);
        });
    }

    public GpSearchForUpdate(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpSearchForUpdate')
        let salesforceData = req.body;
        salesforceserviceDao.GpSearchForUpdate(salesforceData, (response) => {
            new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpSearchForUpdate')
            callback(response);
        });
    }

    public GpUpdate(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpUpdate')
        let salesforceData = req.body;
        salesforceserviceDao.GpUpdate(salesforceData, (response) => {
            new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpUpdate')
            callback(response);
        });
    }

    public GpGetEntityById(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpGetEntityById')
        let salesObject = {
            id: req.params.id,
            objectName: req.query.featurename
        };
        console.log(salesObject);
        salesforceserviceDao.GpGetEntityById(salesObject, (response) => {
            new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpGetEntityById')
            callback(response);
        });
    }

    public GpGetAllValues(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpGetAllValues')
        let objectName = req.query.objectname;
        salesforceserviceDao.GpGetAllValues(objectName, (response) => {
            new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpGetAllValues')
            callback(response);
        });
    }

    public GpCreate(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpCreate')
        let salesforceData = req.body;
        salesforceserviceDao.GpCreate(salesforceData, (response) => {
            new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpCreate')
            callback(response);
        });
    }

    public GpGetNounCreatedBy(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into testsaleforcepathapiService.ts: GpGetNounCreatedBy')
        let testsaleforcepathapiData = { created_by: req.query.createdby };
        salesforceserviceDao.GpGetNounCreatedBy(testsaleforcepathapiData, (response) => {
            new CustomLogger().showLogger('info', 'Exit from testsaleforcepathapiService.ts: GpGetNounCreatedBy')
            callback(response);
        });
    }

    public salesforcelogin(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpCreate')
        let salesforceData = req.body;
        salesforceserviceDao.salesforcelogin(salesforceData, (response) => {
            new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpCreate')
            callback(response);
        });
    }




}