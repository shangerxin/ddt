/**
 * Created by Shang, Erxin (Edwin) on 11/6/2016.
 */
let {ArgumentModelBase} = require("../../infrastructures/models/argumentModelBase");

class NumberArgumentModel extends ArgumentModelBase{
    constructor(){
        super();
    }

    get type(){
        return NumberArgumentModel.name;
    }
}

exports.NumberArgumentModel = NumberArgumentModel;