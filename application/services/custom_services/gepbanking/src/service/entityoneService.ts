import { Request, Response } from 'express';
import {entityoneDao} from '../dao/entityoneDao';
import {axisDao} from '../dao/axisDao';
import {hdfcDao} from '../dao/hdfcDao';
import { CustomLogger } from '../config/Logger';
let entityone = new entityoneDao();
let axis = new axisDao();
let hdfc = new hdfcDao();

export class entityoneService {
    
    constructor() { }

    public  bankLinkCreate(req: Request, callback)
    {
        new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: bankLinkCreate');
        let reqbody = req.body;
        let connectType = req.query.connectType;
        if(connectType == 'plaid')
        {
            entityone.PlaidLinkCreate(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: bankLinkCreate')
                callback(response);
            });
        }   
        else if(connectType == 'axis')
        {
            axis.AxisLinkCreate(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: bankLinkCreate')
                callback(response);
            });
        } 
        else if(connectType == 'hdfc')
        {
            hdfc.HdfcLinkCreate(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: bankLinkCreate')
                callback(response);
            });
        } 
    }
    
    public publicTokenCreate(req: Request, callback)
    {
        new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: bankLinkCreate');
        let reqbody = req.body;
        let connectType = req.query.connectType;
        if(connectType == 'plaid')
        {
            entityone.PlaidPublicTokenCreate(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: publicTokenCreate')
                callback(response);
            });
        }   
        else if(connectType == 'axis')
        {
            axis.AxisPublicTokenCreate(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: publicTokenCreate')
                callback(response);
            });
        } 
        else if(connectType == 'hdfc')
        {
            hdfc.HdfcPublicTokenCreate(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: publicTokenCreate')
                callback(response);
            });
        } 
    }

    public  accessTokenCreate(req: Request, callback)
    {
        new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: accessTokenCreate');
        let reqbody = req.body;
        let connectType = req.query.connectType;
        console.log("reqbody connectType",req.body,req.query.connectType)
        if(connectType == 'plaid')
        {
            entityone.PlaidAccessTokenCreate(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: accessTokenCreate')
                callback(response);
            });
        }   
        else if(connectType == 'axis')
        {
            axis.AxisAccessTokenCreate(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: accessTokenCreate')
                callback(response);
            });
        } 
        else if(connectType == 'hdfc')
        {
            hdfc.HdfcAccessTokenCreate(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: accessTokenCreate')
                callback(response);
            });
        } 
    }

    public  getBalance(req: Request, callback)
    {
        new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: getBalance');
        let reqbody = req.body;
        let connectType = req.query.connectType;
        if(connectType == 'plaid')
        {
            entityone.PlaidGetBalance(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: getBalance')
                callback(response);
            });
        }   
        else if(connectType == 'axis')
        {
            axis.AxisGetBalance(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: getBalance')
                callback(response);
            });
        } 
        else if(connectType == 'hdfc')
        {
            hdfc.HdfcGetBalance(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: getBalance')
                callback(response);
            });
        } 
    }

    public  getTransactionsByDate(req: Request, callback)
    {
        new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: getTransactionsByDate');
        let reqbody = req.body;
        let connectType = req.query.connectType;
        if(connectType == 'plaid')
        {
            entityone.PlaidgetTransactionsByDate(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: getTransactionsByDate')
                callback(response);
            });
        }   
        else if(connectType == 'axis')
        {
            axis.AxisgetTransactionsByDate(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: getTransactionsByDate')
                callback(response);
            });
        } 
        else if(connectType == 'hdfc')
        {
            hdfc.HdfcgetTransactionsByDate(reqbody,(response)=>
            {
                new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: getBalance')
                callback(response);
            });
        } 
    }

    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: GpDelete')
     let  entityoneId = req.params.id;
     entityone.GpDelete(entityoneId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: GpSearch')
     let  entityoneData = req.query;
     entityone.GpSearch(entityoneData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: GpSearchForUpdate')
     let  entityoneData = req.body;
     entityone.GpSearchForUpdate(entityoneData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: GpGetNounById')
     let  entityoneId = req.params.id;
     entityone.GpGetNounById(entityoneId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: GpUpdate')
     let  entityoneData = req.body;
     entityone.GpUpdate(entityoneData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: GpGetAllValues')
     
     entityone.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: GpCreate')
     let  entityoneData = req.body;
     entityone.GpCreate(entityoneData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpSearchRelationship(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: GpSearchRelationship')
     let  entityoneData = req.query;
     entityone.GpSearchRelationship(entityoneData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: GpSearchRelationship')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entityoneService.ts: GpGetNounCreatedBy')
     let  entityoneData = { created_by: req.query.createdby };
     entityone.GpGetNounCreatedBy(entityoneData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entityoneService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}