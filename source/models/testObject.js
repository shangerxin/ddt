/**
 * Created by shange on 9/7/2016.
 */
var {ObjectBase} = require("../infrastructures/objectBase");
var {utils} = require("../global/utils");

class TestObject extends ObjectBase {
    constructor(action, descriptor, domain) {
        super();
        this._action     = action;
        this._descriptor = descriptor;
        this._domain     = domain;
        this._id         = utils.getGUID();
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

    }

    identify(document) {
    }
}

exports.TestObject = TestObject;