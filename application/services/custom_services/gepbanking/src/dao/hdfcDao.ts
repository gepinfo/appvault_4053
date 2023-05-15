import { CustomLogger } from '../config/Logger';
import { VaultConfig } from '../config/vaultconfig'; 
let vaulthdfc = new VaultConfig();


export class hdfcDao 
{
    
    constructor() { }

    public async HdfcLinkCreate(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into hdfcDao.ts: HdfcLinkCreate');
        const cred = await vaulthdfc.hdfcConfig((response) => 
        {
            const HDFC_CLIENT_ID = response.HDFC_CLIENT_ID;
            const HDFC_SECRET = response.HDFC_SECRET;
            const HDFC_ENV = response.HDFC_ENV;
            callback("Hdfc Dao hit!");
        });
    }
    
    public async HdfcPublicTokenCreate(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into hdfcDao.ts: HdfcPublicTokenCreate');
        const cred = await vaulthdfc.hdfcConfig((response) => 
        {
            const HDFC_CLIENT_ID = response.HDFC_CLIENT_ID;
            const HDFC_SECRET = response.HDFC_SECRET;
            const HDFC_ENV = response.HDFC_ENV;
            callback("HdfcPublicTokenCreate hit!");
        });
    } 

    public async HdfcAccessTokenCreate(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into hdfcDao.ts: HdfcAccessTokenCreate');
        const cred = await vaulthdfc.hdfcConfig((response) => 
        {
            const HDFC_CLIENT_ID = response.HDFC_CLIENT_ID;
            const HDFC_SECRET = response.HDFC_SECRET;
            const HDFC_ENV = response.HDFC_ENV;
            callback("HdfcAccessTokenCreate hit!");
        });
    }
    
    public async HdfcGetBalance(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into hdfcDao.ts: HdfcGetBalance');
        const cred = await vaulthdfc.hdfcConfig((response) => 
        {
            const HDFC_CLIENT_ID = response.HDFC_CLIENT_ID;
            const HDFC_SECRET = response.HDFC_SECRET;
            const HDFC_ENV = response.HDFC_ENV;
            callback("HdfcGetBalance hit!");
        });
    }

    public async HdfcgetTransactionsByDate(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into hdfcDao.ts: HdfcgetTransactionsByDate');
        const cred = await vaulthdfc.hdfcConfig((response) => 
        {
            const HDFC_CLIENT_ID = response.HDFC_CLIENT_ID;
            const HDFC_SECRET = response.HDFC_SECRET;
            const HDFC_ENV = response.HDFC_ENV;
            callback("HdfcgetTransactionsByDate hit!");
        });
    }
}