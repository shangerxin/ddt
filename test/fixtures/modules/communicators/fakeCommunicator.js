/**
 * Created by Shang, Erxin (Edwin) on 1/6/2017.
 */
let {CommunicatorBase} = require("../../../../source/infrastructures/communicatorBase");


class FakeCommunicator extends CommunicatorBase{
	constructor(){
		super();
		this._isReady = true;
	}

	init(){
	}

	send(){
	}

	set isReady(value){
		this._isReady = value;
	}
}

exports.FakeCommunicator = FakeCommunicator;