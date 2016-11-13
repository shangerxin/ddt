/**
 * Created by shange on 9/7/2016.
 */

var {sourcePath, expect} = require("../../fixtures/global");
var Parser = require(`${sourcePath}/modules/parsers/html2TestSuiteParser`).HtmlToTestSuiteParser;

describe('test HtmlToTestSuiteParser suite', ()=>{
    it('test create parser instance', ()=>{
        let parser = new Parser();
        expect(typeof parser.parse).to.equal("function");
    });

    it('',()=>{

    });
});