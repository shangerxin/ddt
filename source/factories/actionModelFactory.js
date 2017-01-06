/**
 * Created by Shang, Erxin (Edwin) on 1/6/2017.
 */
let {FactoryBase}                = require("../infrastructures/factoryBase");
let _actionModelFactory;

class ActionModelFactory extends FactoryBase{
	constructor(){
		super();
	}

	static get instance(){
		if(!_actionModelFactory){
			_actionModelFactory = new ActionModelFactory();
		}
		return _actionModelFactory;
	}
}

exports.ActionModelFactory = ActionModelFactory;