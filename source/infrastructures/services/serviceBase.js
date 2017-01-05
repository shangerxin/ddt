/**
 * Created by Shang, Erxin (Edwin) on 10/5/2016.
 */
let {Observable} = require("../observable");

class ServiceBase extends Observable{
    constructor(){
        super();
    }

    get type(){
        return ServiceBase.name;
    }
}

exports.ServiceBase = ServiceBase;