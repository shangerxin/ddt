/**
 * Created by Shang, Erxin (Edwin) on 11/6/2016.
 */

let {ModelBase} = require("../infrastructures/models/modelBase");
let {ConfigurationModel} = require("./configurationModel");
require("../global/extends/extendArray");

class ScriptModel extends ModelBase{
    constructor(name){
        this.steps          = [];
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
        return this.steps;
    }

    get configuration(){
        return this._configuration;
    }

    appendTestCase(testCase){
        this.steps.push(testCase);
    }

    insertTestCase(index, testCase){
        this.steps.insert(index, testCase);
    }

    deleteTestCase(index){
        this.steps.deleteByIndex(index);
    }

    toJSON(){

    }
}

exports.ScriptModel = ScriptModel;