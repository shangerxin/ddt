/**
 * Created by Shang, Erxin (Edwin) on 9/7/2016.
 */
let {ParserBase} = require("../../infrastructures/parserBase");
let {TestModelFactory} = require("../../factories/testModelFactory");

class Html2TestSuitesParser extends ParserBase{
    constructor(stepParser, domParser){
        super();
        this._stepParser = stepParser;
        this._domParser = domParser;
    }

    get type(){
        return Html2TestSuitesParser.name;
    }

    get result(){

    }

    static get sentenceSeperator(){
        return /[\.\?]/g;
    }

    parse(html){
        let testModelFactory = TestModelFactory.instance;
    }
}

exports.Html2TestSuitesParser = Html2TestSuitesParser;
