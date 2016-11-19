/**
 * Created by shange on 11/12/2016.
 */
let {TestObjectModelBase} = require("../../infrastructures/models/testObjectModelBase");

class UploadObjectModel extends TestObjectModelBase{
    constructor(){
        super();
    }

    get type(){
        return UploadObjectModel.name;
    }
}

exports.UploadObjectModel = UploadObjectModel;