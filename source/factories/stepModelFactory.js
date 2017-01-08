/**
 * Created by Shang, Erxin (Edwin) on 11/19/2016.
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

let _stepModelFactory;

class StepModelFactory extends FactoryBase {
    constructor() {
        super();
    }

    get type() {
        return StepModelFactory.name;
    }

    static get instance(){
      if(!_stepModelFactory){
        _stepModelFactory = new _stepModelFactory;
      }
      return _stepModelFactory;
    }

    createActiveTabStep() {
        return new ActiveTabStepModel();
    }

    createBreakStep() {
        return new BreakStepModel();
    }

    createBrowserActionStep() {
        return new BrowserActionStepModel();
    }

    createCatchStep() {
        return new CatchStepModel();
    }

    createElementActionStep() {
        return new ElementActionStepModel();
    }

    createEvalStep() {
        return new EvalStepModel();
    }

    createExitStep() {
        return new ExitStepModel();
    }

    createExpectStep() {
        return new ExpectStepModel();
    }

    createForStep() {
        return new ForStepModel();
    }

    createIfStep() {
        return new IfStepModel();
    }

    createNavigateStep() {
        return new NavigateStepModel();
    }

    createWaitForTestObjectStep() {
        return new WaitForTestObjectStepModel();
    }

    createWaitStep() {
        return WaitStepModel();
    }
}

exports.StepModelFactory = StepModelFactory;
