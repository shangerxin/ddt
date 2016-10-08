/**
 * Created by shange on 9/7/2016.
 */
let {ParserBase} = require('./parserBase');
let cheerio = require('cheerio');

class HtmlToTestSchemaParser extends ParserBase{
    constructor(){
        super();
    }

    parse(markdown){

    }
}

exports.HtmlToTestSchemaParser = HtmlToTestSchemaParser;
