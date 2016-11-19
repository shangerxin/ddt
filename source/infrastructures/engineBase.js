/**
 * Created by shange on 10/4/2016.
 */
let {Observable}                = require("./observable");
let {StateMachine}              = require("../libs/state-machine");
let {CONST}                     = require("../global/const");
let {utils}                     = require("../global/utils");
let _                           = require("lodash");
let {UnknownCommandError}       = require("./errors");

require("../global/extends/extendArray");

class EngineBase extends Observable {
    constructor() {
        super();
        this._id            = utils.getGUID();
        this._fsm           = StateMachine.create({
                                                      initial  : 'idle',
                                                      events   : [
                                                          {name: 'start', from: 'idle', to: 'ready'},
                                                          {name: 'replay', from: 'ready', to: 'replaying'},
                                                          {name: 'record', from: 'ready', to: 'recording'},
                                                          {name: 'identify', from: 'ready', to: 'identifying'},
                                                          {
                                                              name: 'stop',
                                                              from: ['ready', 'paused', 'replaying', 'recording', 'identifying', 'error'],
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
                                                              from: ['paused', 'idle', 'ready', 'replaying', 'recording', 'identifying', 'warning', 'stopped'],
                                                              to  : 'error'
                                                          },
                                                          {
                                                              name: 'warn',
                                                              from: ['paused', 'idle', 'ready', 'replaying', 'recording', 'identifying', 'warning', 'stopped'],
                                                              to  : 'warning'
                                                          },
                                                          {name: 'reset', from: 'stopped', to: 'idle'}
                                                      ],
                                                      callbacks: {
                                                          onbeforestart     : this._onbeforeStart.bind(this),
                                                          onafterstart      : this._onafterStart.bind(this),
                                                          onbeforereplay    : this._onbeforeReplay.bind(this),
                                                          onafterreplay     : this._onafterReplay.bind(this),
                                                          onbeforerecord    : this._onbeforeRecord.bind(this),
                                                          onafterrecord     : this._onafterRecord.bind(this),
                                                          onbeforeidentify  : this._onbeforeIdentify.bind(this),
                                                          onafteridentify   : this._onafterIdentify.bind(this),
                                                          onbeforestop      : this._onbeforeStop.bind(this),
                                                          onafterstop       : this._onafterStop.bind(this),
                                                          onbeforepause     : this._onbeforePause.bind(this),
                                                          onafterpause      : this._onafterPause.bind(this),
                                                          onbeforecontinue  : this._onbeforeContinue.bind(this),
                                                          onaftercontinue   : this._onafterContinue.bind(this),
                                                          onbeforewarn      : this._onbeforeWarn.bind(this),
                                                          onafterwarn       : this._onafterWarn.bind(this),
                                                          onbeforereset     : this._onbeforeReset.bind(this),
                                                          onafterreset      : this._onafterReset.bind(this),
                                                          onbeforeerror     : this._onbeforeError.bind(this),
                                                          onaftererror      : this._onafterError.bind(this),
                                                          onleaveidle       : this._onleaveIdle.bind(this),
                                                          onenteridle       : this._onenterIdle.bind(this),
                                                          onleaveready      : this._onleaveReady.bind(this),
                                                          onenterready      : this._onenterReady.bind(this),
                                                          onleavereplaying  : this._onleaveReplaying.bind(this),
                                                          onenterreplaying  : this._onenterReplaying.bind(this),
                                                          onleaverecording  : this._onleaveRecording.bind(this),
                                                          onenterrecording  : this._onenterRecording.bind(this),
                                                          onleaveidentifying: this._onleaveIdentifying.bind(this),
                                                          onenteridentifying: this._onenterIdentifying.bind(this),
                                                          onleavepaused     : this._onleavePaused.bind(this),
                                                          onenterpaused     : this._onenterPaused.bind(this),
                                                          onleavestopped    : this._onleaveStopped.bind(this),
                                                          onenterstopped    : this._onenterStopped.bind(this),
                                                          onleavewarning    : this._onleaveWarning.bind(this),
                                                          onenterwarning    : this._onenterWarning.bind(this),
                                                          onleaveerror      : this._onleaveError.bind(this),
                                                          onentererror      : this._onenterError.bind(this),
                                                      }
                                                  });
        this._communicators = [];
    }

