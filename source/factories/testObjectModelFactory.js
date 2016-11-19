/**
 * Created by shange on 11/6/2016.
 */
let {FactoryBase} = require("../infrastructures/factoryBase");
let {TestSuiteModel} = require("../models/testSuiteModel");
let {TestCaseModel} = require("../models/testCaseModel");
let {TestVariableModel} = require("../models/testVariableModel");
let {BrowserObjectModel} = require("../models/testObjectModels/browserObjectModel");
let {ClickObjectModel} = require("../models/testObjectModels/clickObjectModel");
let {CodeObjectModel} = require("../models/testObjectModels/codeObjectModel");
let {InputObjectModel} = require("../models/testObjectModels/inputObjectModel");
let {TabObjectModel} = require("../models/testObjectModels/tabObjectModel");
let {UploadObjectModel} = require("../models/testObjectModels/uploadObjectModel");

class TestObjectModelFactory extends FactoryBase{
    constructor(){
        super();
    }

    get type(){
        return TestObjectModelFactory.name;
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

    createBrowserObject(){
        return new BrowserObjectModel();
    }

    createClickObject(){
        return new ClickObjectModel();
    }

    createCodeObject(){
        return new CodeObjectModel();
    }

    createInputObject(){
        return new InputObjectModel();
    }

    createTabObject(){
        return new TabObjectModel();
    }

    createUploadObject(){
        return new UploadObjectModel();
    }
}

exports.TestObjectModelFactory = TestObjectModelFactory;