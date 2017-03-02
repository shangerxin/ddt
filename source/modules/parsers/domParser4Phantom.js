/**
 * Created by erxin on 3/2/2017.
 */
let {DOMParserBase} = require("../../infrastructures/domParserBase").DOMParserBase;

class DOMParser4Phantom extends DOMParserBase {
    constructor(){
        super()
    }

    get type(){
        return DOMParser4Phantom.name;
    }

    parse(html){

    }
}

exports.DOMParser4Phantom = DOMParser4Phantom;