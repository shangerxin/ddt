/**
 * Created by Shang, Erxin (Edwin) on 9/7/2016.
 */

var {sourcePath, expect} = require("../../fixtures/global");
var Parser = require(`${sourcePath}/modules/parsers/html2TestSuitesParser`).Html2TestSuitesParser;

describe('test Html2TestSuitesParser suite', ()=>{
    it('test create parser instance', ()=>{
        let parser = new Parser();
        expect(typeof parser.parse).to.equal("function");
    });

    it('',()=>{

    });
});