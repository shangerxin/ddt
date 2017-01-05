/**
 * Created by Shang, Erxin (Edwin) on 10/5/2016.
 */
let {ServiceBase} = require("./serviceBase");

class MessageServiceBase extends ServiceBase {
    constructor() {
        super();
    }

    get type(){
        return MessageServiceBase.name;
    }
}

exports.MessageServiceBase = MessageServiceBase;