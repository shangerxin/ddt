/**
 * Created by Shang, Erxin (Edwin) on 1/5/2017.
 */
let {FactoryBase}                = require("../infrastructures/factoryBase");
let {BrowserActionTargetModel}   = require("../models/actionTargetModels/browserActionTargetModel");
let {ClickableActionTargetModel} = require("../models/actionTargetModels/clickableActionTargetModel");
let {DragableActionTargetModel}  = require(".../models/actionTargetModels/dragableActionTargetModel");
let {InputActionTargetModel}     = require("../models/actionTargetModels/inputActionTargetModel");
let {UploadActionTargetModel}    = require("../models/actionTargetModels/uploadActionTargetModel");

let _actionTargetModelFactory;

class ActionTargetModelFactory extends FactoryBase {
	constructor() {
		super();
	}

	get type() {
		return ActionTargetModelFactory.name;
	}

	createBrowserActionTargetModel() {
		return new BrowserActionTargetModel();
	}

	createClickableActionTargetModel() {
		return new ClickableActionTargetModel();
	}

	createDragableActionTargetModel(){
		return new DragableActionTargetModel();
	}

	createInputActionTargetModel(){
		return new InputActionTargetModel();
	}

	createUploadActionTargetModel(){
		return new UploadActionTargetModel();
	}

	static get instance(){
		if(_actionTargetModelFactory){
			_actionTargetModelFactory = new ActionTargetModelFactory();
		}
		return _actionTargetModelFactory;
	}
}

exports.ActionTargetModelFactory = ActionTargetModelFactory;
