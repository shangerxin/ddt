/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
let {StepModelBase} = require("../../infrastructures/models/stepModelBase");

class ExitStepModel extends StepModelBase{
    constructor(){
        super();
    }

    get type(){
        return ExitStepModel.name;
    }
}

exports.ExitStepModel = ExitStepModel;