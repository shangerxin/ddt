/**
 * Created by Shang, Erxin (Edwin) on 11/13/2016.
 */
var {ModelBase} = require("./modelBase");

class ArgumentModelBase extends  ModelBase{
    constructor(){
        super();
    }

    get type(){
        return ArgumentModelBase.name;
    }

    isValid(value){
        return false;
    }
}

exports.ArgumentModelBase = ArgumentModelBase;