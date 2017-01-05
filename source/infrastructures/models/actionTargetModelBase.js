/**
 * Created by Shang, Erxin (Edwin) on 9/7/2016.
 */
var {ModelBase} = require("./modelBase");
var {utils} = require("../../global/utils");

class ActionTargetModelBase extends ModelBase {
    constructor(action, descriptor, domain, name) {
        super();
        this._action     = action;
        this._descriptor = descriptor;
        this._domain     = domain;
        this._name       = name;
    }

    get type(){
        return ActionTargetModelBase.name;
    }

    get domain() {
        return this._domain;
    }

    get action() {
        return this._action;
    }

    get descriptor() {
        return this._descriptor;
    }

    set descriptor(value){
        this._descriptor = value;
    }
}

exports.ActionTargetModelBase = ActionTargetModelBase;