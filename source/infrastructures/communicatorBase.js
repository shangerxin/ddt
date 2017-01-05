/**
 * Created by Shang, Erxin (Edwin) on 10/13/2016.
 */
let {Observable} = require("./observable");

class CommunicatorBase extends Observable{
    constructor(){
        super();
        this._isReady = false;
    }

    get type(){
        return CommunicatorBase.name;
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
