/**
 * Created by shange on 11/12/2016.
 */
let {StepModelBase} = require("../../infrastructures/models/stepModelBase");

class BrowserActionStepModel extends StepModelBase{
    constructor(){
        super();
    }

    get type(){
        return BrowserActionStepModel.name;
    }
}

exports.BrowserActionStepModel = BrowserActionStepModel;