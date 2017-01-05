/**
 * Created by Shang, Erxin (Edwin) on 1/5/2017.
 */
let {ModelBase} = require("./modelBase");

class ActionModelBase extends ModelBase{
	constructor(){
		super();
	}

	get type(){
		return ActionModelBase.name;
	}
}

exports.ActionModelBase = ActionModelBase;