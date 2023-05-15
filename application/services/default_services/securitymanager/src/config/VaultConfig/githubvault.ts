var vault = require("node-vault")
({ 
    apiVersion: 'v1', 
    endpoint: process.env.VAULT_URL, 
    token: 'vault-geppetto-2021' 
});

export class VaultConfig 
{
    githubvaultConfig(callback) 
    {
        vault.read('sso/login/github').then((credentials) => 
        {
            callback(credentials.data);
        })
    }
}