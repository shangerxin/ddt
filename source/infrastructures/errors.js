let {ObjectBaseMixin} = require("./objectBase");

class InitAbstractTypeError extends ObjectBaseMixin(Error){
    constructor(){
        super("Init an abstraction type error");
        this.name = `${InitAbstractTypeError.name}`;
    }

    get type(){
        return InitAbstractTypeError.name;
    }
}

class NotImplementedError extends ObjectBaseMixin(Error){
    constructor(){
        super("Not implemented error");
        this.name = `${NotImplementedError.name}`;
    }

    get type(){
        return NotImplementedError.name;
    }
}

class UnknownCommandError extends ObjectBaseMixin(Error){
    constructor(){
        super("Received a unknown command error");
        this.name = `${UnknownCommandError.name}`;
    }

    get type(){
        return UnknownCommandError.name;
    }
}

exports.InitAbstractTypeError = InitAbstractTypeError;
exports.NotImplementedError = NotImplementedError;
exports.UnknownCommandError = UnknownCommandError;