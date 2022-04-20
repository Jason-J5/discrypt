/**
 * @name Discrypt
 * @author Purple
 * @description Brings encryption to Discord
 * @version 0.0.1
 * @donate 
 * @source https://github.com/Jason-J5/discrypt
 * @website 
 */

 module.exports = class Discrypt {
    load() {} // Optional function. Called when the plugin is loaded in to memory

    start() {
        BdApi.showToast("Discrypt plugin loaded!", {type:"success", icon: true});
        console.log("edits")
    } // Required function. Called when the plugin is activated (including after reloads)
    stop() {
        BdApi.showToast("Discrypt plugin stopped!", {type:"success", icon: true});
    } // Required function. Called when the plugin is deactivated

    observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}