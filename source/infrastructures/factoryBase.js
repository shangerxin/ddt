/**
 * Created by shange on 10/5/2016.
 */
let {ObjectBase} = require("./objectBase");


class FactoryBase extends ObjectBase{
    constructor(){
        super();
    }

    static instance(){
    }
}

exports.FactoryBase = FactoryBase;