/**
 * Created by shange on 11/12/2016.
 */
let {StepModelBase} = require("../../infrastructures/models/stepModelBase");

class WaitForTestObjectStepModel extends StepModelBase{
    constructor(){
        super();
    }

    get type(){
        return WaitForTestObjectStepModel.name;
    }
}

exports.WaitForTestObjectStepModel = WaitForTestObjectStepModel;