/**
 * Created by shange on 11/12/2016.
 */
var {ObjectBase} = require("../infrastructures/objectBase");
var {utils} = require("../global/utils");

class TestCase extends ObjectBase{
    constructor(description){
        super();
        this._id          = utils.getGUID();
        this._testCases   = [];
        this._description = description;
    }

    get id(){
        return this._id;
    }

    get steps(){
        return this._testCases;
    }

    get description(){
        this._description;
    }

    set description(value){
        this._description = value;
    }
}

exports.TestCase = TestCase;