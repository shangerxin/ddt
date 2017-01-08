/**
 * Created by erxin on 1/7/2017.
 */
let {AgentBase} = require("../../infrastructures/agentBase");

class BrowserAgent extends AgentBase{
    constructor(){
        super();
    }

    get type(){
        return BrowserAgent.name;
    }


    onbeforeStart(event, fromState, toState, ...args) {
        return true;
    }

    onafterStart(event, fromState, toState, ...args) {
    }

    onbeforeExecute(event, fromState, toState, ...args) {
        return true;
    }

    onafterExecute(event, fromState, toState, ...args) {
    }

    onbeforeDone(event, fromState, toState, ...args) {
        return true;
    }

    onafterDone(event, fromState, toState, ...args) {
    }

    onbeforeStop(event, fromState, toState, ...args) {
        return true;
    }

    onafterStop(event, fromState, toState, ...args) {
    }

    onbeforePause(event, fromState, toState, ...args) {
        return true;
    }

    onafterPause(event, fromState, toState, ...args) {
    }

    onbeforeContinue(event, fromState, toState, ...args) {
        return true;
    }

    onafterContinue(event, fromState, toState, ...args) {
    }

    onbeforeReset(event, fromState, toState, ...args) {
        return true;
    }

    onafterReset(event, fromState, toState, ...args) {
    }

    onbeforeError(event, fromState, toState, ...args) {
        return true;
    }

    onafterError(event, fromState, toState, ...args) {
    }

    onbeforeWarn(event, fromState, toState, ...args) {
        return true;
    }

    onafterWarn(event, fromState, toState, ...args) {
    }

    onleaveIdle(event, fromState, toState, ...args) {
        return true;
    }

    onenterIdle(event, fromState, toState, ...args) {
    }

    onleaveReady(event, fromState, toState, ...args) {
        return true;
    }

    onenterReady(event, fromState, toState, ...args) {
    }

    onleaveRunning(event, fromState, toState, ...args) {
        return true;
    }

    onenterRunning(event, fromState, toState, ...args) {
    }

    onleavePaused(event, fromState, toState, ...args) {
        return true;
    }

    onenterPaused(event, fromState, toState, ...args) {
    }

    onleaveStopped(event, fromState, toState, ...args) {
        return true;
    }

    onenterStopped(event, fromState, toState, ...args) {
    }

    onleaveWarning(event, fromState, toState, ...args) {
        return true;
    }

    onenterWarning(event, fromState, toState, ...args) {
    }

    onleaveError(event, fromState, toState, ...args) {
        return true;
    }

    onenterError(event, fromState, toState, ...args) {
    }
}

exports.BrowserAgent = BrowserAgent;