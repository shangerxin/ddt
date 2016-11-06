/**
 * Created by shange on 9/7/2016.
 */
let {ParserBase} = require('../../infrastructures/parserBase');
let Converter    = require('showdown').Converter;
let _            = require('lodash');

class MarkdownToHtmlParser extends ParserBase{
    constructor(){
        super();
        this._converter = new Converter();
        this._html;
    }

    get options(){
        return this._converter.getOptions();
    }

    set options(options){
        _.forEach(options, (v, k)=>{
            this._converter.setOption(k, v);
        });
    }

    get html(){
        return this._html;
    }

    parse(markdown){
        this._html = this._converter.makeHtml(markdown);
        return this._html;
    }
}

exports.MarkdownToHtmlParser = MarkdownToHtmlParser;
