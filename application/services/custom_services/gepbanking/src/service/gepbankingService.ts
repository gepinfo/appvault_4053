import { Request, Response } from 'express';
import {gepbankingDao} from '../dao/gepbankingDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let gepbanking = new gepbankingDao();

export class gepbankingService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gepbankingService.ts: GpDelete')
     let  gepbankingId = req.params.id;
     gepbanking.GpDelete(gepbankingId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gepbankingService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gepbankingService.ts: GpSearch')
     let  gepbankingData = req.query;
     gepbanking.GpSearch(gepbankingData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gepbankingService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gepbankingService.ts: GpSearchForUpdate')
     let  gepbankingData = req.body;
     gepbanking.GpSearchForUpdate(gepbankingData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gepbankingService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gepbankingService.ts: GpUpdate')
     let  gepbankingData = req.body;
     gepbanking.GpUpdate(gepbankingData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gepbankingService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gepbankingService.ts: GpGetEntityById')
     let  gepbankingId = req.params.id;
     gepbanking.GpGetEntityById(gepbankingId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gepbankingService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gepbankingService.ts: GpGetAllValues')
     
     gepbanking.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from gepbankingService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gepbankingService.ts: GpCreate')
     let  gepbankingData = req.body;
     gepbanking.GpCreate(gepbankingData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gepbankingService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpSearchRelationship(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gepbankingService.ts: GpSearchRelationship')
     let  gepbankingData = req.query;
     gepbanking.GpSearchRelationship(gepbankingData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gepbankingService.ts: GpSearchRelationship')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into gepbankingService.ts: GpGetNounCreatedBy')
     let  gepbankingData = { created_by: req.query.createdby };
     gepbanking.GpGetNounCreatedBy(gepbankingData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from gepbankingService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}