/**
 * Created by Shang, Erxin (Edwin) on 10/5/2016.
 */
let {ServiceBase} = require("./serviceBase");

class PersistenceServiceBase extends ServiceBase{
    constructor(){
        super();
    }

    get type(){
        return PersistenceServiceBase.name;
    }

    save(uri, data){
    }

    load(uri){
    }
}

exports.PersistenceServiceBase = PersistenceServiceBase;