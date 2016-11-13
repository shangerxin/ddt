/**
 * Created by shange on 11/12/2016.
 */
var {ObjectBase} = require("../infrastructures/objectBase");
var {utils} = require("../global/utils");

class TestSuite extends ObjectBase{
    constructor(description){
        super();
        this._id          = utils.getGUID();
        this._testCases   = [];
        this._description = description;
    }

    get id(){
        return this._id;
    }

    get testCases(){
        return this._testCases;
    }

    get description(){
        this._description;
    }
}

exports.TestSuite = TestSuite;