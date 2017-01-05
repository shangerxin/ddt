/**
 * Created by Shang, Erxin (Edwin) on 11/6/2016.
 */
var {ModelBase} = require("./modelBase");
var {utils} = require("../../global/utils");

class StepModelBase extends ModelBase{
    constructor(action, args, onbefore, onafter){
        super();
        this._action = action;
        this._onbefore = onbefore;
        this._onafter = onafter;
        this._args = args;
        this._target = args.target;
        this._relativeObject = args.relativeTarget;
        this._result = null;
    }

    get type(){
        return StepModelBase.name;
    }

    get target(){
        return this._target;
    }

    set target(value){
        this._target = value;
    }

    get relativeObject(){
        return this._relativeObject;
    }

    set relativeObject(value){
        this._relativeObject = value;
    }

    get action(){
        return this._action;
    }

    get args(){
        return this._args;
    }

    get result(){
        return this._result;
    }

    onbefore(...args){
        this._onbefore && this._onbefore(...args);
    }

    onafter(...args){
        this._onafter && this._onafter(...args);
    }

    toJSON(){
        return JSON.stringify({
            type:this._action,
        });
    }
}

exports.StepModelBase = StepModelBase;