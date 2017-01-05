/**
 * Created by Shang, Erxin (Edwin) on 11/18/2016.
 */
let {ObjectBase} = require("./objectBase");

class LoggerBase extends ObjectBase{
    constructor(){
        super();
    }

    get type(){
        return LoggerBase.name;
    }

    log(msg, ...args){
    }

    info(msg, ...args){

    }

    warn(msg, ...args){

    }

    error(msg, ...args){

    }

    critical(msg, ...args){

    }
}

exports.LoggerBase = LoggerBase;
