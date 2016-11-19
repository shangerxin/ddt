/**
 * Created by shange on 11/12/2016.
 */
let {StepModelBase} = require("../../infrastructures/models/stepModelBase");

class ExpectStepModel extends StepModelBase{
    constructor(){
        super();
    }

    get type(){
        return ExpectStepModel.name;
    }
}

exports.ExpectStepModel = ExpectStepModel;