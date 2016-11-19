/**
 * Created by shange on 11/12/2016.
 */
var {ModelBase} = require("../infrastructures/models/modelBase");
var {utils} = require("../global/utils");

class TestCaseModel extends ModelBase{
    constructor(description, name){
        super();
        this._testSteps = [];
        this._description = description;
        this._name = name;
    }

    get type(){
        return TestCaseModel.name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
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