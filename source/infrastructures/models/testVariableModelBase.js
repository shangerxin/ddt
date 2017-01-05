/**
 * Created by Shang, Erxin (Edwin) on 11/13/2016.
 */
var {ModelBase} = require("./modelBase");

class TestVariableModelBase extends ModelBase{
    constructor(name, context){
        super();
        this._name = name;
        this._context = context;
    }

    get type(){
        return TestVariableModelBase.name;
    }

    get value(){
        return this._context.get(this._name);
    }

    get name(){
        return this._name;
    }
}

exports.TestVariableModelBase = TestVariableModelBase;