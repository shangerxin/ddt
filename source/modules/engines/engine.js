/**
 * Created by shange on 10/7/2016.
 */
let {EngineBase} = require("../../infrastructures/engineBase");
let {CONST}= require("../../global/const");

class Engine extends EngineBase {
    constructor() {
        super();
    }

    onbeforeStart(event, fromState, toState, ...args) {
        return true;
    }

    onafterStart(event, fromState, toState, ...args) {}

    onbeforeReplay(event, fromState, toState, ...args) {
        return true;
    }

    onafterReplay(event, fromState, toState, ...args) {}

    onbeforeRecord(event, fromState, toState, ...args) {}

    onafterRecord(event, fromState, toState, ...args) {}

    onbeforeIdentify(event, fromState, toState, ...args) {}

    onafterIdentify(event, fromState, toState, ...args) {}

    onbeforeStop(event, fromState, toState, ...args) {}

    onafterStop(event, fromState, toState, ...args) {}

    onbeforePause(event, fromState, toState, ...args) {}

    onafterPause(event, fromState, toState, ...args) {}

    onbeforeContinue(event, fromState, toState, ...args) {}

    onafterContinue(event, fromState, toState, ...args) {}

    onbeforeWarn(event, fromState, toState, ...args) {}

    onafterWarn(event, fromState, toState, ...args) {}

    onbeforeReset(event, fromState, toState, ...args) {}

    onafterReset(event, fromState, toState, ...args) {}

    onbeforeError(event, fromState, toState, ...args) {}

    onafterError(event, fromState, toState, ...args) {}

    onleaveIdle(event, fromState, toState, ...args) {}

    onenterIdle(event, fromState, toState, ...args) {}

    onleaveReady(event, fromState, toState, ...args) {}

    onenterReady(event, fromState, toState, ...args) {
        this._communicators.forEach((communicator)=>{
            communicator.publishUpChain(CONST.commands.agent.start, ...args);
        });
    }

    onleaveReplaying(event, fromState, toState, ...args) {}

    onenterReplaying(event, fromState, toState, ...args) {
        this._communicators.forEach((communicator)=>{
            communicator.publishUpChain(CONST.commands.agent.execute, ...args);
        });
    }

    onleaveRecording(event, fromState, toState, ...args) {}

    onenterRecording(event, fromState, toState, ...args) {}

    onleaveIdentifying(event, fromState, toState, ...args) {}

    onenterIdentifying(event, fromState, toState, ...args) {}

    onleavePaused(event, fromState, toState, ...args) {}

    onenterPaused(event, fromState, toState, ...args) {}

    onleaveStopped(event, fromState, toState, ...args) {}

    onenterStopped(event, fromState, toState, ...args) {}

    onleaveWarning(event, fromState, toState, ...args) {}

    onenterWarning(event, fromState, toState, ...args) {}

    onleaveError(event, fromState, toState, ...args) {}

    onenterError(event, fromState, toState, ...args) {}
}

exports.Engine = Engine;