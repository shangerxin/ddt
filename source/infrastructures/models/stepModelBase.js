/**
 * Created by Shang, Erxin (Edwin) on 11/6/2016.
 */
var {ModelBase} = require("./modelBase");
var {utils}     = require("../../global/utils");

class StepModelBase extends ModelBase {
	constructor(action, target, args) {
		super();
		this._action    = action;
		this._target    = target;
		this._args      = args;
		this._isSuccess = null;
		this.startTime  = null;
		this.endTime    = null;
	}

	get type() {
		return StepModelBase.name;
	}

	get target() {
		return this._target;
	}

	set target(value) {
		this._target = value;
	}

	get action() {
		return this._action;
	}

	get args() {
		return this._args;
	}

	get isSuccess() {
		return this._isSuccess;
	}
}

exports.StepModelBase = StepModelBase;