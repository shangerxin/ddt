/**
 * Created by Shang, Erxin (Edwin) on 9/7/2016.
 */
var {ModelBase} = require("./modelBase");
var {utils}     = require("../../global/utils");

class ActionTargetModelBase extends ModelBase {
    constructor(action, descriptor, domain, name){
        super();
        this._action     = action;
        this._descriptor = descriptor;
        this._domain     = domain;
        this._name       = name;

        this.elementTag       = null;
        this.elementInnerHtml = null;
        this.elementInnerText = null;
        this.elementStyle     = null;
        this.elementParent    = null;
        this.elementSiblings  = [];
        this.elementId        = null;
        this.elementClass     = null;
        this.elementTop       = null;
        this.elementLeft      = null;
        this.elementBottom    = null;
        this.elementRight     = null;
    }

    get type(){
        return ActionTargetModelBase.name;
    }

    get domain(){
        return this._domain;
    }

    get action(){
        return this._action;
    }

    get descriptor(){
        return this._descriptor;
    }

    set descriptor(value){
        this._descriptor = value;
    }
}

exports.ActionTargetModelBase = ActionTargetModelBase;