/**
 * Created by shange on 11/13/2016.
 */
let {ServiceBase} = require("./serviceBase");

class TestObjectServiceBase extends ServiceBase{
    constructor(){
        super();
    }

    get type(){
        return TestObjectServiceBase.name;
    }

    getTestObjectById(id){
    }

    getTestObjects(domain){
    }

    registTestObject(domain, testObject){
    }

    registTestObjects(domain, testObjects){
    }
}

exports.TestObjectServiceBase = TestObjectServiceBase;