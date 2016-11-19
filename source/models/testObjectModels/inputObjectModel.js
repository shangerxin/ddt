/**
 * Created by shange on 11/12/2016.
 */
let {TestObjectModelBase} = require("../../infrastructures/models/testObjectModelBase");

class InputObjectModel extends TestObjectModelBase{
    constructor(){
        super();
    }

    get type(){
        return InputObjectModel.name;
    }
}

exports.InputObjectModel = InputObjectModel;