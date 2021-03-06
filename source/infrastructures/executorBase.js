/**
 * Created by Shang, Erxin (Edwin) on 11/6/2016.
 */

let {ObjectBase} = require("../infrastructures/objectBase");
let {CONST}      = require("../global/const");

let agentCommands = CONST.commands.agent;

class ExecutorBase extends ObjectBase {
    constructor(communicator){
        super();
        this._communicator = communicator;
    }

    get type(){
        return ExecutorBase.name;
    }

    init(){
    }

    execute(){
    }

    stop(){
    }

    pause(){
    }

    reset(){
    }

    get communicator(){
        return this._communicator;
    }

    set communicator(communicator){
        this._communicator = communicator;
        communicator.subscribe(topic, function (cmdTopic, ...args){
            switch (cmdTopic) {

            }
        }, this);
    }
}

exports.ExecutorBase = ExecutorBase;
