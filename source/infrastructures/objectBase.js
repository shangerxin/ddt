/**
 * Created by shange on 10/4/2016.
 */
var {logger} = require("../libs/logger");

class ObjectBase{
    /*
     * log function start
     */
    logStart(fn, ...args){
        logger.info(`start call ${fn.name} with arguments`, args);
    }

    /*
     * log function end
     */
    logEnd(fn, ...args){
        logger.info(`end call ${fn.name} with arguments`, args);
    }

    toString(){
        return this.__proto__.constructor.name;
    }

    get [Symbol.toStringTag](){
        return this.toString();
    }
}

/*
 * the mixin is used to implement the
 */
exports.ObjectBaseMixin = base => class extends base{
    constructor(){
        super();
        let o = new ObjectBase();
        Object.getOwnPropertyNames(o.__proto__).forEach((v)=>{
            if(v != 'constructor'){
                let p = o[v];
                if(typeof p === "function"){
                    this[v] = p.bind(o);
                }
                else{
                    this[v] = p;
                }
            }
        });
    }
};


exports.ObjectBase = ObjectBase;