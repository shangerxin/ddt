/**
 * Created by Shang, Erxin (Edwin) on 10/30/2016.
 */
var CommunicatorBase = require("../../infrastructures/communicatorBase").CommunicatorBase;

class DirectCommunicator extends CommunicatorBase{
    constructor(){
        super();

    }

    init(){
        this._isReady = true;
    }

    /*
     * The send method should always return a promise
     */
    send(...args){
        this.publishUpChain(...args);
    }

    get isReady(){
        return this._isReady;
    }
}

exports.DirectCommunicator = DirectCommunicator;