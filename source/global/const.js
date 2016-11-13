/**
 * Created by shange on 10/6/2016.
 */

var CONST = {
    NOT_FOUND: -1,
    TEST_OBJECT_PREFIX:"$",
    TEST_VARIABLE_PREFIX:"@",
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
                onleaveIdle       : "state/engine/onleaveIdle",
                onenterIdle       : "state/engine/onenterIdle",
                onleaveReady      : "state/engine/onleaveReady",
                onenterReady      : "state/engine/onenterReady",
                onleaveReplaying  : "state/engine/onleaveReplaying",
                onenterReplaying  : "state/engine/onenterReplaying",
                onleaveRecording  : "state/engine/onleaveRecording",
                onenterRecording  : "state/engine/onenterRecording",
                onleaveIdentifying: "state/engine/onleaveIdentifying",
                onenterIdentifying: "state/engine/onenterIdentifying",
                onleavePaused     : "state/engine/onleavePaused",
                onenterPaused     : "state/engine/onenterPaused",
                onleaveStopped    : "state/engine/onleaveStopped",
                onenterStopped    : "state/engine/onenterStopped",
                onleaveWarning    : "state/engine/onleaveWarning",
                onenterWarning    : "state/engine/onenterWarning",
                onleaveError      : "state/engine/onleaveError",
                onenterError      : "state/engine/onenterError",
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
                onleaveIdle   : "state/agent/onleaveIdle",
                onenterIdle   : "state/agent/onenterIdle",
                onleaveReady  : "state/agent/onleaveReady",
                onenterReady  : "state/agent/onenterReady",
                onleaveRunning: "state/agent/onleaveRunning",
                onenterRunning: "state/agent/onenterRunning",
                onleavePaused : "state/agent/onleavePaused",
                onenterPaused : "state/agent/onenterPaused",
                onleaveStopped: "state/agent/onleaveStopped",
                onenterStopped: "state/agent/onenterStopped",
                onleaveWarning: "state/agent/onleaveWarning",
                onenterWarning: "state/agent/onenterWarning",
                onleaveError  : "state/agent/onleaveError",
                onenterError  : "state/agent/onenterError",
            }
        }
    },
    commands : {
        engine  : {
            start   : "command/engine/start",
            replay  : "command/engine/replay",
            record  : "command/engine/record",
            identify: "command/engine/identify",
            continue: "command/engine/continue",
            reset   : "command/engine/reset",
            stop    : "command/engine/stop",
            pause   : "command/engine/pause"
        },
        agent   : {
            start   : "command/agent/start",
            execute : "command/agent/execute",
            pause   : "command/agent/pause",
            continue: "command/agent/continue",
            reset   : "command/agent/reset",
            stop    : "command/agent/stop",
        },
        executor: {
            init    : "command/executor/init",
            execute : "command/executor/execute",
            stop    : "command/executor/stop"
        }
    },
    schema   : {
        userEvents: {
            focus                : "focus",
            blur                 : "blur",
            online               : "online",
            offline              : "offline",
            resize               : "resize",
            scroll               : "scroll",
            copy                 : "copy",
            cut                  : "cut",
            paste                : "paste",
            keydown              : "keydown",
            keypress             : "keypress",
            keyup                : "keyup",
            mouseenter           : "mouseenter",
            mouseover            : "mouseover",
            mousemove            : "mousemove",
            mousedown            : "mousedown",
            mouseup              : "mouseup",
            click                : "click",
            dbclick              : "dbclick",
            contextmenu          : "contextmenu",
            wheel                : "wheel",
            mouseleave           : "mouseleave",
            mouseout             : "mouseout",
            select               : "select",
            pointerlockchange    : "pointerlockchange",
            pointerlockerror     : "pointerlockerror",
            dragstart            : "dragstart",
            drag                 : "drag",
            dragend              : "dragend",
            dragenter            : "dragenter",
            dragover             : "dragover",
            dragleave            : "dragleave",
            drop                 : "drop",
            close                : "close",
            chargingchange       : "chargingchange",
            chargingtimechange   : "chargingtimechange",
            dischargingtimechange: "dischargingtimechange",
            levelchange          : "levelchange",
            devicelight          : "devicelight",
            devicemotion         : "devicemotion",
            deviceproximity      : "deviceproximity",
            orientationchange    : "orientationchange",
            userproximity        : "userproximity",
            touchcancel          : "touchcancel",
            touchend             : "touchend",
            touchenter           : "touchenter",
            touchleave           : "touchlevel",
            touchmove            : "touchmove",
            touchstart           : "touchstart",
        },
        actions   : {
            click   : ["press", "click"],
            navigate: ["navigate"],
            hover   : ["hover"],
            drag    : ["drag"],
            drop    : ["drop"],
            dbclick   : ["dbclick", "double click"],
            type    : ["type", "press"],
        },
        stepTypes : {
            type        : "type",
            navigate    : "navigate",
            for         : "for",
            wait        : "wait",
            activeTab   : "activeTab",
            if          : "if",
            eval        : "eval",
            evalOnObject: "evalOnObject",
            waitObject  : "waitObject",
            exit        : "exit",
            catch       : "catch",
            break       : "break",
            continue    : "continue",
            expect      : "expect"
        }
    }
};

exports.CONST = CONST;