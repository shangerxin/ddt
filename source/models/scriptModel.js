/**
 * Created by Shang, Erxin (Edwin) on 11/6/2016.
 */

let {ModelBase} = require("../infrastructures/models/modelBase");
let {ConfigurationModel} = require("./configurationModel");
require("../global/extends/extendArray");

class ScriptModel extends ModelBase{
    constructor(name){
        this._testCases     = [];
        this._configuration = new ConfigurationModel();
        this._name          = name;
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
        return this._testCases;
    }

    get configuration(){
        return this._configuration;
    }

    appendTestCase(testCase){
        this._testCases.push(testCase);
    }

    insertTestCase(index, testCase){
        this._testCases.insert(index, testCase);
    }

    deleteTestCase(index){
        this._testCases.deleteByIndex(index);
    }

    toJSON(){

    }
}

exports.ScriptModel = ScriptModel;