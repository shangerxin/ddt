/**
 * Created by shange on 9/7/2016.
 */
let {AgentBase} = require("./agentBase");
let net = require("net");
let childprocess = require("child_process");

class SeleniumAgent extends AgentBase {
    constructor() {
        super();
        //let _server = this._server = net.createServer((socket)=>{
        //    socket.on('data', (data)=>{
        //        console.info(`selenium agent received data`, data.toString());
        //    });
        //}).on('error', (err)=>{
        //    console.error(`selenium agent server error`, err);
        //});
        //_server.listen(()=>{
        //    let address = _server.address();
        //    console.info(`SeleniumAgent server open on `, address);
        //    childprocess.spawn(`E:\\Project\\document_driven_test\\environments\\node\\node.exe`,
        //                       ['E:\\Project\\document_driven_test\\source\\modules\\executors\\seleniumExecutor.js', address]);
        //});
    }

    onbeforeStart(event, fromState, toState, ...args) {
        return true;
    }

    onafterStart(event, fromState, toState, ...args) {}

    onbeforeExecute(event, fromState, toState, ...args) {
        return true;
    }

    onafterExecute(event, fromState, toState, ...args) {}

    onbeforeDone(event, fromState, toState, ...args) {}

    onafterDone(event, fromState, toState, ...args) {}

    onbeforeStop(event, fromState, toState, ...args) {}

    onafterStop(event, fromState, toState, ...args) {}

    onbeforePause(event, fromState, toState, ...args) {}

    onafterPause(event, fromState, toState, ...args) {}

    onbeforeContinue(event, fromState, toState, ...args) {}

    onafterContinue(event, fromState, toState, ...args) {}

    onbeforeReset(event, fromState, toState, ...args) {}

    onafterReset(event, fromState, toState, ...args) {}

    onbeforeError(event, fromState, toState, ...args) {}

    onafterError(event, fromState, toState, ...args) {}

    onbeforeWarn(event, fromState, toState, ...args) {}

    onafterWarn(event, fromState, toState, ...args) {}

    onleaveIdle(event, fromState, toState, ...args) {}

    onenterIdle(event, fromState, toState, ...args) {}

    onleaveReady(event, fromState, toState, ...args) {}

    onenterReady(event, fromState, toState, ...args) {}

    onleaveRunning(event, fromState, toState, ...args) {}

    onenterRunning(event, fromState, toState, ...args) {
        childprocess.spawn(`E:\\Project\\document_driven_test\\environments\\node\\node.exe`,
                               ['E:\\Project\\document_driven_test\\source\\modules\\executors\\seleniumExecutor.js'], {detached
                           :true});
    }

    onleavePaused(event, fromState, toState, ...args) {}

    onenterPaused(event, fromState, toState, ...args) {}

    onleaveStopped(event, fromState, toState, ...args) {}

    onenterStopped(event, fromState, toState, ...args) {}

    onleaveWarning(event, fromState, toState, ...args) {}

    onenterWarning(event, fromState, toState, ...args) {}

    onleaveError(event, fromState, toState, ...args) {}

    onenterError(event, fromState, toState, ...args) {}
}

exports.SeleniumAgent = SeleniumAgent;