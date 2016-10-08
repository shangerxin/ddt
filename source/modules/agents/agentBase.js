/**
 * Created by shange on 9/7/2016.
 */
let {ObjectBase}   = require("../../infrastructures/objectBase");
let {StateMachine} = require("../../libs/state-machine");
let {CONST}        = require("../../global/const");

class AgentBase extends ObjectBase {
    constructor() {
        super();
        this._fsm = StateMachine.create({
                                            initial  : 'idle',
                                            events   : [
                                                {name: 'start', from: 'idle', to: 'ready'},
                                                {name: 'executeStep', from: 'ready', to: 'running'},
                                                {name: 'completeStep', from: 'running', to: 'ready'},
                                                {
                                                    name: 'stop',
                                                    from: ['ready', 'running', 'paused', 'error'],
                                                    to  : 'stopped'
                                                },
                                                {name: 'pause', from: ['ready', 'running'], to: 'paused'},
                                                {name: 'continue', from: ['paused', 'warning'], to: 'ready'},
                                                {name: 'reset', from: 'stopped', to: 'idle'},
                                                {
                                                    name: 'error',
                                                    from: ['idle', 'running', 'ready', 'paused', 'warning'],
                                                    to  : 'error'
                                                },
                                                {
                                                    name: 'warn',
                                                    from: ['running', 'idle', 'ready', 'paused'],
                                                    to  : 'warning'
                                                },
                                            ],
                                            callbacks: {
                                                onbeforeidle   : this._onbeforeIdle,
                                                onleaveidle    : this._onleaveIdle,
                                                onenteridle    : this._onenterIdle,
                                                onafteridle    : this._onafterIdle,
                                                onbeforeready  : this._onbeforeReady,
                                                onleaveready   : this._onleaveReady,
                                                onenterready   : this._onenterReady,
                                                onafterready   : this._onafterReady,
                                                onbeforerunning: this._onbeforeRunning,
                                                onleaverunning : this._onleaveRunning,
                                                onenterrunning : this._onenterRunning,
                                                onafterrunning : this._onafterRunning,
                                                onbeforepaused : this._onbeforePaused,
                                                onleavepaused  : this._onleavePaused,
                                                onenterpaused  : this._onenterPaused,
                                                onafterpaused  : this._onafterPaused,
                                                onbeforestopped: this._onbeforeStopped,
                                                onleavestopped : this._onleaveStopped,
                                                onenterstopped : this._onenterStopped,
                                                onafterstopped : this._onafterStopped,
                                                onbeforewarning: this._onbeforeWarning,
                                                onleavewarning : this._onleaveWarning,
                                                onenterwarning : this._onenterWarning,
                                                onafterwarning : this._onafterWarning,
                                                onbeforeerror  : this._onbeforeError,
                                                onleaveerror   : this._onleaveError,
                                                onentererror   : this._onenterError,
                                                onaftererror   : this._onafterError,
                                            }
                                        });
    }

    _onbeforeIdle(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onbeforeIdle, fromState, toState, ...args);
        this.onbeforeIdle(event, fromState, toState, ...args);
    }

    _onleaveIdle(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onleaveIdle, fromState, toState, ...args);
        this.onleaveIdle(event, fromState, toState, ...args);
    }

    _onenterIdle(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onenterIdle, fromState, toState, ...args);
        this.onenterIdle(event, fromState, toState, ...args);
    }

    _onafterIdle(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onafterIdle, fromState, toState, ...args);
        this.onafterIdle(event, fromState, toState, ...args);
    }

    _onbeforeReady(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onbeforeReady, fromState, toState, ...args);
        this.onbeforeReady(event, fromState, toState, ...args);
    }

    _onleaveReady(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onleaveReady, fromState, toState, ...args);
        this.onleaveReady(event, fromState, toState, ...args);
    }

    _onenterReady(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onenterReady, fromState, toState, ...args);
        this.onenterReady(event, fromState, toState, ...args);
    }

    _onafterReady(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onafterReady, fromState, toState, ...args);
        this.onafterReady(event, fromState, toState, ...args);
    }

    _onbeforeRunning(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onbeforeRunning, fromState, toState, ...args);
        this.onbeforeRunning(event, fromState, toState, ...args);
    }

    _onleaveRunning(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onleaveRunning, fromState, toState, ...args);
        this.onleaveRunning(event, fromState, toState, ...args);
    }

    _onenterRunning(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onenterRunning, fromState, toState, ...args);
        this.onenterRunning(event, fromState, toState, ...args);
    }

    _onafterRunning(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onafterRunning, fromState, toState, ...args);
        this.onafterRunning(event, fromState, toState, ...args);
    }

    _onbeforePaused(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onbeforePaused, fromState, toState, ...args);
        this.onbeforePaused(event, fromState, toState, ...args);
    }

    _onleavePaused(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onleavePaused, fromState, toState, ...args);
        this.onleavePaused(event, fromState, toState, ...args);
    }

    _onenterPaused(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onenterPaused, fromState, toState, ...args);
        this.onenterPaused(event, fromState, toState, ...args);
    }

    _onafterPaused(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onafterPaused, fromState, toState, ...args);
        this.onafterPaused(event, fromState, toState, ...args);
    }

    _onbeforeStopped(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onbeforeStopped, fromState, toState, ...args);
        this.onbeforeStopped(event, fromState, toState, ...args);
    }

    _onleaveStopped(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onleaveStopped, fromState, toState, ...args);
        this.onleaveStopped(event, fromState, toState, ...args);
    }

    _onenterStopped(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onenterStopped, fromState, toState, ...args);
        this.onenterStopped(event, fromState, toState, ...args);
    }

    _onafterStopped(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onafterStopped, fromState, toState, ...args);
        this.onafterStopped(event, fromState, toState, ...args);
    }

    _onbeforeWarning(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onbeforeWarning, fromState, toState, ...args);
        this.onbeforeWarning(event, fromState, toState, ...args);
    }

    _onleaveWarning(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onleaveWarning, fromState, toState, ...args);
        this.onleaveWarning(event, fromState, toState, ...args);
    }

    _onenterWarning(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onenterWarning, fromState, toState, ...args);
        this.onenterWarning(event, fromState, toState, ...args);
    }

    _onafterWarning(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onafterWarning, fromState, toState, ...args);
        this.onafterWarning(event, fromState, toState, ...args);
    }

    _onbeforeError(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onbeforeError, fromState, toState, ...args);
        this.onbeforeError(event, fromState, toState, ...args);
    }

    _onleaveError(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onleaveError, fromState, toState, ...args);
        this.onleaveError(event, fromState, toState, ...args);
    }

    _onenterError(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onenterError, fromState, toState, ...args);
        this.onenterError(event, fromState, toState, ...args);
    }

    _onafterError(event, fromState, toState, ...args) {
        this.publishUpChain(CONST.topics.agent.onafterError, fromState, toState, ...args);
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

    onbeforeRunning(event, fromState, toState, ...args) {}

    onleaveRunning(event, fromState, toState, ...args) {}

    onenterRunning(event, fromState, toState, ...args) {}

    onafterRunning(event, fromState, toState, ...args) {}

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

exports.AgentBase = AgentBase;