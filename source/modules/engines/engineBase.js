/**
 * Created by shange on 10/4/2016.
 */
let {Observable}   = require("../../infrastructures/observable");
let {StateMachine} = require("../../libs/state-machine");
let {CONST}        = require("../../global/const");

class EngineBase extends Observable {
    constructor() {
        super();
        this._fsm = StateMachine.create({
                                            initial  : 'idle',
                                            events   : [
                                                {name: 'start', from: 'idle', to: 'ready'},
                                                {name: 'replay', from: 'ready', to: 'replaying'},
                                                {name: 'record', from: 'ready', to: 'recording'},
                                                {name: 'identify', from: 'ready', to: 'identifying'},
                                                {
                                                    name: 'stop',
                                                    from: ['ready', 'paused', 'replaying', 'recording', 'identifying'],
                                                    to  : 'stopped'
                                                },
                                                {
                                                    name: 'pause',
                                                    from: ['ready', 'replaying', 'recording', 'identifying'],
                                                    to  : 'paused'
                                                },
                                                {name: 'continue', from: 'paused', to: 'ready'},
                                                {
                                                    name: 'error',
                                                    from: ['idle', 'ready', 'replaying', 'recording', 'identifying', 'warning'],
                                                    to  : 'ready'
                                                },
                                                {
                                                    name: 'warn',
                                                    from: ['idle', 'ready', 'replaying', 'recording', 'identifying'],
                                                    to  : 'warning'
                                                },
                                                {name: 'reset', from: 'stopped', to: 'idle'}
                                            ],
                                            callbacks: {
                                                onbeforeidle       : this._onbeforeIdle,
                                                onleaveidle        : this._onleaveIdle,
                                                onenteridle        : this._onenterIdle,
                                                onafteridle        : this._onafterIdle,
                                                onbeforeready      : this._onbeforeReady,
                                                onleaveready       : this._onleaveReady,
                                                onenterready       : this._onenterReady,
                                                onafterready       : this._onafterReady,
                                                onbeforereplaying  : this._onbeforeReplaying,
                                                onleavereplaying   : this._onleaveReplaying,
                                                onenterreplaying   : this._onenterReplaying,
                                                onafterreplaying   : this._onafterReplaying,
                                                onbeforerecording  : this._onbeforeRecording,
                                                onleaverecording   : this._onleaveRecording,
                                                onenterrecording   : this._onenterRecording,
                                                onafterrecording   : this._onafterRecording,
                                                onbeforeidentifying: this._onbeforeIdentifying,
                                                onleaveidentifying : this._onleaveIdentifying,
                                                onenteridentifying : this._onenterIdentifying,
                                                onafteridentifying : this._onafterIdentifying,
                                                onbeforepaused     : this._onbeforePaused,
                                                onleavepaused      : this._onleavePaused,
                                                onenterpaused      : this._onenterPaused,
                                                onafterpaused      : this._onafterPaused,
                                                onbeforestopped    : this._onbeforeStopped,
                                                onleavestopped     : this._onleaveStopped,
                                                onenterstopped     : this._onenterStopped,
                                                onafterstopped     : this._onafterStopped,
                                                onbeforewarning    : this._onbeforeWarning,
                                                onleavewarning     : this._onleaveWarning,
                                                onenterwarning     : this._onenterWarning,
                                                onafterwarning     : this._onafterWarning,
                                                onbeforeerror      : this._onbeforeError,
                                                onleaveerror       : this._onleaveError,
                                                onentererror       : this._onenterError,
                                                onaftererror       : this._onafterError,
                                            }
                                        });
    }

    addExecutionAgent(agent) {

    }

