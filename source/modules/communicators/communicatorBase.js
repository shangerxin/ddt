/**
 * Created by shange on 10/13/2016.
 */
var {Observable} = require("../../infrastructures/observable");

class CommunicatorBase extends Observable{
    constructor(){
        super();
        this._isReady = false;
    }

    init(){
    }

    /*
     * The request method should always return a promise
     */
    request(...args){
    }

    get isReady(){
        return this._isReady;
    }
}

exports.CommunicatorBase = CommunicatorBase;