/**
 * Created by Shang, Erxin (Edwin) on 11/6/2016.
 */
let {FactoryBase} = require("../infrastructures/factoryBase");
let {TestSuiteModel} = require("../models/testSuiteModel");
let {TestCaseModel} = require("../models/testCaseModel");
let {TestVariableModel} = require("../models/testVariableModel");

class TestModelFactory extends FactoryBase{
    constructor(){
        super();
    }

    get type(){
        return TestModelFactory.name;
    }

    createTestSuite(description, name){
        return new TestSuiteModel(description, name);
    }

    createTestCase(description, name){
        return new TestCaseModel(description, name);
    }

    createTestVariable(name){
        return new TestVariableModel(name);
    }
}

exports.TestModelFactory = TestModelFactory;
