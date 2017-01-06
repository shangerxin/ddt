/**
 * Created by Shang, Erxin (Edwin) on 1/6/2017.
 */
let {ParserBase} = require("../../infrastructures/parserBase");
let cheerio = require("cheerio");

class NodeDOMParser extends ParserBase{
	constructor(){
		super();
	}

	get result(){
	}

	get type(){
		return NodeDOMParser.name;
	}

	/*
	 * Parse the HTML to JSON
	 */
	parse(html){
		let $ = cheerio.load(html);

		let headers = $(":header");
		let testSuiteHeaders = [];
		headers.each((i, elem)=>{
			elem = $(elem);
			if(elem.text().trim().toLowerCase().startsWith("test")){
				testSuiteHeaders.push(elem);
			}
		});
	}
}

exports.NodeDOMParser = NodeDOMParser;