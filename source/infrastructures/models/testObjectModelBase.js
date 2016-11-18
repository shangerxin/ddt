/**
 * Created by shange on 9/7/2016.
 */
var {ModelBase} = require("./modelBase");
var {utils} = require("../../global/utils");

class TestObjectModelBase extends ModelBase {
    constructor(action, descriptor, domain, name) {
        super();
        this._action     = action;
        this._descriptor = descriptor;
        this._domain     = domain;
        this._name       = name;
        this._id         = utils.getGUID();
    }

    get name(){
        return this._name;
    }

    get id() {
        return this._id;
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

exports.TestObjectModelBase = TestObjectModelBase;