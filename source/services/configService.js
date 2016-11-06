/**
 * Created by shange on 10/7/2016.
 */
let {ServiceBase} = require("../infrastructures/services/serviceBase");

class ConfigService extends ServiceBase{
    constructor(){
        super();
    }

    load(configFile){

    }
}

exports.ConfigService = ConfigService;