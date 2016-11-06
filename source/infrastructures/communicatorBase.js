/**
 * Created by shange on 10/13/2016.
 */
var {Observable} = require("./observable");

class CommunicatorBase extends Observable{
    constructor(){
        super();
        this._isReady = false;
    }

    init(){
    }

    /*
     * The send method should always return a promise
     */
    send(...args){
    }

    get isReady(){
        return this._isReady;
    }
}

exports.CommunicatorBase = CommunicatorBase;