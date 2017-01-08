/**
 * Created by Shang, Erxin (Edwin) on 10/31/2016.
 */
let {ActionTargetServiceBase} = require("../infrastructures/services/actionTargetServiceBase");

class ActionTargetService extends ActionTargetServiceBase{
    constructor(){
        super();
        this._repositories = new Map();
    }

    getActionTargets(domain){
        this._repositories.get(domain);
    }

    registActionTarget(domain, testObject){
        let repo = this.getActionTargets(domain);
        if(repo){
            repo.add(testObject);
        }
        else{
            repo = new Set();
            repo.add(testObject);
            this._repositories.set(domain, repo);
        }
    }

    registActionTargets(domain, testObjects){
        let repo = this.getActionTargets(domain);
        if(repo){
            testObjects.forEach((testObject)=>{
                repo.add(testObject);
            });
        }
        else{
            repo = new Set();
            testObjects.forEach((testObject)=>{
                repo.add(testObject);
            });
            this._repositories.set(domain, repo);
        }
    }
}

exports.ActionTargetService = ActionTargetService;