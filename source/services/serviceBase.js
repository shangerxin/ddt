/**
 * Created by shange on 10/5/2016.
 */
let {Observable} = require("../infrastructures/observable");

class ServiceBase extends Observable{
    constructor(){
        super();
    }
}

exports.ServiceBase = ServiceBase;