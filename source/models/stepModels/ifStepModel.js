/**
 * Created by shange on 11/12/2016.
 */
let {StepModelBase} = require("../../infrastructures/models/stepModelBase");

class IfStepModel extends StepModelBase{
    constructor(){
        super();
    }

    get type(){
        return IfStepModel.name;
    }
}

exports.IfStepModel = IfStepModel;