/**
 * Created by Shang, Erxin (Edwin) on 1/6/2017.
 */
let {DOMParserBase} = require("./../../infrastructures/domParserBase");
let cheerio         = require("cheerio");

class DOMParser4Node extends DOMParserBase {
    constructor() {
        super();
    }

    get type() {
        return DOMParser4Node.name;
    }

    /*
     * Parse the HTML to JSON
     */
    parse(html) {
        let $ = cheerio.load(html);

        let headers          = $(":header");
        let testSuiteHeaders = [];
        headers.each((i, elem) => {
            elem = $(elem);
            if (elem.text()
                    .trim()
                    .toLowerCase()
                    .startsWith("test")) {
                testSuiteHeaders.push(elem);
            }
        });

        // let testCases = [];
        // testSuiteHeaders.forEach((testCaseRoot, i)=>{
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

exports.DOMParser4Node = DOMParser4Node;
