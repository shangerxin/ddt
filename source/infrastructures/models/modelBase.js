/**
 * Created by Shang, Erxin (Edwin) on 11/18/2016.
 */
let {ObjectBase} = require("../objectBase");
let {utils} = require("../../global/utils");

class ModelBase extends ObjectBase{
    constructor(){
        super();
        this._id = utils.getGUID();
    }

    get type(){
        return ModelBase.name;
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }
}

exports.ModelBase = ModelBase;