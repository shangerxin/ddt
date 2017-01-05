/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
let {ModelBase} = require("../infrastructures/models/modelBase");
let {utils}     = require("../global/utils");

class TestSuiteModel extends ModelBase {
	constructor(description, name) {
		super();
		this._testCases   = [];
		this._description = description;
		this._name        = name;
	}

	get type() {
		return TestSuiteModel.name;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get testCases() {
		return this._testCases;
	}

	get description() {
		this._description;
	}
}

exports.TestSuiteModel = TestSuiteModel;