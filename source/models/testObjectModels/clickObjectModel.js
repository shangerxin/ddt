/**
 * Created by shange on 11/12/2016.
 */
let {TestObjectModelBase} = require("../../infrastructures/models/testObjectModelBase");

class ClickObjectModel extends TestObjectModelBase{
    constructor(){
        super();
    }

    get type(){
        return ClickObjectModel.name;
    }
}

exports.ClickObjectModel = ClickObjectModel;