/**
 * Created by Shang, Erxin (Edwin) on 9/7/2016.
 */
let {ObjectBase} = require("./objectBase");
let {NotImplementedError} = require("./errors");

class ParserBase extends ObjectBase{
    constructor(){
        super();
        this._result = null
        this._options = null;
    }

    get type(){
        return ParserBase.name;
    }

    get result(){
        return this._result;
    }

    parse(){
        throw new NotImplementedError();
    }

    get options(){
        return this._options;
    }

    set options(options){
        this._options = options;
    }
}

exports.ParserBase = ParserBase;
