module.export function genKey(){

const openpgp = require('openpgp'); // use as CommonJS, AMD, ES6 module or via window.openpgp

async function getKeys(){
    const { privateKey, publicKey } = await openpgp.generateKey({
        type: 'rsa', // Type of the key
        rsaBits: 4096, // RSA key size (defaults to 4096 bits)
        userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], // you can pass multiple user IDs
        passphrase: 'super long and hard to guess secret' // protects the private key
    });
    return [publicKey, privateKey]
   // console.log(privateKey)
}
}

(async () => {
    pubkey = (await getKeys())[0];
    //console.log(pubkey);
    
  })()





// const { subtle } = require('crypto').webcrypto;

//         async function generateAesKey(length = 256) {
//           const key = await subtle.generateKey({
//             name: 'AES-CBC',
//             length
//           }, true, ['encrypt', 'decrypt']);
//           console.log(key);
//           return key;
//         }

//         console.log(generateAesKey())