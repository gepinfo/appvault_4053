import { Request, Response } from 'express';
import { gepbankingService } from '../service/gepbankingService';
import { CustomLogger } from '../config/Logger'
let gepbanking = new gepbankingService();

export class gepbankingController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gepbanking.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gepbanking.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gepbanking.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gepbanking.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gepbanking.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gepbanking.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gepbanking.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpCreate');
    })}
public GpSearchRelationship(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gepbanking.GpSearchRelationship(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpSearchRelationship');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpSearchRelationship');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    gepbanking.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpGetNounCreatedBy');
    })}


}