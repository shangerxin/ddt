/**
 * Created by shange on 11/6/2016.
 */

var {ObjectBase} = require("../infrastructures/objectBase");
require("../global/extends/extendArray");

class Script extends ObjectBase{
    constructor(){
        this._testCases = [];
        this._config    = {};
    }

    get testCases(){
        return this._testCases;
    }

    get configure(){
        return this._config;
    }

    appendTestCase(testCase){
        this._testCases.push(testCase);
    }

    insertTestCase(index, testCase){
        this._testCases.splice(index, 0, testCase);
    }

    deleteTestCase(index){
        this._testCases.splice()
    }

    toJSON(){

    }
}

exports.Script = Script;