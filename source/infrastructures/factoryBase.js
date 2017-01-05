/**
 * Created by Shang, Erxin (Edwin) on 10/5/2016.
 */
let {ObjectBase} = require("./objectBase");

class FactoryBase extends ObjectBase{
    constructor(){
        super();
    }

    get type(){
        return FactoryBase.name;
    }

    static instance(){
    }
}

exports.FactoryBase = FactoryBase;
