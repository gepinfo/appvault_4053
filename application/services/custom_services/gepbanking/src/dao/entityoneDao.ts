import entityoneModel from '../models/daomodels/entityone';
import { CustomLogger } from '../config/Logger';
import { VaultConfig } from '../config/vaultconfig'; 
let vaultplaid = new VaultConfig();
const { Configuration, PlaidApi, PlaidEnvironments} = require('plaid');


export class entityoneDao {
    private entityone = entityoneModel;
    constructor() { }

    public async PlaidLinkCreate(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: PlaidLinkCreate');
        const cred = await vaultplaid.plaidConfig((response) => 
        {
          console.log("vaultresponse:",response);
            const PLAID_CLIENT_ID = response.PLAID_CLIENT_ID;
            const PLAID_SECRET = response.PLAID_SECRET;
            const PLAID_ENV = response.PLAID_ENV;
            const configuration = new Configuration
            ({
               basePath: PlaidEnvironments[PLAID_ENV],
               baseOptions: 
               {
                 headers: 
                 {
                   'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
                   'PLAID-SECRET': PLAID_SECRET,
                   'Plaid-Version': '2020-09-14',
                 },
               },
             });
            const client = new PlaidApi(configuration); 
            Promise.resolve().then(async function () 
            {                
              const createTokenResponse = await client.linkTokenCreate(reqbody);
              console.log("createTokenResponse.data:",createTokenResponse.data);
              new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: PlaidLinkCreate');
              callback(createTokenResponse.data);
            }).catch((error)=>
               {
                 callback(error);
               });
        });
    }        
    
    public async PlaidPublicTokenCreate(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: PlaidPublicTokenCreate');
        const cred = await vaultplaid.plaidConfig((response) => 
        {
            const PLAID_CLIENT_ID = response.PLAID_CLIENT_ID;
            const PLAID_SECRET = response.PLAID_SECRET;
            const PLAID_ENV = response.PLAID_ENV;
            const configuration = new Configuration
            ({
               basePath: PlaidEnvironments[PLAID_ENV],
               baseOptions: 
               {
                 headers: 
                 {
                   'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
                   'PLAID-SECRET': PLAID_SECRET,
                   'Plaid-Version': '2020-09-14',
                 },
               },
             });
            const client = new PlaidApi(configuration); 
            Promise.resolve().then(async function () 
            {                
              const createTokenResponse = await client.sandboxPublicTokenCreate(reqbody);
              new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: PlaidPublicTokenCreate');
              let vaultConfigJSON = 
              {
                "PLAID_CLIENT_ID":PLAID_CLIENT_ID,
                "PLAID_SECRET":PLAID_SECRET,
                "PLAID_ENV":PLAID_ENV,
                "PUBLIC_TOKEN":createTokenResponse.data.public_token
              }
              const credWrite = await vaultplaid.plaidWriteConfig(vaultConfigJSON,(response) => 
              { 
                    callback(createTokenResponse.data);
              });
            }).catch((error)=>
               {
                 callback(error);
               });
        });
    }

    public async PlaidAccessTokenCreate(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: PlaidAccessTokenCreate');
        const cred = await vaultplaid.plaidConfig((response) => 
        {
            const PLAID_CLIENT_ID = response.PLAID_CLIENT_ID;
            const PLAID_SECRET = response.PLAID_SECRET;
            const PLAID_ENV = response.PLAID_ENV;
            const PUBLIC_TOKEN = response.PUBLIC_TOKEN;
            const configuration = new Configuration
            ({
               basePath: PlaidEnvironments[PLAID_ENV],
               baseOptions: 
               {
                 headers: 
                 {
                   'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
                   'PLAID-SECRET': PLAID_SECRET,
                   'PUBLIC_TOKEN':PUBLIC_TOKEN,
                   'Plaid-Version': '2020-09-14',
                 }
               },
             });
            const client = new PlaidApi(configuration); 
            const request = 
            {
              client_id: PLAID_CLIENT_ID,
              secret: PLAID_SECRET,
              public_token: PUBLIC_TOKEN,
            };
            Promise.resolve().then(async function () 
            {                
              const createTokenResponse = await client.itemPublicTokenExchange(request);
              new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: PlaidAccessTokenCreate');
              let vaultConfigJSON = 
              {
                "PLAID_CLIENT_ID":PLAID_CLIENT_ID,
                "PLAID_SECRET":PLAID_SECRET,
                "PLAID_ENV":PLAID_ENV,
                "ACCESS_TOKEN":createTokenResponse.data.access_token
              }
              const credWrite = await vaultplaid.plaidWriteConfig(vaultConfigJSON,(response) => 
              { 
                    callback(createTokenResponse.data);
              });
            }).catch((error)=>
               {
                 callback(error);
               });
        });
    }

