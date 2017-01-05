/**
 * Created by Shang, Erxin (Edwin) on 11/18/2016.
 */
let {LoggerBase} = require("../../infrastructures/loggerBase");

class BrowserLogger extends LoggerBase{
    constructor(){
        super();
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

exports.BrowserLogger = BrowserLogger;