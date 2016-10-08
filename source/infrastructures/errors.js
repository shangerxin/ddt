var {ObjectBaseMixin} = require("./objectBase");

class InitAbstractTypeError extends ObjectBaseMixin(Error)(message){
    constructor(){
        super("Init an abstraction type error");
        this.name = `${InitAbstractTypeError.name}`;
    }
}

class NotImplementedError extends ObjectBaseMixin(Error)(message){
    constructor(){
        super("Not implemented error");
        this.name = `${NotImplementedError.name}`;
    }
}

exports.InitAbstractTypeError = InitAbstractTypeError;
exports.NotImplementedError = NotImplementedError;
exports.ArgumentError = ArgumentError;