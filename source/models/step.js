/**
 * Created by shange on 11/6/2016.
 */
var {ObjectBase} = require("../infrastructures/objectBase");


class TestStep extends ObjectBase{
    constructor(action, args, onbefore, onafter){
        super();
        this._action = action;
        this._onbefore = onbefore;
        this._onafter = onafter;
        this._args = args;
    }

    get testObject(){

    }

    get action(){
        return this._action;
    }

    get args(){
        return this._args;
    }

    onbefore(...args){
        this._onbefore && this._onbefore(...args);
    }

    onafter(...args){
        this._onafter && this._onafter(...args);
    }

    toJSON(){
        return `{
            type:${this._action},
            
        }`;
    }
}

exports.TestStep = TestStep;