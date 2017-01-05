/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
let {StepModelBase} = require("../../infrastructures/models/stepModelBase");

class NavigateStepModel extends StepModelBase{
    constructor(){
        super();
    }

    get type(){
        return NavigateStepModel.name;
    }
}

exports.NavigateStepModel = NavigateStepModel;