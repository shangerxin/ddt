/**
 * Created by shange on 10/5/2016.
 */
let {ServiceBase} = require("./serviceBase");

class StorageServiceBase extends ServiceBase{
    constructor(){
        super();
    }

    save(serilizable){
    }

    load(){
    }
}

exports.StorageServiceBase = StorageServiceBase;