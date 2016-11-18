/**
 * Created by shange on 11/12/2016.
 */
let {ModelBase} = require("../infrastructures/models/modelBase");
let {utils} = require("../global/utils");

class TestSuiteModel extends ModelBase{
    constructor(description){
        super();
        this._id          = utils.getGUID();
        this._testSteps = [];
        this._description = description;
    }

    get id(){
        return this._id;
    }

    get testCases(){
        return this._testSteps;
    }

    get description(){
        this._description;
    }
}

exports.TestSuiteModel = TestSuiteModel;