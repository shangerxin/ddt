/**
 * Created by shange on 11/6/2016.
 */

var {ObjectBase} = require("../infrastructures/objectBase");
var {TestStep} = require("./step");


require("../../global/extends/extendArray");

class TestScript extends ObjectBase{
    constructor(){
        this._steps = [];
        this._config = {};
    }

    get steps(){
        return this._steps;
    }

    get configure(){
        return this._config;
    }

    addStep(step){
        this._steps.push(step);
    }

    insertStep(index, step){
        this._steps.splice(index, 0, step);
    }

    deleteStep(index){
        this._steps.splice()
    }

    toJSON(){

    }
}

exports.TestScript = TestScript;