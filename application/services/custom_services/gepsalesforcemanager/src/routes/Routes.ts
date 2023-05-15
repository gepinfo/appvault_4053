import { Request, Response, NextFunction } from "express";
import { SaleforceController } from '../controller/salesforceapiController';


export class Routes {
    private saleforceController: SaleforceController = new SaleforceController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/salesforceapi/get/search').get(this.saleforceController.GpSearch);
        app.route('/salesforceapi/userid/created_by').get(this.saleforceController.GpGetNounCreatedBy);
        app.route('/salesforceapi/:id').delete(this.saleforceController.GpDelete);
        app.route('/salesforceapi/get/update').put(this.saleforceController.GpSearchForUpdate);
        app.route('/salesforceapi').put(this.saleforceController.GpUpdate);
        app.route('/salesforceapi/:id').get(this.saleforceController.GpGetEntityById);
        app.route('/salesforceapi').get(this.saleforceController.GpGetAllValues);
        app.route('/salesforceapi').post(this.saleforceController.GpCreate);

        app.route('/salesforceapi/login').post(this.saleforceController.salesforcelogin);
     }

}