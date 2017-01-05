/**
 * Created by Shang, Erxin (Edwin) on 1/5/2017.
 */
var {ModelBase} = require("../infrastructures/models/modelBase");
var {utils} = require("../global/utils");

class TestRunModel extends ModelBase{
	constructor(iterationTimes = 1){
		super();
		this.steps          = [];
		this.iterationTimes = iterationTimes;
	}

	get type(){
		return TestRunModel.name;
	}

	get testSuites(){
		return this.steps;
	}

	get transactions(){
	}
}

exports.TestRunModel = TestRunModel;