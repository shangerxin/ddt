/**
 * Created by shange on 11/12/2016.
 */
let {TestObjectModelBase} = require("../../infrastructures/models/testObjectModelBase");

class CodeObjectModel extends TestObjectModelBase{
    constructor(){
        super();
    }

    get type(){
        return CodeObjectModel.name;
    }
}

exports.CodeObjectModel = CodeObjectModel;