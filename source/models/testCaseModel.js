/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
var {ModelBase} = require("../infrastructures/models/modelBase");
var {utils} = require("../global/utils");

class TestCaseModel extends ModelBase{
    constructor(description, name){
        super();
        this._testCases   = [];
        this._description = description;
        this._name        = name;
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
        return this._testCases;
    }

    get description(){
        this._description;
    }

    set description(value){
        this._description = value;
    }
}

exports.TestCaseModel = TestCaseModel;