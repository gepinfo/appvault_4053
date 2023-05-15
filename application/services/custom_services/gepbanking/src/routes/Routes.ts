import { Request, Response, NextFunction } from "express";
import { entityoneController } from '../controller/entityoneController';

export class Routes {
    private entityone: entityoneController = new entityoneController();
    
    public routes(app): void 
    {
        const PLAID_PRODUCTS = (process.env.PLAID_PRODUCTS).split(',',);
    
        app.route('/health/entity-service').get((req: Request, res: Response) => 
        {
            res.status(200).send
            ({
                status: 'up'
            })
        });
        app.route('/api/info').get((req: Request, res: Response) => 
        {
            res.status(200).send
            ({
               products: PLAID_PRODUCTS,
            });
        });
        app.route('/link/token/create').post(this.entityone.bankLinkCreate);
        app.route('/sandbox/public_token/create').post(this.entityone.publicTokenCreate);
        app.route('/item/public_token/exchange').post(this.entityone.accessTokenCreate);
        app.route('/accounts/balance/get').post(this.entityone.getBalance);
        app.route('/transactions/get').post(this.entityone.getTransactionsByDate);
        app.route('/entityone/:id').delete(this.entityone.GpDelete);
app.route('/entityone/get/search').get(this.entityone.GpSearch);
app.route('/entityone/get/update').put(this.entityone.GpSearchForUpdate);
app.route('/entityone/:id').get(this.entityone.GpGetNounById);
app.route('/entityone').put(this.entityone.GpUpdate);
app.route('/entityone').get(this.entityone.GpGetAllValues);
app.route('/entityone').post(this.entityone.GpCreate);
app.route('/entityone/get/searchrelationship').get(this.entityone.GpSearchRelationship);
app.route('/entityone/userid/created_by').get(this.entityone.GpGetNounCreatedBy);
     }

}