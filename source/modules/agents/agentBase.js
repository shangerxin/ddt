/**
 * Created by shange on 9/7/2016.
 */
let {Observable}   = require("../../infrastructures/observable");
let {StateMachine} = require("../../libs/state-machine");
let {CONST}        = require("../../global/const");
let _              = require("lodash");

class AgentBase extends Observable {
    constructor() {
        super();
        this._fsm           = StateMachine.create({
                                                      initial  : 'idle',
                                                      events   : [
                                                          {name: 'start', from: 'idle', to: 'ready'},
                                                          {name: 'execute', from: 'ready', to: 'running'},
                                                          {name: 'done', from: 'running', to: 'ready'},
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
                                                          onbeforestart   : this._onbeforeStart.bind(this),
                                                          onafterstart    : this._onafterStart.bind(this),
                                                          onbeforeexecute : this._onbeforeExecute.bind(this),
                                                          onafterexecute  : this._onafterExecute.bind(this),
                                                          onbeforedone    : this._onbeforeDone.bind(this),
                                                          onafterdone     : this._onafterDone.bind(this),
                                                          onbeforestop    : this._onbeforeStop.bind(this),
                                                          onafterstop     : this._onafterStop.bind(this),
                                                          onbeforepause   : this._onbeforePause.bind(this),
                                                          onafterpause    : this._onafterPause.bind(this),
                                                          onbeforecontinue: this._onbeforeContinue.bind(this),
                                                          onaftercontinue : this._onafterContinue.bind(this),
                                                          onbeforereset   : this._onbeforeReset.bind(this),
                                                          onafterreset    : this._onafterReset.bind(this),
                                                          onbeforeerror   : this._onbeforeError.bind(this),
                                                          onaftererror    : this._onafterError.bind(this),
                                                          onbeforewarn    : this._onbeforeWarn.bind(this),
                                                          onafterwarn     : this._onafterWarn.bind(this),
                                                          onleaveidle     : this._onleaveIdle.bind(this),
                                                          onenteridle     : this._onenterIdle.bind(this),
                                                          onleaveready    : this._onleaveReady.bind(this),
                                                          onenterready    : this._onenterReady.bind(this),
                                                          onleaverunning  : this._onleaveRunning.bind(this),
                                                          onenterrunning  : this._onenterRunning.bind(this),
                                                          onleavepaused   : this._onleavePaused.bind(this),
                                                          onenterpaused   : this._onenterPaused.bind(this),
                                                          onleavestopped  : this._onleaveStopped.bind(this),
                                                          onenterstopped  : this._onenterStopped.bind(this),
                                                          onleavewarning  : this._onleaveWarning.bind(this),
                                                          onenterwarning  : this._onenterWarning.bind(this),
                                                          onleaveerror    : this._onleaveError.bind(this),
                                                          onentererror    : this._onenterError.bind(this),
                                                      },
                                                      error    : ()=> {

                                                      }
                                                  });
        this._communicators = [];
    }

    get state() {
        return this._fsm.current;
    }

    static get topics() {
        return CONST.topics.agent.events.concat(CONST.topics.agent.states);
    }

