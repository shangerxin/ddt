/**
 * Created by shange on 11/19/2016.
 */
let {FactoryBase}                = require("../infrastructures/factoryBase");
let {ActiveTabStepModel}         = require("../models/stepModels/activeTabStepModel");
let {BreakStepModel}             = require("../models/stepModels/breakStepModel");
let {BrowserActionStepModel}     = require("../models/stepModels/browserActionStepModel");
let {CatchStepModel}             = require("../models/stepModels/catchStepModel");
let {ElementActionStepModel}     = require("../models/stepModels/elementActionStepModel");
let {EvalStepModel}              = require("../models/stepModels/evalStepModel");
let {ExitStepModel}              = require("../models/stepModels/exitStepModel");
let {ExpectStepModel}            = require("../models/stepModels/expectStepModel");
let {ForStepModel}               = require("../models/stepModels/forStepModel");
let {IfStepModel}                = require("../models/stepModels/ifStepModel");
let {NavigateStepModel}          = require("../models/stepModels/navigateStepModel");
let {WaitForTestObjectStepModel} = require("../models/stepModels/waitForTestObjectStepModel");
let {WaitStepModel}              = require("../models/stepModels/waitStepModel");

class StepModelFactory extends FactoryBase {
    constructor() {
        super();
    }

    get type() {
        return StepModelFactory.name;
    }

    createActiveTabStep() {
    }

    createBreakStep() {}

    createBrowserActionStep() {}

    createCatchStep() {}

    createElementActionStep() {}

    createEvalStep() {}

    createExitStep() {}

    createExpectStep() {}

    createForStep() {}

    createIfStep() {}

    createNavigateStep() {
    }

    createWaitForTestObjectStep() {}

    createWaitStep() {}
}

exports.StepModelFactory = StepModelFactory;