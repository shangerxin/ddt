/**
 * Created by shange on 11/12/2016.
 */
let {TestObjectModelBase} = require("../../infrastructures/models/testObjectModelBase");

class TabObjectModel extends TestObjectModelBase{
    constructor(){
        super();
    }

    get type(){
        return TabObjectModel.name;
    }
}

exports.TabObjectModel = TabObjectModel;