/**
 * Created by shange on 11/13/2016.
 */
var {ObjectBase} = require("../../infrastructures/objectBase");

class TestVariableBase extends ObjectBase{
    constructor(name, context){
        super();
        this._name = name;
        this._context = context;
    }

    get name(){
        return this._name;
    }

    get value(){
        return this._context.get(this._name);
    }
}

exports.TestVariableBase = TestVariableBase;