    _onbeforeIdle(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onbeforeIdle, fromState, toState, ...args);
        this.onbeforeIdle(event, fromState, toState, ...args);
    }

    _onleaveIdle(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onleaveIdle, fromState, toState, ...args);
        this.onleaveIdle(event, fromState, toState, ...args);
    }

    _onenterIdle(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onenterIdle, fromState, toState, ...args);
        this.onenterIdle(event, fromState, toState, ...args);
    }

    _onafterIdle(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onafterIdle, fromState, toState, ...args);
        this.onafterIdle(event, fromState, toState, ...args);
    }

    _onbeforeReady(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onbeforeReady, fromState, toState, ...args);
        this.onbeforeReady(event, fromState, toState, ...args);
    }

    _onleaveReady(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onleaveReady, fromState, toState, ...args);
        this.onleaveReady(event, fromState, toState, ...args);
    }

    _onenterReady(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onenterReady, fromState, toState, ...args);
        this.onenterReady(event, fromState, toState, ...args);
    }

    _onafterReady(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onafterReady, fromState, toState, ...args);
        this.onafterReady(event, fromState, toState, ...args);
    }

    _onbeforeReplaying(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onbeforeReplaying, fromState, toState, ...args);
        this.onbeforeReplaying(event, fromState, toState, ...args);
    }

    _onleaveReplaying(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onleaveReplaying, fromState, toState, ...args);
        this.onleaveReplaying(event, fromState, toState, ...args);
    }

    _onenterReplaying(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onenterReplaying, fromState, toState, ...args);
        this.onenterReplaying(event, fromState, toState, ...args);
    }

    _onafterReplaying(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onafterReplaying, fromState, toState, ...args);
        this.onafterReplaying(event, fromState, toState, ...args);
    }

    _onbeforeRecording(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onbeforeRecording, fromState, toState, ...args);
        this.onbeforeRecording(event, fromState, toState, ...args);
    }

    _onleaveRecording(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onleaveRecording, fromState, toState, ...args);
        this.onleaveRecording(event, fromState, toState, ...args);
    }

    _onenterRecording(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onenterRecording, fromState, toState, ...args);
        this.onenterRecording(event, fromState, toState, ...args);
    }

    _onafterRecording(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onafterRecording, fromState, toState, ...args);
        this.onafterRecording(event, fromState, toState, ...args);
    }

    _onbeforeIdentifying(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onbeforeIdentifying, fromState, toState, ...args);
        this.onbeforeIdentifying(event, fromState, toState, ...args);
    }

    _onleaveIdentifying(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onleaveIdentifying, fromState, toState, ...args);
        this.onleaveIdentifying(event, fromState, toState, ...args);
    }

    _onenterIdentifying(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onenterIdentifying, fromState, toState, ...args);
        this.onenterIdentifying(event, fromState, toState, ...args);
    }

    _onafterIdentifying(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onafterIdentifying, fromState, toState, ...args);
        this.onafterIdentifying(event, fromState, toState, ...args);
    }

    _onbeforePaused(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onbeforePaused, fromState, toState, ...args);
        this.onbeforePaused(event, fromState, toState, ...args);
    }

    _onleavePaused(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onleavePaused, fromState, toState, ...args);
        this.onleavePaused(event, fromState, toState, ...args);
    }

    _onenterPaused(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onenterPaused, fromState, toState, ...args);
        this.onenterPaused(event, fromState, toState, ...args);
    }

    _onafterPaused(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onafterPaused, fromState, toState, ...args);
        this.onafterPaused(event, fromState, toState, ...args);
    }

    _onbeforeStopped(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onbeforeStopped, fromState, toState, ...args);
        this.onbeforeStopped(event, fromState, toState, ...args);
    }

    _onleaveStopped(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onleaveStopped, fromState, toState, ...args);
        this.onleaveStopped(event, fromState, toState, ...args);
    }

    _onenterStopped(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onenterStopped, fromState, toState, ...args);
        this.onenterStopped(event, fromState, toState, ...args);
    }

    _onafterStopped(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onafterStopped, fromState, toState, ...args);
        this.onafterStopped(event, fromState, toState, ...args);
    }

    _onbeforeWarning(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onbeforeWarning, fromState, toState, ...args);
        this.onbeforeWarning(event, fromState, toState, ...args);
    }

    _onleaveWarning(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onleaveWarning, fromState, toState, ...args);
        this.onleaveWarning(event, fromState, toState, ...args);
    }

    _onenterWarning(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onenterWarning, fromState, toState, ...args);
        this.onenterWarning(event, fromState, toState, ...args);
    }

    _onafterWarning(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onafterWarning, fromState, toState, ...args);
        this.onafterWarning(event, fromState, toState, ...args);
    }

    _onbeforeError(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onbeforeError, fromState, toState, ...args);
        this.onbeforeError(event, fromState, toState, ...args);
    }

    _onleaveError(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onleaveError, fromState, toState, ...args);
        this.onleaveError(event, fromState, toState, ...args);
    }

    _onenterError(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onenterError, fromState, toState, ...args);
        this.onenterError(event, fromState, toState, ...args);
    }

    _onafterError(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.engine.onafterError, fromState, toState, ...args);
        this.onafterError(event, fromState, toState, ...args);
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

exports.EngineBase = EngineBase;