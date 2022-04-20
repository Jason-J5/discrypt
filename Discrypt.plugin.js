/**
 * @name Discrypt
 * @author Purple
 * @description Brings encryption to Discord
 * @version 0.0.1
 * @donate 
 * @source https://github.com/Jason-J5/discrypt
 * @website http://Jason-J5.github.io/discrypt
 */

  // use as CommonJS, AMD, ES6 module or via window.openpgp

//   var pubKey = require('./pgp.js');
//   console.log(pubKey)


 module.exports = class Discrypt {
    load() {
        //
    } // Optional function. Called when the plugin is loaded in to memory

    start() {
        //const openpgp = require('openpgp');
        //BdApi.showToast("Discrypt plugin loaded!", {type:"success", icon: true});
        BdApi.alert("Welcome to discrypt", "Enjoy");
        
        // async function yesy() { //set the code to repeat without pausing discord itself.
        //     const { privateKey, publicKey } = await openpgp.generateKey({
        //         type: 'rsa', // Type of the key
        //         rsaBits: 4096, // RSA key size (defaults to 4096 bits)
        //         userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], // you can pass multiple user IDs
        //         passphrase: 'super long and hard to guess secret' // protects the private key
        //     });
        //     BdApi.showToast(publicKey);
        //  };
         //yesy();
         console.log("test")
        }
        // console.log(publicKey)
        // console.log(privateKey)
        // return publicKey;


     // Required function. Called when the plugin is activated (including after reloads)
    stop() {
        BdApi.showToast("Discrypt plugin stopped!", {type:"success", icon: true});
    } // Required function. Called when the plugin is deactivated

    observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>

    
    
}

