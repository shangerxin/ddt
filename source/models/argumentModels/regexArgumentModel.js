/**
 * Created by Shang, Erxin (Edwin) on 11/18/2016.
 */
let {ArgumentModelBase} = require("../../infrastructures/models/argumentModelBase");

class RegexArgumentModel extends ArgumentModelBase{
    constructor(){
        super();
    }

    get type(){
        return RegexArgumentModel.name;
    }
}

exports.RegexArgumentModel = RegexArgumentModel;