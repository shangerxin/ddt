/**
 * Created by shange on 11/12/2016.
 */
var {ModelBase} = require("../infrastructures/models/modelBase");
var {utils} = require("../global/utils");

class TestCaseModel extends ModelBase{
    constructor(description){
        super();
        this._id          = utils.getGUID();
        this._testSteps = [];
        this._description = description;
    }

    get id(){
        return this._id;
    }

    get steps(){
        return this._testSteps;
    }

    get description(){
        this._description;
    }

    set description(value){
        this._description = value;
    }
}

exports.TestCaseModel = TestCaseModel;