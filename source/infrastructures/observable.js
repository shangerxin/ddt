/**
 * Created by Shang, Erxin (Edwin) on 10/6/2016.
 */
let {ObjectBase} = require("./objectBase");
let {SubscriberTree} = require("../libs/subscriberTree");

class Observable extends ObjectBase{
    constructor(){
        super();
        this._subscribers = new SubscriberTree();
    }

    get type(){
        return Observable.name;
    }

    subscribe(topic, fn, context){
        this.logStart(this.subscribe, arguments);

        let result = this._subscribers.addSubscriber(topic, fn, context);

        this.logEnd(this.subscribe, result);
        return result;
    }

    subscribeOneTime(topic, fn, context){
        this.logStart(this.subscribeOneTime, arguments);

        let result = this._subscribers.addOneTimeSubscriber(topic, fn, context);

        this.logEnd(this.subscribeOneTime, result);
        return result;
    }

    unSubscribe(topic, fn){
        return this._subscribers.removeSubscriber(topic, fn);
    }

    /*
     * publish the topic from the parent topics till the aim topic
     */
    publishUpChain(topic, ...args){
        for(let subscriber of this._subscribers.walkAlongPath(topic)){
            let oneTimeHandlers = [];
            subscriber.handlers.forEach((handler)=>{
                handler.fn.call(handler.context, topic, ...args);
                if(handler.isOneTime){
                    oneTimeHandlers.push(handler);
                }
            });
            oneTimeHandlers.forEach((handler)=>{
                if(!handler.remove()){
                    console.warn("removed handler failed", args, handler);
                }
            });
        }
    }

    /*
     * publish the topic from the aim topic till all the children topics of the aim topic
     */
    publishDownChain(topic, ...args){
        for(let subscriber of this._subscribers.walkDownPath(topic)){
            let oneTimeHandlers = [];
            subscriber.handlers.forEach((handler)=>{
                handler.fn.call(handler.context, topic, ...args);
                if(handler.isOneTime){
                    oneTimeHandlers.push(handler);
                }
            });
            oneTimeHandlers.forEach((handler)=>{
                if(!handler.remove()){
                    console.warn("removed handler failed", args, handler);
                }
            });
        }
    }

    /*
     * publish the topic only to the current topic handlers
     */
    publish(topic, ...args){
        let subscriber = this._subscribers.find(topic);
        let oneTimeHandlers = [];
        subscriber.handlers.forEach((handler)=>{
            handler.fn.call(handler.context, topic, ...args);
            if(handler.isOneTime){
                oneTimeHandlers.push(handler);
            }
        });
        oneTimeHandlers.forEach((handler)=>{
            if(!handler.remove()){
                console.warn("removed handler failed", args, handler);
            }
        });
    }
}

exports.ObservableMixin = base => class extends base{
    constructor(){
        super();
        let o = new Observable();
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

exports.Observable = Observable;
