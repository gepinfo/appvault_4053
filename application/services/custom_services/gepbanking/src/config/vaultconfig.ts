var vault = require("node-vault")
({ 
    apiVersion: 'v1', 
    endpoint: process.env.VAULT_URL, 
    token: 'vault-geppetto-2021' 
});

export class VaultConfig 
{
    plaidConfig(callback) 
    {
        console.log("getting plaid creds!")
        vault.read('plaid/creds').then((credentials) => 
        {
            console.log("credentials.data:",credentials.data);
            callback(credentials.data);
        });
    }

    plaidWriteConfig(newjson,callback) 
    {
        vault.write('plaid/creds',newjson).then((credentials) => 
        {
            callback(credentials);
        });
    }

    axisConfig(callback) 
    {
        vault.read('axis/creds').then((credentials) => 
        {
            callback(credentials.data);
        });
    }

    hdfcConfig(callback) 
    {
        vault.read('hdfc/creds').then((credentials) => 
        {
            callback(credentials.data);
        });
    }
}