/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
let {StepModelBase} = require("../../infrastructures/models/stepModelBase");

class CatchStepModel extends StepModelBase{
    constructor(){
        super();
    }

    get type(){
        return CatchStepModel.name;
    }
}

exports.CatchStepModel = CatchStepModel;