    get type(){
        return EngineBase.name;
    }

    get state() {
        return this._fsm.current;
    }

    get id() {
        return this._id;
    }

    static get topics() {
        return CONST.topics.engine.events.concat(CONST.topics.engine.states);
    }

    /*****************************FSM event handlers start**************************************/
    _onbeforeStart(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onbeforeStart, fromState, toState, ...args);
        return this.onbeforeStart.call(this, event, fromState, toState, ...args);
    }

    _onafterStart(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onafterStart, fromState, toState, ...args);
        this.onafterStart.call(this, event, fromState, toState, ...args);
    }

    _onbeforeReplay(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onbeforeReplay, fromState, toState, ...args);
        return this.onbeforeReplay.call(this, event, fromState, toState, ...args);
    }

    _onafterReplay(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onafterReplay, fromState, toState, ...args);
        this.onafterReplay.call(this, event, fromState, toState, ...args);
    }

    _onbeforeRecord(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onbeforeRecord, fromState, toState, ...args);
        return this.onbeforeRecord.call(this, event, fromState, toState, ...args);
    }

    _onafterRecord(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onafterRecord, fromState, toState, ...args);
        this.onafterRecord.call(this, event, fromState, toState, ...args);
    }

    _onbeforeIdentify(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onbeforeIdentify, fromState, toState, ...args);
        return this.onbeforeIdentify.call(this, event, fromState, toState, ...args);
    }

    _onafterIdentify(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onafterIdentify, fromState, toState, ...args);
        this.onafterIdentify.call(this, event, fromState, toState, ...args);
    }

    _onbeforeStop(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onbeforeStop, fromState, toState, ...args);
        return this.onbeforeStop.call(this, event, fromState, toState, ...args);
    }

    _onafterStop(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onafterStop, fromState, toState, ...args);
        this.onafterStop.call(this, event, fromState, toState, ...args);
    }

    _onbeforePause(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onbeforePause, fromState, toState, ...args);
        return this.onbeforePause.call(this, event, fromState, toState, ...args);
    }

    _onafterPause(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onafterPause, fromState, toState, ...args);
        this.onafterPause.call(this, event, fromState, toState, ...args);
    }

    _onbeforeContinue(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onbeforeContinue, fromState, toState, ...args);
        return this.onbeforeContinue.call(this, event, fromState, toState, ...args);
    }

    _onafterContinue(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onafterContinue, fromState, toState, ...args);
        this.onafterContinue.call(this, event, fromState, toState, ...args);
    }

    _onbeforeWarn(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onbeforeWarn, fromState, toState, ...args);
        return this.onbeforeWarn.call(this, event, fromState, toState, ...args);
    }

    _onafterWarn(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onafterWarn, fromState, toState, ...args);
        this.onafterWarn.call(this, event, fromState, toState, ...args);
    }

    _onbeforeReset(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onbeforeReset, fromState, toState, ...args);
        return this.onbeforeReset.call(this, event, fromState, toState, ...args);
    }

    _onafterReset(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onafterReset, fromState, toState, ...args);
        this.onafterReset.call(this, event, fromState, toState, ...args);
    }

    _onbeforeError(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onbeforeError, fromState, toState, ...args);
        return this.onbeforeError.call(this, event, fromState, toState, ...args);
    }

    _onafterError(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.events.onafterError, fromState, toState, ...args);
        this.onafterError.call(this, event, fromState, toState, ...args);
    }

    _onleaveIdle(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onleaveIdle, fromState, toState, ...args);
        return this.onleaveIdle.call(this, event, fromState, toState, ...args);
    }

    _onenterIdle(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onenterIdle, fromState, toState, ...args);
        this.onenterIdle.call(this, event, fromState, toState, ...args);
    }

    _onleaveReady(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onleaveReady, fromState, toState, ...args);
        return this.onleaveReady.call(this, event, fromState, toState, ...args);
    }

    _onenterReady(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onenterReady, fromState, toState, ...args);
        this.onenterReady.call(this, event, fromState, toState, ...args);
    }

    _onleaveReplaying(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onleaveReplaying, fromState, toState, ...args);
        return this.onleaveReplaying.call(this, event, fromState, toState, ...args);
    }

    _onenterReplaying(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onenterReplaying, fromState, toState, ...args);
        this.onenterReplaying.call(this, event, fromState, toState, ...args);
    }

    _onleaveRecording(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onleaveRecording, fromState, toState, ...args);
        return this.onleaveRecording.call(this, event, fromState, toState, ...args);
    }

    _onenterRecording(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onenterRecording, fromState, toState, ...args);
        this.onenterRecording.call(this, event, fromState, toState, ...args);
    }

    _onleaveIdentifying(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onleaveIdentifying, fromState, toState, ...args);
        return this.onleaveIdentifying.call(this, event, fromState, toState, ...args);
    }

    _onenterIdentifying(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onenterIdentifying, fromState, toState, ...args);
        this.onenterIdentifying.call(this, event, fromState, toState, ...args);
    }

    _onleavePaused(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onleavePaused, fromState, toState, ...args);
        return this.onleavePaused.call(this, event, fromState, toState, ...args);
    }

    _onenterPaused(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onenterPaused, fromState, toState, ...args);
        this.onenterPaused.call(this, event, fromState, toState, ...args);
    }

    _onleaveStopped(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onleaveStopped, fromState, toState, ...args);
        return this.onleaveStopped.call(this, event, fromState, toState, ...args);
    }

    _onenterStopped(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onenterStopped, fromState, toState, ...args);
        this.onenterStopped.call(this, event, fromState, toState, ...args);
    }

    _onleaveWarning(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onleaveWarning, fromState, toState, ...args);
        return this.onleaveWarning.call(this, event, fromState, toState, ...args);
    }

    _onenterWarning(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onenterWarning, fromState, toState, ...args);
        this.onenterWarning.call(this, event, fromState, toState, ...args);
    }

    _onleaveError(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onleaveError, fromState, toState, ...args);
        return this.onleaveError.call(this, event, fromState, toState, ...args);
    }

    _onenterError(event, fromState, toState, ...args) {
        this.publishUpChain.call(this, CONST.topics.engine.states.onenterError, fromState, toState, ...args);
        this.onenterError.call(this, event, fromState, toState, ...args);
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

    onenterReady(event, fromState, toState, ...args) {}

    onleaveReplaying(event, fromState, toState, ...args) { return true; }

    onenterReplaying(event, fromState, toState, ...args) {}

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

    /*****************************FSM event handlers end***************************************/

    addCommunicator(communicator) {
        let cmdTopics = CONST.commands.engine;
        let $this     = this;
        _.forEach(cmdTopics, (cmdTopic)=> {
            let fsm = this._fsm;
            communicator.subscribe(cmdTopic, function(cmdTopic, ...args){
                switch (cmdTopic) {
                    case cmdTopics.identify:
                        fsm.identify(...args);
                        break;
                    case cmdTopics.record:
                        fsm.record(...args);
                        break;
                    case cmdTopics.start:
                        fsm.start(...args);
                        break;
                    case cmdTopics.replay:
                        fsm.replay(...args);
                        break;
                    case cmdTopics.continue:
                        fsm.continue(...args);
                        break;
                    case cmdTopics.pause:
                        fsm.pause(...args);
                        break;
                    case cmdTopics.reset:
                        fsm.reset(...args);
                        break;
                    case cmdTopics.stop:
                        fsm.stop(...args);
                        break;
                    default:
                        fsm.warn(cmdTopic, new UnknownCommandError(), ...args);
                }
            }, this);
        });
        _.forEach(CONST.topics.engine.events, (event)=> {
            $this.subscribe(event, function (...args) {
                communicator.send(event, ...args);
            });
        });
        _.forEach(CONST.topics.engine.states, (state)=> {
            $this.subscribe(state, function (...args) {
                communicator.send(state, ...args);
            });
        });
        $this._communicators.push(communicator);
    }

    removeCommunicator(communicator) {
        this._communicators.deleteByValue(communicator);
    }
}

exports.EngineBase = EngineBase;