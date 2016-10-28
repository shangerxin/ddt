/**
 * Created by shange on 10/6/2016.
 */

var CONST = {
    NOT_FOUND: -1,
    states   : {
        engine: {
            idle       : "idle",
            ready      : "ready",
            replaying  : "replaying",
            recording  : "recording",
            identifying: "identifying",
            paused     : "paused",
            stopped    : "stopped",
            warning    : "warning",
            error      : "error",
        },
        agent : {
            idle   : "idle",
            ready  : "ready",
            running: "running",
            paused : "paused",
            stopped: "stopped",
            warning: "warning",
            error  : "error",
        }
    },
    topics   : {
        engine: {
            events: {
                onbeforeStart   : "event/engine/onbeforeStart",
                onafterStart    : "event/engine/onafterStart",
                onbeforeReplay  : "event/engine/onbeforeReplay",
                onafterReplay   : "event/engine/onafterReplay",
                onbeforeRecord  : "event/engine/onbeforeRecord",
                onafterRecord   : "event/engine/onafterRecord",
                onbeforeIdentify: "event/engine/onbeforeIdentify",
                onafterIdentify : "event/engine/onafterIdentify",
                onbeforeStop    : "event/engine/onbeforeStop",
                onafterStop     : "event/engine/onafterStop",
                onbeforePause   : "event/engine/onbeforePause",
                onafterPause    : "event/engine/onafterPause",
                onbeforeContinue: "event/engine/onbeforeContinue",
                onafterContinue : "event/engine/onafterContinue",
                onbeforeWarn    : "event/engine/onbeforeWarn",
                onafterWarn     : "event/engine/onafterWarn",
                onbeforeReset   : "event/engine/onbeforeReset",
                onafterReset    : "event/engine/onafterReset",
                onbeforeError   : "event/engine/onbeforeError",
                onafterError    : "event/engine/onafterError",
            },
            states: {
                onleaveIdle:"state/engine/onleaveIdle",
                onenterIdle:"state/engine/onenterIdle",
                onleaveReady:"state/engine/onleaveReady",
                onenterReady:"state/engine/onenterReady",
                onleaveReplaying:"state/engine/onleaveReplaying",
                onenterReplaying:"state/engine/onenterReplaying",
                onleaveRecording:"state/engine/onleaveRecording",
                onenterRecording:"state/engine/onenterRecording",
                onleaveIdentifying:"state/engine/onleaveIdentifying",
                onenterIdentifying:"state/engine/onenterIdentifying",
                onleavePaused:"state/engine/onleavePaused",
                onenterPaused:"state/engine/onenterPaused",
                onleaveStopped:"state/engine/onleaveStopped",
                onenterStopped:"state/engine/onenterStopped",
                onleaveWarning:"state/engine/onleaveWarning",
                onenterWarning:"state/engine/onenterWarning",
                onleaveError:"state/engine/onleaveError",
                onenterError:"state/engine/onenterError",
            }
        },
        agent : {
            events: {
                onbeforeStart   : "event/agent/onbeforeStart",
                onafterStart    : "event/agent/onafterStart",
                onbeforeExecute : "event/agent/onbeforeExecute",
                onafterExecute  : "event/agent/onafterExecute",
                onbeforeDone    : "event/agent/onbeforeDone",
                onafterDone     : "event/agent/onafterDone",
                onbeforeStop    : "event/agent/onbeforeStop",
                onafterStop     : "event/agent/onafterStop",
                onbeforePause   : "event/agent/onbeforePause",
                onafterPause    : "event/agent/onafterPause",
                onbeforeContinue: "event/agent/onbeforeContinue",
                onafterContinue : "event/agent/onafterContinue",
                onbeforeReset   : "event/agent/onbeforeReset",
                onafterReset    : "event/agent/onafterReset",
                onbeforeError   : "event/agent/onbeforeError",
                onafterError    : "event/agent/onafterError",
                onbeforeWarn    : "event/agent/onbeforeWarn",
                onafterWarn     : "event/agent/onafterWarn",
            },
            states: {
                onleaveIdle:"state/agent/onleaveIdle",
                onenterIdle:"state/agent/onenterIdle",
                onleaveReady:"state/agent/onleaveReady",
                onenterReady:"state/agent/onenterReady",
                onleaveRunning:"state/agent/onleaveRunning",
                onenterRunning:"state/agent/onenterRunning",
                onleavePaused:"state/agent/onleavePaused",
                onenterPaused:"state/agent/onenterPaused",
                onleaveStopped:"state/agent/onleaveStopped",
                onenterStopped:"state/agent/onenterStopped",
                onleaveWarning:"state/agent/onleaveWarning",
                onenterWarning:"state/agent/onenterWarning",
                onleaveError:"state/agent/onleaveError",
                onenterError:"state/agent/onenterError",
            }
        }
    },
    commands : {
        engine: {
            start   : "command/engine/start",
            replay  : "command/engine/replay",
            record  : "command/engine/record",
            identify: "command/engine/identify",
            continue: "command/engine/continue",
            reset   : "command/engine/reset",
            stop    : "command/engine/stop",
            pause   : "command/engine/pause"
        },
        agent : {
            start   : "command/agent/start",
            execute : "command/agent/execute",
            pause   : "command/agent/pause",
            continue: "command/agent/continue",
            reset   : "command/agent/reset",
            stop    : "command/agent/stop",
        }
    }
};

exports.CONST = CONST;