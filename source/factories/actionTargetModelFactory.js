/**
 * Created by Shang, Erxin (Edwin) on 1/5/2017.
 */
let {FactoryBase} = require("../infrastructures/factoryBase");
let {BrowserActionTargetModel} = require("../models/actionTargetModels/browserActionTargetModel");
let {ClickObjectModel} = require("../models/actionTargetModels/clickableActionTargetModel");
let {CodeObjectModel} = require(".../models/actionTargetModels/dragableActionTargetModel");
let {InputObjectModel} = require("../models/actionTargetModels/inputActionTargetModel");
let {UploadObjectModel} = require("../models/actionTargetModels/uploadActionTargetModel");

class ActionTargetModelFactory{
	constructor(){
		super();
	}

	get type(){
		return ActionTargetModelFactory.name;
	}
}

exports.ActionTargetModelFactory = ActionTargetModelFactory;
