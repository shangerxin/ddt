/**
 * Created by shange on 10/5/2016.
 */
let {ServiceBase} = require("./serviceBase");

class StorageServiceBase extends ServiceBase{
    constructor(){
        super();
    }

    get type(){
        return StorageServiceBase.name;
    }

    save(uri, data){
    }

    load(uri){
    }
}

exports.StorageServiceBase = StorageServiceBase;