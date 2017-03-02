/**
 * Created by Shang, Erxin (Edwin) on 1/6/2017.
 */
let {ParserBase} = require("parserBase");

class DOMParserBase extends ParserBase {
    constructor(){
        super();
        this.testSuiteHeaderPattern = /^\s*test\s+suite\s+(.+)\s*$/ig;
        this.testCaseHeaderPattern  = /^\s*test\s+case\s+(.+)\s*$/ig;
    }

    get type(){
        return DOMParserBase.name;
    }


    /*
     * this method is used to filter the test data from html to intermediate data
     */
    parse(html){
    }
}

exports.DOMParserBase = DOMParserBase;
