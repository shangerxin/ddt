/**
 * Created by shange on 11/19/2016.
 */
let {ParserBase} = require("../../infrastructures/parserBase");
let {CONST} = require("../../global/const");


class Natural2TestCaseParser extends ParserBase{
    constructor(testObjectModelFactory){
        super();
        this._factory = testObjectModelFactory;
    }

    get type(){
        return Natural2TestCaseParser.name;
    }

    get result(){

    }

    parse(sentences){
        let suite = this._factory.createTestSuite();

    }

}

exports.Natural2TestCaseParser = Natural2TestCaseParser;