    public async PlaidGetBalance(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: PlaidGetBalance');
        const cred = await vaultplaid.plaidConfig((response) => 
        {
            const PLAID_CLIENT_ID = response.PLAID_CLIENT_ID;
            const PLAID_SECRET = response.PLAID_SECRET;
            const PLAID_ENV = response.PLAID_ENV;
            const ACCESS_TOKEN = response.ACCESS_TOKEN;
            const configuration = new Configuration
            ({
               basePath: PlaidEnvironments[PLAID_ENV],
               baseOptions: 
               {
                 headers: 
                 {
                   'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
                   'PLAID-SECRET': PLAID_SECRET,
                   'ACCESS_TOKEN':ACCESS_TOKEN,
                   'Plaid-Version': '2020-09-14',
                 },
               },
             });
            const client = new PlaidApi(configuration); 
            const request = 
            {
              client_id: PLAID_CLIENT_ID,
              secret: PLAID_SECRET,
              access_token: ACCESS_TOKEN,
            };
            Promise.resolve().then(async function () 
            {                
              const balanceResponse = await client.accountsBalanceGet(request);
              new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: PlaidGetBalance');
              callback(balanceResponse.data);
            }).catch((error)=>
               {
                 callback(error);
               });
        });
    }

    public async PlaidgetTransactionsByDate(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: PlaidgetTransactionsByDate');
        const cred = await vaultplaid.plaidConfig((response) => 
        {
            const PLAID_CLIENT_ID = response.PLAID_CLIENT_ID;
            const PLAID_SECRET = response.PLAID_SECRET;
            const PLAID_ENV = response.PLAID_ENV;
            const ACCESS_TOKEN = response.ACCESS_TOKEN;
            const configuration = new Configuration
            ({
               basePath: PlaidEnvironments[PLAID_ENV],
               baseOptions: 
               {
                 headers: 
                 {
                   'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
                   'PLAID-SECRET': PLAID_SECRET,
                   'ACCESS_TOKEN':ACCESS_TOKEN,
                   'Plaid-Version': '2020-09-14',
                 },
               },
             });
            const client = new PlaidApi(configuration); 
            const request = 
            {
              client_id: PLAID_CLIENT_ID,
              secret: PLAID_SECRET,
              access_token: ACCESS_TOKEN,
              start_date: "2021-01-01",
              end_date: "2021-12-10"
            };
            Promise.resolve().then(async function () 
            {                
              const balanceResponse = await client.transactionsGet(request);
              new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: PlaidgetTransactionsByDate');
              callback(balanceResponse.data);
            }).catch((error)=>
               {
                 callback(error);
               });
        });
    }

    public async GpDelete(entityoneId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: GpDelete');

    

    
    
    
    this.entityone.findByIdAndRemove(entityoneId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(entityoneData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(entityoneData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.entityone.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(entityoneData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: GpSearchForUpdate');

    

    
    
    
    this.entityone.findOneAndUpdate({ _id: entityoneData._id }, entityoneData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(entityoneId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: GpGetNounById');

    

    
    
    
    this.entityone.findById(entityoneId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: GpGetNounById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(entityoneData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: GpUpdate');

    

    
    
    
    this.entityone.findOneAndUpdate({ _id: entityoneData._id }, entityoneData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: GpGetAllValues');

    

    
    
    
    this.entityone.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(entityoneData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: GpCreate');

    let temp = new entityoneModel(entityoneData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchRelationship(entityoneData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: GpSearchRelationship');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(entityoneData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.entityone.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: GpSearchRelationship');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(entityoneData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entityoneDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.entityone.aggregate(([
                        { $match: { $and: [{ created_by: entityoneData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from entityoneDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}