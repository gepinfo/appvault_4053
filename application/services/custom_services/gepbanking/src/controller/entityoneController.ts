import { Request, Response } from 'express';
import { entityoneService } from '../service/entityoneService';
import { CustomLogger } from '../config/Logger'
let entityone = new entityoneService();

export class entityoneController {
    
    constructor() { }
    
    public bankLinkCreate(req: Request, res: Response) 
    {
        new CustomLogger().guidLog(req);        
        entityone.bankLinkCreate(req, (response) => 
        {
            new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: bankLinkCreate');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: bankLinkCreate');
        });
    }

    public publicTokenCreate(req: Request, res: Response) 
    {
        new CustomLogger().guidLog(req);        
        entityone.publicTokenCreate(req, (response) => 
        {
            new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: publicTokenCreate');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: publicTokenCreate');
        });
    }

    public accessTokenCreate(req: Request, res: Response) 
    {
        new CustomLogger().guidLog(req);        
        entityone.accessTokenCreate(req, (response) => 
        {
            new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: accessTokenCreate');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: accessTokenCreate');
        });
    }

    public getBalance(req: Request, res: Response) 
    {
        new CustomLogger().guidLog(req);        
        entityone.getBalance(req, (response) => 
        {
            new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: getBalance');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: getBalance');
        });
    }

    public getTransactionsByDate(req: Request, res: Response) 
    {
        new CustomLogger().guidLog(req);        
        entityone.getTransactionsByDate(req, (response) => 
        {
            new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: getTransactionsByDate');
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: getTransactionsByDate');
        });
    }

    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entityone.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entityone.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entityone.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: GpSearchForUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entityone.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: GpGetNounById');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entityone.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entityone.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entityone.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: GpCreate');
    })}
public GpSearchRelationship(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entityone.GpSearchRelationship(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: GpSearchRelationship');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: GpSearchRelationship');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entityone.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: GpGetNounCreatedBy');
    })}


}