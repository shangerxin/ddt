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
        this._htmlDocument;
    }

    get options(){
        return this._converter.getOptions();
    }

    set options(options){
        _.forEach(options, (v, k)=>{
            this._converter.setOption(k, v);
        });
    }

    get document(){
        return this._htmlDocument;
    }

    parse(markdown){
        this._htmlDocument = this._converter.makeHtml(markdown);
        return this._htmlDocument;
    }

    generateHtmlDocument(path){

    }
}

exports.MarkdownToHtmlParser = MarkdownToHtmlParser;
