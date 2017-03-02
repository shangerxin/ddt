/**
 * Created by erxin on 2/5/2017.
 */
let {ObjectBase}          = require("../objectBase").ObjectBase;
let {NotImplementedError} = require("../errors").NotImplementedError;

class EventArgumentBase extends ObjectBase {
    constructor(){
        super();
    }

    get eventType(){
        throw new NotImplementedError();
    }
}