    /*****************************FSM event handlers start**************************************/
    _onbeforeStart(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onbeforeStart, fromState, toState, ...args);
        return this.onbeforeStart.call(this, event, fromState, toState, ...args);
    }

    _onafterStart(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onafterStart, fromState, toState, ...args);
        this.onafterStart.call(this, event, fromState, toState, ...args);
    }

    _onbeforeExecute(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onbeforeExecute, fromState, toState, ...args);
        return this.onbeforeExecute.call(this, event, fromState, toState, ...args);
    }

    _onafterExecute(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onafterExecute, fromState, toState, ...args);
        this.onafterExecute.call(this, event, fromState, toState, ...args);
    }

    _onbeforeDone(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onbeforeDone, fromState, toState, ...args);
        return this.onbeforeDone.call(this, event, fromState, toState, ...args);
    }

    _onafterDone(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onafterDone, fromState, toState, ...args);
        this.onafterDone.call(this, event, fromState, toState, ...args);
    }

    _onbeforeStop(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onbeforeStop, fromState, toState, ...args);
        return this.onbeforeStop.call(this, event, fromState, toState, ...args);
    }

    _onafterStop(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onafterStop, fromState, toState, ...args);
        this.onafterStop.call(this, event, fromState, toState, ...args);
    }

    _onbeforePause(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onbeforePause, fromState, toState, ...args);
        return this.onbeforePause.call(this, event, fromState, toState, ...args);
    }

    _onafterPause(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onafterPause, fromState, toState, ...args);
        this.onafterPause.call(this, event, fromState, toState, ...args);
    }

    _onbeforeContinue(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onbeforeContinue, fromState, toState, ...args);
        return this.onbeforeContinue.call(this, event, fromState, toState, ...args);
    }

    _onafterContinue(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onafterContinue, fromState, toState, ...args);
        this.onafterContinue.call(this, event, fromState, toState, ...args);
    }

    _onbeforeReset(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onbeforeReset, fromState, toState, ...args);
        return this.onbeforeReset.call(this, event, fromState, toState, ...args);
    }

    _onafterReset(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onafterReset, fromState, toState, ...args);
        this.onafterReset.call(this, event, fromState, toState, ...args);
    }

    _onbeforeError(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onbeforeError, fromState, toState, ...args);
        return this.onbeforeError.call(this, event, fromState, toState, ...args);
    }

    _onafterError(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onafterError, fromState, toState, ...args);
        this.onafterError.call(this, event, fromState, toState, ...args);
    }

    _onbeforeWarn(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onbeforeWarn, fromState, toState, ...args);
        return this.onbeforeWarn.call(this, event, fromState, toState, ...args);
    }

    _onafterWarn(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.events.onafterWarn, fromState, toState, ...args);
        this.onafterWarn.call(this, event, fromState, toState, ...args);
    }

    _onleaveIdle(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onleaveIdle, fromState, toState, ...args);
        return this.onleaveIdle.call(this, event, fromState, toState, ...args);
    }

    _onenterIdle(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onenterIdle, fromState, toState, ...args);
        this.onenterIdle.call(this, event, fromState, toState, ...args);
    }

    _onleaveReady(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onleaveReady, fromState, toState, ...args);
        return this.onleaveReady.call(this, event, fromState, toState, ...args);
    }

    _onenterReady(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onenterReady, fromState, toState, ...args);
        this.onenterReady.call(this, event, fromState, toState, ...args);
    }

    _onleaveRunning(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onleaveRunning, fromState, toState, ...args);
        return this.onleaveRunning.call(this, event, fromState, toState, ...args);
    }

    _onenterRunning(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onenterRunning, fromState, toState, ...args);
        this.onenterRunning.call(this, event, fromState, toState, ...args);
    }

    _onleavePaused(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onleavePaused, fromState, toState, ...args);
        return this.onleavePaused.call(this, event, fromState, toState, ...args);
    }

    _onenterPaused(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onenterPaused, fromState, toState, ...args);
        this.onenterPaused.call(this, event, fromState, toState, ...args);
    }

    _onleaveStopped(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onleaveStopped, fromState, toState, ...args);
        return this.onleaveStopped.call(this, event, fromState, toState, ...args);
    }

    _onenterStopped(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onenterStopped, fromState, toState, ...args);
        this.onenterStopped.call(this, event, fromState, toState, ...args);
    }

    _onleaveWarning(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onleaveWarning, fromState, toState, ...args);
        return this.onleaveWarning.call(this, event, fromState, toState, ...args);
    }

    _onenterWarning(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onenterWarning, fromState, toState, ...args);
        this.onenterWarning.call(this, event, fromState, toState, ...args);
    }

    _onleaveError(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onleaveError, fromState, toState, ...args);
        return this.onleaveError.call(this, event, fromState, toState, ...args);
    }

    _onenterError(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.agent.states.onenterError, fromState, toState, ...args);
        this.onenterError.call(this, event, fromState, toState, ...args);
    }

    onbeforeStart(event, fromState, toState, ...args) { return true; }

    onafterStart(event, fromState, toState, ...args) {}

    onbeforeExecute(event, fromState, toState, ...args) { return true; }

    onafterExecute(event, fromState, toState, ...args) {}

    onbeforeDone(event, fromState, toState, ...args) { return true; }

    onafterDone(event, fromState, toState, ...args) {}

    onbeforeStop(event, fromState, toState, ...args) { return true; }

    onafterStop(event, fromState, toState, ...args) {}

    onbeforePause(event, fromState, toState, ...args) { return true; }

    onafterPause(event, fromState, toState, ...args) {}

    onbeforeContinue(event, fromState, toState, ...args) { return true; }

    onafterContinue(event, fromState, toState, ...args) {}

    onbeforeReset(event, fromState, toState, ...args) { return true; }

    onafterReset(event, fromState, toState, ...args) {}

    onbeforeError(event, fromState, toState, ...args) { return true; }

    onafterError(event, fromState, toState, ...args) {}

    onbeforeWarn(event, fromState, toState, ...args) { return true; }

    onafterWarn(event, fromState, toState, ...args) {}

    onleaveIdle(event, fromState, toState, ...args) { return true; }

    onenterIdle(event, fromState, toState, ...args) {}

    onleaveReady(event, fromState, toState, ...args) { return true; }

    onenterReady(event, fromState, toState, ...args) {}

    onleaveRunning(event, fromState, toState, ...args) { return true; }

    onenterRunning(event, fromState, toState, ...args) {}

    onleavePaused(event, fromState, toState, ...args) { return true; }

    onenterPaused(event, fromState, toState, ...args) {}

    onleaveStopped(event, fromState, toState, ...args) { return true; }

    onenterStopped(event, fromState, toState, ...args) {}

    onleaveWarning(event, fromState, toState, ...args) { return true; }

    onenterWarning(event, fromState, toState, ...args) {}

    onleaveError(event, fromState, toState, ...args) { return true; }

    onenterError(event, fromState, toState, ...args) {}

    /*****************************FSM event handlers end***************************************/

    addCommunicator(communicator) {
        let cmdTopics = CONST.commands.agent;
        _.forEach(cmdTopics, (cmdTopic)=> {
            communicator.subscribe(cmdTopic, (cmdTopic, ...args)=> {
                let fsm = this._fsm;
                switch (cmdTopic) {
                    case cmdTopics.start:
                        fsm.start(...args);
                        break;
                    case cmdTopics.stop:
                        fsm.stop(...args);
                        break;
                    case cmdTopics.reset:
                        fsm.reset(...args);
                        break;
                    case cmdTopics.pause:
                        fsm.pause(...args);
                        break;
                    case cmdTopics.continue:
                        fsm.continue(...args);
                        break;
                    case cmdTopics.execute:
                        fsm.execute(...args);
                        break;
                    default:
                        fsm.warn(cmdTopic, ...args);
                }
            }, this);
        });
        _.forEach(CONST.topics.agent.events, (event)=> {
            this.subscribe(event, function (...args) {
                communicator.send(event, ...args);
            });
        });
        _.forEach(CONST.topics.agent.states, (state)=> {
            this.subscribe(state, function (...args) {
                communicator.send(state, ...args);
            });
        });
        this._communicators.push(communicator);
    }

    removeCommunicator(communicator) {
        this._communicators.delete(communicator);
    }
}

exports.AgentBase = AgentBase;