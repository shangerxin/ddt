/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
let {ActionTargetModelBase} = require("../../infrastructures/models/actionTargetModelBase");

class ClickableActionTargetModel extends ActionTargetModelBase{
    constructor(){
        super();
    }

    get type(){
        return ClickableActionTargetModel.name;
    }
}

exports.ClickableActionTargetModel = ClickableActionTargetModel;
