/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
let {ActionTargetModelBase} = require("../../infrastructures/models/actionTargetModelBase");

class BrowserActionTargetModel extends ActionTargetModelBase{
    constructor(){
        super();
    }

    get type(){
        return BrowserActionTargetModel.name;
    }
}

exports.BrowserActionTargetModel = BrowserActionTargetModel;