/**
 * Created by Shang, Erxin (Edwin) on 9/7/2016.
 */

let {ObjectBase} = require("./objectBase");
let {NotImplementedError} = require("./errors");

class ValidatorBase extends ObjectBase{
	constructor(){
		super();
	}

	get type(){
		return ValidatorBase.name;
	}

	/*
	 * validate a given item's value is valid or not return true or false
	 */
	isValid(item){
		throw new NotImplementedError();
	}
}

exports.ValidatorBase = ValidatorBase;
