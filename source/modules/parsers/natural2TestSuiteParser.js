/**
 * Created by shange on 11/19/2016.
 */
let {ParserBase} = require("../../infrastructures/parserBase");
let {CONST} = require("../../global/const");
let {TestObjectModelFactory} = require("../../factories/testObjectModelFactory");

class Natural2TestSuiteParser extends ParserBase{
    constructor(){
        super();
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