/**
 * Created by Shang, Erxin (Edwin) on 11/13/2016.
 */
let {ServiceBase} = require("./serviceBase");

class ActionTargetServiceBase extends ServiceBase{
    constructor(){
        super();
    }

    get type(){
        return ActionTargetServiceBase.name;
    }

    getActionTarget(id){
    }

    getActionTargets(domain){
    }

    registActionTarget(domain, target){
    }

    registActionTargets(domain, target){
    }
}

exports.ActionTargetServiceBase = ActionTargetServiceBase;