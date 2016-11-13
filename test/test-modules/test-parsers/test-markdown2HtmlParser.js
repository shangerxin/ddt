/**
 * Created by shange on 9/7/2016.
 */

var {sourcePath, expect} = require("../../fixtures/global");
var Parser = require(`${sourcePath}/modules/parsers/markdown2HtmlParser`).MarkdownToHtmlParser;

describe('test HtmlToTestSuiteParser suite', ()=>{
    it('test create parser instance', ()=>{
        let parser = new Parser();
        expect(typeof parser.parse).to.equal("function");
    });

    it('test parse function should convert markdown to html', ()=>{
        let parser = new Parser();
        let html = parser.parse('#hello, markdown!');
        expect(html).to.not.be.null;
    });

    it('test change default converter options', ()=>{
        let parser = new Parser();
        expect(parser.options.noHeaderId).to.be.false;

        parser.options = {noHeaderId:true};
        expect(parser.options.noHeaderId).to.be.true;
    });
});