/**
 * Created by Shang, Erxin (Edwin) on 1/6/2017.
 */
let {ParserBase} = require("../../infrastructures/parserBase");

class BrowserDOMParser extends ParserBase{
	constructor(){
		super();
	}

	get type(){
		return BrowserDOMParser.name;
	}

	/*
	 * Parse the HTML to JSON
	 */
	parse(html){
	}
}

exports.BrowserDOMParser = BrowserDOMParser;