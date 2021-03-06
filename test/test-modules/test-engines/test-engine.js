/**
 * Created by Shang, Erxin (Edwin) on 10/10/2016.
 */
var {sourcePath, expect} = require("../../fixtures/global");
let {FakeCommunicator}   = require("../../fixtures/modules/communicators/fakeCommunicator");
var {Engine}             = require(`${sourcePath}/modules/engines/engine`);
var sinon                = require("sinon");
var {CommunicatorBase}   = require(`${sourcePath}/infrastructures/communicatorBase`);
var {CONST}              = require(`${sourcePath}/global/const`);


describe("test module/engine", ()=> {
    let engine;
    let events   = CONST.topics.engine.events;
    let commands = CONST.commands;

    beforeEach(()=> {
        engine = new Engine();
    });

    it("test create an engine instance", ()=> {
        expect(engine).to.be.not.null;
    });

    it("test subscribe event from engine", ()=> {
        let cb = new FakeCommunicator();
        let bfr = sinon.spy();

        engine.addCommunicator(cb);
        engine.subscribe(events.onbeforeStart, bfr);
        cb.publish(commands.engine.start);

        expect(engine.state).to.be.equal('ready');
        expect(bfr.called).to.be.true;
    });
});