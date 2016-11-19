/**
 * Created by shange on 9/7/2016.
 */
let {ObjectBase} = require("./objectBase");

class ParserBase extends ObjectBase{
    constructor(){
        super();
    }

    get type(){
        return ParserBase.name;
    }

    get result(){
    }

    parse(){
    }

    get options(){
    }

    set options(options){
    }
}

exports.ParserBase = ParserBase;