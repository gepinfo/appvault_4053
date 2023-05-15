import { CustomLogger } from '../config/Logger';
import { VaultConfig } from '../config/vaultconfig'; 
let vaultaxis = new VaultConfig();


export class axisDao 
{
    
    constructor() { }

    public async AxisLinkCreate(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into axisDao.ts: AxisLinkCreate');
        const cred = await vaultaxis.axisConfig((response) => 
        {
            const AXIS_CLIENT_ID = response.AXIS_CLIENT_ID;
            const AXIS_SECRET = response.AXIS_SECRET;
            const AXIS_ENV = response.AXIS_ENV;
            callback("Axis Dao hit!");
        });
    }  

    public async AxisPublicTokenCreate(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into axisDao.ts: AxisPublicTokenCreate');
        const cred = await vaultaxis.axisConfig((response) => 
        {
            const AXIS_CLIENT_ID = response.AXIS_CLIENT_ID;
            const AXIS_SECRET = response.AXIS_SECRET;
            const AXIS_ENV = response.AXIS_ENV;
            callback("AxisPublicTokenCreate hit!");
        });
    }  

    public async AxisAccessTokenCreate(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into axisDao.ts: AxisAccessTokenCreate');
        const cred = await vaultaxis.axisConfig((response) => 
        {
            const AXIS_CLIENT_ID = response.AXIS_CLIENT_ID;
            const AXIS_SECRET = response.AXIS_SECRET;
            const AXIS_ENV = response.AXIS_ENV;
            callback("AxisAccessTokenCreate hit!");
        });
    } 
    
    public async AxisGetBalance(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into axisDao.ts: AxisGetBalance');
        const cred = await vaultaxis.axisConfig((response) => 
        {
            const AXIS_CLIENT_ID = response.AXIS_CLIENT_ID;
            const AXIS_SECRET = response.AXIS_SECRET;
            const AXIS_ENV = response.AXIS_ENV;
            callback("AxisGetBalance hit!");
        });
    }
    
    public async AxisgetTransactionsByDate(reqbody, callback)
    {   
        new CustomLogger().showLogger('info', 'Enter into axisDao.ts: AxisgetTransactionsByDate');
        const cred = await vaultaxis.axisConfig((response) => 
        {
            const AXIS_CLIENT_ID = response.AXIS_CLIENT_ID;
            const AXIS_SECRET = response.AXIS_SECRET;
            const AXIS_ENV = response.AXIS_ENV;
            callback("AxisgetTransactionsByDate hit!");
        });
    }
}