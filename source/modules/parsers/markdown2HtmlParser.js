/**
 * Created by shange on 9/7/2016.
 */
let {ParserBase} = require('../../infrastructures/parserBase');
let Converter    = require('showdown').Converter;
let _            = require('lodash');

class Markdown2HtmlParser extends ParserBase{
    constructor(){
        super();
        this._converter = new Converter();
    }

    get type(){
        return Markdown2HtmlParser.name;
    }

    get options(){
        return this._converter.getOptions();
    }

    set options(options){
        _.forEach(options, (v, k)=>{
            this._converter.setOption(k, v);
        });
    }

    get result(){
        return this._html;
    }

    parse(markdown){
        this._html = this._converter.makeHtml(markdown);
        return this._html;
    }
}

exports.Markdown2HtmlParser = Markdown2HtmlParser;
