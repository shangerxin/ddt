/**
 * Created by Shang, Erxin (Edwin) on 1/5/2017.
 */
let {ActionTargetModelBase} = require("../../infrastructures/models/actionTargetModelBase");

class DragableActionTargetModel extends ActionTargetModelBase{
	constructor(){
		super();
	}

	get type(){
		return DragableActionTargetModel.name;
	}
}

exports.DragableActionTargetModel = DragableActionTargetModel;
