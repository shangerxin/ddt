/**
 * Created by shange on 9/7/2016.
 */

var {sourcePath, expect} = require("../../fixtures/global");
var Parser = require(`${sourcePath}/modules/parsers/html2TestSchemaParser`).HtmlToTestSchemaParser;

describe('test HtmlToTestSchemaParser suite', ()=>{
    it('test create parser instance', ()=>{
        let parser = new Parser();
        expect(typeof parser.parse).to.equal("function");
    });

    it('',()=>{

    });
});