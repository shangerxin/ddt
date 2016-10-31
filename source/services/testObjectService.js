/**
 * Created by shange on 10/31/2016.
 */
let {ServiceBase} = require("./serviceBase");

class TestObjectService extends ServiceBase{
    constructor(){
        super();
    }

    getTestObjects(testDomain){
    }
}

exports.TestObjectService = TestObjectService;