/**
 * Created by shange on 9/7/2016.
 */
let {ParserBase} = require('./parserBase');
let Converter    = require('showdown').Converter;
let _            = require('lodash');

class MarkdownToHtmlParser extends ParserBase{
    constructor(){
        super();
        this._converter = new Converter();
    }

    get options(){
        return this._converter.getOptions();
    }

    set options(options){
        _.forEach(options, (v, k)=>{
            this._converter.setOption(k, v);
        });
    }

    parse(markdown){
        return this._converter.makeHtml(markdown);
    }
}

exports.MarkdownToHtmlParser = MarkdownToHtmlParser;
