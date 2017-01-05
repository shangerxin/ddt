/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
let {StepModelBase} = require("../../infrastructures/models/stepModelBase");

class BreakStepModel extends StepModelBase{
    constructor(){
        super();
    }

    get type(){
        return BreakStepModel.name;
    }
}

exports.BreakStepModel = BreakStepModel;