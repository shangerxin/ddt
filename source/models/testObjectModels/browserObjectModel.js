/**
 * Created by shange on 11/12/2016.
 */
let {TestObjectModelBase} = require("../../infrastructures/models/testObjectModelBase");

class BrowserObjectModel extends TestObjectModelBase{
    constructor(){
        super();
    }

    get type(){
        return BrowserObjectModel.name;
    }
}

exports.BrowserObjectModel = BrowserObjectModel;