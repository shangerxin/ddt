/**
 * Created by Shang, Erxin (Edwin) on 11/13/2016.
 */
let {ArgumentModelBase} = require("../../infrastructures/models/argumentModelBase");

class StringArgumentModel extends ArgumentModelBase{
    constructor(){
        super();
    }

    get type(){
        return StringArgumentModel.name;
    }
}

exports.StringArgumentModel = StringArgumentModel;