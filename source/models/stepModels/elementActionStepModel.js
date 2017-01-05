/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
let {StepModelBase} = require("../../infrastructures/models/stepModelBase");

class ElementActionStep extends StepModelBase{
    constructor(){
        super();
    }

    get type(){
        return ElementActionStep.name;
    }
}

exports.ElementActionStep = ElementActionStep;