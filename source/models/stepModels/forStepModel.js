/**
 * Created by shange on 11/12/2016.
 */
let {StepModelBase} = require("../../infrastructures/models/stepModelBase");

class ForStepModel extends StepModelBase{
    constructor(){
        super();
    }

    get type(){
        return ForStepModel.name;
    }
}

exports.ForStepModel = ForStepModel;