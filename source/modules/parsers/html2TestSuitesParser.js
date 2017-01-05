/**
 * Created by Shang, Erxin (Edwin) on 9/7/2016.
 */
let {ParserBase} = require("../../infrastructures/parserBase");
let cheerio = require("cheerio");

class Html2TestSuitesParser extends ParserBase{
    constructor(stepParser, testObjectModelFactory){
        super();
        this._stepParser = stepParser;
        this._testObjectModelFactory = testObjectModelFactory;
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
        let $ = cheerio.load(html);

        let headers = $(":header");
        let testCaseRoots = [];
        headers.each((i, elem)=>{
            if($(elem).text().toLowerCase().startsWith("test")){
                testCaseRoots.push($(elem));
            }
        });

        let testCases = [];
        // testCaseRoots.forEach((testCaseRoot, i)=>{
        //     let testCase = this._testObjectModelFactory.createTestCase();
        //     let testCaseDescription = testCaseRoot.children().first();
        //     if(testCaseDescription){
        //         let description = testCaseDescription.text();
        //         if(description.toLowerCase() != "steps"){
        //             testCase.description = description;
        //             let stepsRoot;
        //             do{
        //                 stepsRoot = testCaseDescription.next();
        //             }while(stepsRoot && stepsRoot.text().toLowerCase() != "_steps");
        //             if(stepsRoot){
        //                 let _steps = [];
        //                 stepsRoot.children().each((i, elem)=>{
        //                     let sentences = $(elem).text().split(Html2TestSuitesParser.sentenceSeperator);
        //                     sentences.forEach((sentence, i)=>{
        //                         let step = this._stepParser(sentence);
        //                         if(step){
        //                             _steps.push(step);
        //                         }
        //                     });
        //                 });
        //                 return _steps;
        //             }
        //         }
        //     }
        // });
    }
}

exports.Html2TestSuitesParser = Html2TestSuitesParser;
