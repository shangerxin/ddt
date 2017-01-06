/**
 * Created by Shang, Erxin (Edwin) on 11/12/2016.
 */
let {ParserBase} = require("../../infrastructures/parserBase");
let {CONST} = require("../../global/const");
let natural = require("natural");

let actions = CONST.schemas.actions;

let steps = {

};

function findTestObjectName(tokens){
    tokens.forEach((token)=>{
        token.startsWith("$");
    });
}

let tks = natural.PorterStemmer.tokenizeAndStem;
let tk = new natural.TreebankWordTokenizer();

class Natural2StepParser extends ParserBase{
    constructor(){
        super();
    }

    get type(){
        return Natural2StepParser.name;
    }

    get result(){

    }

    parse(sentence){
        let stems = tks(sentence);

    }
}

exports.Natural2StepParser = Natural2StepParser;