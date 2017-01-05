/**
 * Created by Shang, Erxin (Edwin) on 10/5/2016.
 */
let {ObjectBase} = require("./objectBase");
let {NotImplementedError} = require("./errors");

class FactoryBase extends ObjectBase{
    constructor(){
        super();
    }

    get type(){
        return FactoryBase.name;
    }

    static get instance(){
        throw new NotImplementedError();
    }
}

exports.FactoryBase = FactoryBase;
