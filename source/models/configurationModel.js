/**
 * Created by Shang, Erxin (Edwin) on 11/6/2016.
 */
let {ModelBase} = require("../infrastructures/models/modelBase");

class ConfigurationModel extends ModelBase{
    constructor(){
        super();
    }

    get type(){
        return ConfigurationModel.name;
    }
}

exports.ConfigurationModel = ConfigurationModel;