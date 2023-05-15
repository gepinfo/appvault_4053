import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class gepbankingController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/gepbanking/:id', this.GpDelete);
this.router.get('/gepbanking/get/search', this.GpSearch);
this.router.put('/gepbanking/get/update', this.GpSearchForUpdate);
this.router.put('/gepbanking', this.GpUpdate);
this.router.get('/gepbanking/:id', this.GpGetEntityById);
this.router.get('/gepbanking', this.GpGetAllValues);
this.router.post('/gepbanking', this.GpCreate);
this.router.get('/gepbanking/userid/created_by', this.GpGetNounCreatedBy);
        //#@gepdelimeterone@#
        //#@ssofacebookapiroute@#
        //#@ssogithubapiroute@#
        this.router.post('/link/token/create', this.bankLinkCreate);
                                   this.router.post('/item/public_token/exchange', this.accessTokenCreate);
                                   this.router.post('/accounts/balance/get', this.getBalance);
                                   this.router.post('/transactions/get', this.getTransactionsByDate);
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpDelete');
        new ApiAdapter().delete(Constant.GEPBANKINGURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpSearch');
        new ApiAdapter().get(Constant.GEPBANKINGURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpSearchForUpdate');
        new ApiAdapter().put(Constant.GEPBANKINGURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpUpdate');
        new ApiAdapter().put(Constant.GEPBANKINGURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetEntityById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpGetEntityById');
        new ApiAdapter().get(Constant.GEPBANKINGURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpGetEntityById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.GEPBANKINGURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpCreate');
        new ApiAdapter().post(Constant.GEPBANKINGURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounCreatedBy(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: GpGetNounCreatedBy');
        new ApiAdapter().get(Constant.GEPBANKINGURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: GpGetNounCreatedBy');
        }).catch(err => {
            res.send(err);
        });
    }

    //#@gepdelimeter@#

    //#@apifacebooklogin@#

    //#@apigithublogin@#

    public bankLinkCreate(req: Request, res: Response) {
    new CustomLogger().showLogger('info', 'Enter into gepbankingController.ts: bankLinkCreate');
     new ApiAdapter().post(Constant.GEPBANKINGURL + `${req.url}`,req.body)
          .then((res: any) => res.response.json()).then(result => {
    switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
    new CustomLogger().showLogger('info', 'Exit from gepbankingController.ts: bankLinkCreate');
}).catch(err => {
    res.send(err);
});
}

public accessTokenCreate(req: Request, res: Response) {
    new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: accessTokenCreate');
new ApiAdapter().post(Constant.GEPBANKINGURL + `${req.url}`,req.body)
.then((res: any) => res.response.json()).then(result => {
    switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
    new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: accessTokenCreate');
}).catch(err => {
    res.send(err);
});
}

public getBalance(req: Request, res: Response) {
    new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: getBalance');
new ApiAdapter().post(Constant.GEPBANKINGURL + `${req.url}`,req.body)
.then((res: any) => res.response.json()).then(result => {
    switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
    new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: getBalance');
}).catch(err => {
    res.send(err);
});
}

public getTransactionsByDate(req: Request, res: Response) {
    new CustomLogger().showLogger('info', 'Enter into entityoneController.ts: getTransactionsByDate');
new ApiAdapter().post(Constant.GEPBANKINGURL + `${req.url}`,req.body)
.then((res: any) => res.response.json()).then(result => {
    switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
    new CustomLogger().showLogger('info', 'Exit from entityoneController.ts: getTransactionsByDate');
}).catch(err => {
    res.send(err);
});
}








}

