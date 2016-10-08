/**
 * Created by shange on 10/6/2016.
 */

var CONST = {
    NOT_FOUND: -1,
    states:{
        engine:{
            idle:"idle",
            ready:"ready",
            replaying:"replaying",
            recording:"recording",
            identifying:"identifying",
            paused:"paused",
            stopped:"stopped",
            warning:"warning",
            error:"error",
        },
        agent:{
            idle:"idle",
            ready:"ready",
            running:"running",
            paused:"paused",
            stopped:"stopped",
            warning:"warning",
            error:"error",
        }
    },
    topics   : {
        engine: {
            onbeforeIdle:"engine/onbeforeIdle",
            onleaveIdle:"engine/onleaveIdle",
            onenterIdle:"engine/onenterIdle",
            onafterIdle:"engine/onafterIdle",
            onbeforeReady:"engine/onbeforeReady",
            onleaveReady:"engine/onleaveReady",
            onenterReady:"engine/onenterReady",
            onafterReady:"engine/onafterReady",
            onbeforeRunning:"engine/onbeforeRunning",
            onleaveRunning:"engine/onleaveRunning",
            onenterRunning:"engine/onenterRunning",
            onafterRunning:"engine/onafterRunning",
            onbeforeReplaying:"engine/onbeforeReplaying",
            onleaveReplaying:"engine/onleaveReplaying",
            onenterReplaying:"engine/onenterReplaying",
            onafterReplaying:"engine/onafterReplaying",
            onbeforeRecording:"engine/onbeforeRecording",
            onleaveRecording:"engine/onleaveRecording",
            onenterRecording:"engine/onenterRecording",
            onafterRecording:"engine/onafterRecording",
            onbeforeIdentifying:"engine/onbeforeIdentifying",
            onleaveIdentifying:"engine/onleaveIdentifying",
            onenterIdentifying:"engine/onenterIdentifying",
            onafterIdentifying:"engine/onafterIdentifying",
            onbeforePaused:"engine/onbeforePaused",
            onleavePaused:"engine/onleavePaused",
            onenterPaused:"engine/onenterPaused",
            onafterPaused:"engine/onafterPaused",
            onbeforeStopped:"engine/onbeforeStopped",
            onleaveStopped:"engine/onleaveStopped",
            onenterStopped:"engine/onenterStopped",
            onafterStopped:"engine/onafterStopped",
            onbeforeWarning:"engine/onbeforeWarning",
            onleaveWarning:"engine/onleaveWarning",
            onenterWarning:"engine/onenterWarning",
            onafterWarning:"engine/onafterWarning",
            onbeforeError:"engine/onbeforeError",
            onleaveError:"engine/onleaveError",
            onenterError:"engine/onenterError",
            onafterError:"engine/onafterError",
        },
        agent : {
            onbeforeIdle:"agent/onbeforeIdle",
            onleaveIdle:"agent/onleaveIdle",
            onenterIdle:"agent/onenterIdle",
            onafterIdle:"agent/onafterIdle",
            onbeforeReady:"agent/onbeforeReady",
            onleaveReady:"agent/onleaveReady",
            onenterReady:"agent/onenterReady",
            onafterReady:"agent/onafterReady",
            onbeforeRunning:"agent/onbeforeRunning",
            onleaveRunning:"agent/onleaveRunning",
            onenterRunning:"agent/onenterRunning",
            onafterRunning:"agent/onafterRunning",
            onbeforePaused:"agent/onbeforePaused",
            onleavePaused:"agent/onleavePaused",
            onenterPaused:"agent/onenterPaused",
            onafterPaused:"agent/onafterPaused",
            onbeforeStopped:"agent/onbeforeStopped",
            onleaveStopped:"agent/onleaveStopped",
            onenterStopped:"agent/onenterStopped",
            onafterStopped:"agent/onafterStopped",
            onbeforeWarning:"agent/onbeforeWarning",
            onleaveWarning:"agent/onleaveWarning",
            onenterWarning:"agent/onenterWarning",
            onafterWarning:"agent/onafterWarning",
            onbeforeError:"agent/onbeforeError",
            onleaveError:"agent/onleaveError",
            onenterError:"agent/onenterError",
            onafterError:"agent/onafterError",
        }
    }
};

exports.CONST = CONST;