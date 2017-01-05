/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
let {StepModelBase} = require("../../infrastructures/models/stepModelBase");

class EvalStepModel extends StepModelBase{
    constructor(){
        super();
    }

    get type(){
        return EvalStepModel.name;
    }
}

exports.EvalStepModel = EvalStepModel;