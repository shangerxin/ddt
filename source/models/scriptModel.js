/**
 * Created by shange on 11/6/2016.
 */

let {ModelBase} = require("../infrastructures/models/modelBase");
let {ConfigurationModel} = require("./configurationModel");
require("../global/extends/extendArray");

class ScriptModel extends ModelBase{
    constructor(name){
        this._testSteps     = [];
        this._configuration = new ConfigurationModel();
        this._name = name;
    }

    get type(){
        return ScriptModel.name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

    get testCases(){
        return this._testSteps;
    }

    get configuration(){
        return this._configuration;
    }

    appendTestCase(testCase){
        this._testSteps.push(testCase);
    }

    insertTestCase(index, testCase){
        this._testSteps.splice(index, 0, testCase);
    }

    deleteTestCase(index){
        this._testSteps.splice()
    }

    toJSON(){

    }
}

exports.ScriptModel = ScriptModel;