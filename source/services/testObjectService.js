/**
 * Created by shange on 10/31/2016.
 */
let {TestObjectServiceBase} = require("../infrastructures/services/testObjectServiceBase");

class TestObjectService extends TestObjectServiceBase{
    constructor(){
        super();
        this._repositories = new Map();
    }

    getTestObjects(domain){
        this._repositories.get(domain);
    }

    registTestObject(domain, testObject){
        let repo = this.getTestObjects(domain);
        if(repo){
            repo.add(testObject);
        }
        else{
            repo = new Set();
            repo.add(testObject);
            this._repositories.set(domain, repo);
        }
    }

    registTestObjects(domain, testObjects){
        let repo = this.getTestObjects(domain);
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

    toJSON(){

    }
}

exports.TestObjectService = TestObjectService;