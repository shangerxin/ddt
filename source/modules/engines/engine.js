/**
 * Created by shange on 10/7/2016.
 */
let {EngineBase} = require("../../infrastructures/engineBase");
let {CONST}= require("../../global/const");

class Engine extends EngineBase {
    constructor() {
        super();
    }

    onbeforeStart(event, fromState, toState, ...args) { return true; }

    onafterStart(event, fromState, toState, ...args) {}

    onbeforeReplay(event, fromState, toState, ...args) { return true; }

    onafterReplay(event, fromState, toState, ...args) {}

    onbeforeRecord(event, fromState, toState, ...args) { return true; }

    onafterRecord(event, fromState, toState, ...args) {}

    onbeforeIdentify(event, fromState, toState, ...args) { return true; }

    onafterIdentify(event, fromState, toState, ...args) {}

    onbeforeStop(event, fromState, toState, ...args) { return true; }

    onafterStop(event, fromState, toState, ...args) {}

    onbeforePause(event, fromState, toState, ...args) { return true; }

    onafterPause(event, fromState, toState, ...args) {}

    onbeforeContinue(event, fromState, toState, ...args) { return true; }

    onafterContinue(event, fromState, toState, ...args) {}

    onbeforeWarn(event, fromState, toState, ...args) { return true; }

    onafterWarn(event, fromState, toState, ...args) {}

    onbeforeReset(event, fromState, toState, ...args) { return true; }

    onafterReset(event, fromState, toState, ...args) {}

    onbeforeError(event, fromState, toState, ...args) { return true; }

    onafterError(event, fromState, toState, ...args) {}

    onleaveIdle(event, fromState, toState, ...args) { return true; }

    onenterIdle(event, fromState, toState, ...args) {}

    onleaveReady(event, fromState, toState, ...args) { return true; }

    onenterReady(event, fromState, toState, ...args) {
        this._communicators.forEach((communicator)=>{
            communicator.publishUpChain(CONST.commands.agent.start, ...args);
        });
    }

    onleaveReplaying(event, fromState, toState, ...args) { return true; }

    onenterReplaying(event, fromState, toState, ...args) {
        this._communicators.forEach((communicator)=>{
            communicator.publishUpChain(CONST.commands.agent.execute, ...args);
        });
    }

    onleaveRecording(event, fromState, toState, ...args) { return true; }

    onenterRecording(event, fromState, toState, ...args) {}

    onleaveIdentifying(event, fromState, toState, ...args) { return true; }

    onenterIdentifying(event, fromState, toState, ...args) {}

    onleavePaused(event, fromState, toState, ...args) { return true; }

    onenterPaused(event, fromState, toState, ...args) {}

    onleaveStopped(event, fromState, toState, ...args) { return true; }

    onenterStopped(event, fromState, toState, ...args) {}

    onleaveWarning(event, fromState, toState, ...args) { return true; }

    onenterWarning(event, fromState, toState, ...args) {}

    onleaveError(event, fromState, toState, ...args) { return true; }

    onenterError(event, fromState, toState, ...args) {}

}

exports.Engine = Engine;