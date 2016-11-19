/**
 * Created by shange on 11/6/2016.
 */

/*
 * Simple JavaScript IoC container
 */
let _registeredTypes = new Map();

let container = {
    resolve(type){
        let constructor = _registeredTypes.get(type);
        if(typeof constructor === "function"){
            return constructor();
        }
        else{
            return constructor;
        }
    },

    register(type, constructor){
        _registeredTypes.set(type, constructor);
    },

    isRegistered(type){
        return _registeredTypes.has(type);
    },

    unregister(type){
        if(_registeredTypes.has(type)){
            _registeredTypes.delete(type);
        }
    }
};

exports.container = container;