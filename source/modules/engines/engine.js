/**
 * Created by shange on 10/7/2016.
 */
let {EngineBase} = require("./engineBase");

class Engine extends EngineBase {
    constructor() {
        super();
    }

    onbeforeIdle(event, fromState, toState, ...args) {}

    onleaveIdle(event, fromState, toState, ...args) {}

    onenterIdle(event, fromState, toState, ...args) {}

    onafterIdle(event, fromState, toState, ...args) {}

    onbeforeReady(event, fromState, toState, ...args) {}

    onleaveReady(event, fromState, toState, ...args) {}

    onenterReady(event, fromState, toState, ...args) {}

    onafterReady(event, fromState, toState, ...args) {}

    onbeforeReplaying(event, fromState, toState, ...args) {}

    onleaveReplaying(event, fromState, toState, ...args) {}

    onenterReplaying(event, fromState, toState, ...args) {}

    onafterReplaying(event, fromState, toState, ...args) {}

    onbeforeRecording(event, fromState, toState, ...args) {}

    onleaveRecording(event, fromState, toState, ...args) {}

    onenterRecording(event, fromState, toState, ...args) {}

    onafterRecording(event, fromState, toState, ...args) {}

    onbeforeIdentifying(event, fromState, toState, ...args) {}

    onleaveIdentifying(event, fromState, toState, ...args) {}

    onenterIdentifying(event, fromState, toState, ...args) {}

    onafterIdentifying(event, fromState, toState, ...args) {}

    onbeforePaused(event, fromState, toState, ...args) {}

    onleavePaused(event, fromState, toState, ...args) {}

    onenterPaused(event, fromState, toState, ...args) {}

    onafterPaused(event, fromState, toState, ...args) {}

    onbeforeStopped(event, fromState, toState, ...args) {}

    onleaveStopped(event, fromState, toState, ...args) {}

    onenterStopped(event, fromState, toState, ...args) {}

    onafterStopped(event, fromState, toState, ...args) {}

    onbeforeWarning(event, fromState, toState, ...args) {}

    onleaveWarning(event, fromState, toState, ...args) {}

    onenterWarning(event, fromState, toState, ...args) {}

    onafterWarning(event, fromState, toState, ...args) {}

    onbeforeError(event, fromState, toState, ...args) {}

    onleaveError(event, fromState, toState, ...args) {}

    onenterError(event, fromState, toState, ...args) {}

    onafterError(event, fromState, toState, ...args) {}
}

exports.Engine = Engine;