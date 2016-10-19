var {ObjectBaseMixin} = require("./objectBase");

class InitAbstractTypeError extends ObjectBaseMixin(Error){
    constructor(){
        super("Init an abstraction type error");
        this.name = `${InitAbstractTypeError.name}`;
    }
}

class NotImplementedError extends ObjectBaseMixin(Error){
    constructor(){
        super("Not implemented error");
        this.name = `${NotImplementedError.name}`;
    }
}

class UnknownCommandError extends ObjectBaseMixin(Error){
    constructor(){
        super("Received a unknown command error");
        this.name = `${UnknownCommandError.name}`;
    }
}

exports.InitAbstractTypeError = InitAbstractTypeError;
exports.NotImplementedError = NotImplementedError;
exports.UnknownCommandError = UnknownCommandError;