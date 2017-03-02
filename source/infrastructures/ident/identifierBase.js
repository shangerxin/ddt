/**
 * Created by erxin on 3/2/2017.
 */
let {ObjectBase}          = require("../objectBase").ObjectBase;
let {NotImplementedError} = require("../errors").NotImplementedError;

class IdentifierBase extends ObjectBase {
    constructor(){
        super();
    }

    find(dom, actionTarget){
        throw new NotImplementedError();
    }
}

exports.IdentifierBase = IdentifierBase;