/**
 * Created by Shang, Erxin (Edwin) on 1/6/2017.
 */
let {DOMParserBase} = require("./../../infrastructures/domParserBase");

class DOMParser4Browser extends DOMParserBase {
    constructor() {
        super();
    }

    get type() {
        return DOMParser4Browser.name;
    }

    /*
     * Parse the HTML to JSON
     */
    parse(html) {
        let parser = new DOMParser();
        let doc    = parser.parseFromString(html);
		
    }
}

exports.DOMParser4Browser = DOMParser4Browser;
