/**
 * Created by shange on 11/12/2016.
 */
let {ParserBase} = require("../../infrastructures/parserBase");
let {CONST} = require("../../global/const");
let {container} = require("../../libs/container");
let {natural} = require("natural");

let actions = CONST.schema.actions;

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

    parse(sentence){
        let stems = tks(sentence);

    }
}

exports.Natural2StepParser = Natural2StepParser;