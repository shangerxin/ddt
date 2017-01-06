/**
 * Created by Shang, Erxin (Edwin) on 10/13/2016.
 */
let {Observable} = require("./observable");
let {NotImplementedError} = require("./errors");

class CommunicatorBase extends Observable{
    constructor(){
        super();
        this._isReady = false;
    }

    get type(){
        return CommunicatorBase.name;
    }

    init(){
        throw new NotImplementedError();
    }

    /*
     * The send method should always return a promise
     */
    send(...args){
        throw new NotImplementedError();
    }

    get isReady(){
        return this._isReady;
    }
}

exports.CommunicatorBase = CommunicatorBase;
