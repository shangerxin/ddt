/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
let {ActionTargetModelBase} = require("../../infrastructures/models/actionTargetModelBase");

class UploadActionTargetModel extends ActionTargetModelBase{
    constructor(){
        super();
    }

    get type(){
        return UploadActionTargetModel.name;
    }
}

exports.UploadActionTargetModel = UploadActionTargetModel;
