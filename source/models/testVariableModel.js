/**
 * Created by shange on 11/13/2016.
 */
let {ModelBase} = require("../infrastructures/models/modelBase");

class TestVariableModel extends ModelBase {
    constructor(name){
        super();
        this._name = name;
    }

    get type(){
        return TestVariableModel.name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}

exports.TestVariableModel = TestVariableModel;
