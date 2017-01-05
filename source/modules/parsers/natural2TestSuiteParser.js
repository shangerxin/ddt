/**
 * Created by Shang, Erxin (Edwin) on 11/19/2016.
 */
let {ParserBase} = require("../../infrastructures/parserBase");
let {CONST} = require("../../global/const");
let {TestModelFactory} = require("../../factories/testModelFactory");

class Natural2TestSuiteParser extends ParserBase{
    constructor(testObjectModelFactory){
        super();
        this._factory = testObjectModelFactory;
    }

    get result(){

    }

    get type(){
        return Natural2TestSuiteParser.name;
    }

    parse(sentences){

    }
}

exports.Natural2TestSuiteParser = Natural2TestSuiteParser;