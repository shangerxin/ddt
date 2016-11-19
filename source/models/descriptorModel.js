/**
 * Created by shange on 11/6/2016.
 */
var {ModelBase} = require("../infrastructures/models/modelBase");

class DescriptorModel extends ModelBase{
    constructor(css, identity, js, xpath){
        super();
        this._xpath = xpath;
        this._css = css;
    }

    get type(){
        return DescriptorModel.name;
    }

    get xpath(){
        return this._xpath;
    }

    set xpath(value){
        this._xpath = value;
    }

    get css(){
        return this._css;
    }

    set css(value){
        this._css = value;
    }

    toJSON(){
        return `{xpath:${this.xpath}, css:${this.css}, js:${js}}`
    }
}

exports.DescriptorModel = DescriptorModel;