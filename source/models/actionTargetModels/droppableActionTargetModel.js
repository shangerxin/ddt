/**
 * Created by Shang, Erxin (Edwin) on 1/5/2017.
 */
let {ActionTargetModelBase} = require("../../infrastructures/models/actionTargetModelBase");

class DroppableActionTargetModel extends ActionTargetModelBase{
	constructor(){
		super();
	}

	get type(){
		return DroppableActionTargetModel.name;
	}
}

exports.DroppableActionTargetModel = DroppableActionTargetModel;