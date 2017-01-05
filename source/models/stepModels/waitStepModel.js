/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
let {StepModelBase} = require("../../infrastructures/models/stepModelBase");

class WaitStepModel extends StepModelBase{
    constructor(){
        super();
    }

    get type(){
        return WaitStepModel.name;
    }
}

exports.WaitStepModel = WaitStepModel;