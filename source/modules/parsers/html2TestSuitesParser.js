/**
 * Created by shange on 9/7/2016.
 */
let {ParserBase} = require('../../infrastructures/parserBase');
let {TestCaseModel} = require("../../models/testCaseModel");
let cheerio = require('cheerio');

class HtmlToTestSuitesParser extends ParserBase{
    constructor(stepParser){
        super();
        this._stepParser = stepParser;
    }

    get type(){
        return HtmlToTestSuitesParser.name;
    }

    get result(){

    }

    static get sentenceSeperator(){
        return /[\.\?]/g;
    }

    parse(html){
        let $ = cheerio.load(html);

        let headers = $(":header");
        let testCaseRoots = [];
        headers.each((i, elem)=>{
            if($(elem).text().toLowerCase().startsWith("test")){
                testCaseRoots.push($(elem));
            }
        });

        let testCases = [];
        testCaseRoots.forEach((testCaseRoot, i)=>{
            let testCase = new TestCaseModel();
            let testCaseDescription = testCaseRoot.children().first();
            if(testCaseDescription){
                let description = testCaseDescription.text();
                if(description.toLowerCase() != "steps"){
                    testCase.description = description;
                    let stepsRoot;
                    do{
                        stepsRoot = testCaseDescription.next();
                    }while(stepsRoot && stepsRoot.text().toLowerCase() != "steps");
                    if(stepsRoot){
                        let steps = [];
                        stepsRoot.children().each((i, elem)=>{
                            let sentences = $(elem).text().split(HtmlToTestSuitesParser.sentenceSeperator);
                            sentences.forEach((sentence, i)=>{
                                let step = this._stepParser(sentence);
                                if(step){
                                    steps.push(step);
                                }
                            });
                        });
                        return steps;
                    }
                }
            }
        });
    }
}

exports.HtmlToTestSuitesParser = HtmlToTestSuitesParser;
