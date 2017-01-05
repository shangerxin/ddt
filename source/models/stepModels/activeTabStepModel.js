/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
let {StepModelBase} = require("../../infrastructures/models/stepModelBase");

class ActiveTabStepModel extends StepModelBase{
    constructor(){
        super();
    }

    get type(){
        return ActiveTabStepModel.name;
    }
}

exports.ActiveTabStepModel = ActiveTabStepModel;