/**
 * Created by shange on 11/13/2016.
 */
var {ModelBase} = require("./modelBase");

class ArgumentModelBase extends  ModelBase{
    constructor(){
        super();
    }

    isValid(value){
    }
}

exports.ArgumentModelBase = ArgumentModelBase;