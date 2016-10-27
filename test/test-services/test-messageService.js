/**
 * Created by shange on 10/5/2016.
 */
var {sourcePath, expect} = require("../fixtures/global");
var {MessageService}     = require(`${sourcePath}/services/messageService`);
var sinon                = require("sinon");

describe("test messageService", ()=> {
    it("test create a instance and it should contain the observable methods", ()=> {
        let service = new MessageService();

        expect(service).to.not.be.null;
        expect(typeof service.subscribe).to.be.equal("function");
        expect(typeof service.subscribeOneTime).to.be.equal("function");
        expect(typeof service.unSubscribe).to.be.equal("function");
        expect(typeof service.publish).to.be.equal("function");
    });

    it("test subscribe a topic", ()=> {
        let service = new MessageService();
        let topic0  = "topic0";
        let topic1  = "topic0/topic1";
        let topic2  = "topic0/topic1/topic2";
        let fnT0    = sinon.spy();
        let fnT1    = sinon.spy();
        let fnT2    = sinon.spy();

        service.subscribe(topic0, fnT0);
        service.subscribe(topic1, fnT1);
        service.subscribe(topic2, fnT2);

        service.publish(topic1);

        expect(fnT0.called).to.be.false;
        expect(fnT1.called).to.be.true;
        expect(fnT2.called).to.be.false;
    });

    it("test subscribe as one time", ()=> {
        let service = new MessageService();
        let fn      = sinon.spy();
        let topic   = "topic/test";

        service.subscribeOneTime(topic, fn);
        service.publish(topic);
        service.publish(topic);

        expect(fn.calledOnce).to.be.true;
    });

    it("test publish with arguments", ()=> {
        let service = new MessageService();
        let fn      = sinon.spy();
        let topic   = "topic/test";

        service.subscribeOneTime(topic, fn);
        service.publish(topic, 1, 's', [1,2]);

        expect(fn.calledWith(topic, 1, 's', [1,2])).to.be.true;
    });

    it("test subscribe with context", ()=> {
        let service = new MessageService();
        let fn      = sinon.spy();
        let topic   = "topic/test";
        let context = {x:0};

        service.subscribeOneTime(topic, fn, context);
        service.publish(topic, 1, 's', [1,2]);

        expect(fn.calledWith(topic, 1, 's', [1,2])).to.be.true;
        expect(fn.calledOn(context)).to.be.true;
    });

    it("test publish up chain", ()=> {
        let service = new MessageService();
        let topic0  = "topic0";
        let topic1  = "topic0/topic1";
        let topic2  = "topic0/topic1/topic2";
        let fnT0    = sinon.spy();
        let fnT1    = sinon.spy();
        let fnT2    = sinon.spy();

        service.subscribe(topic0, fnT0);
        service.subscribe(topic1, fnT1);
        service.subscribe(topic2, fnT2);

        service.publishUpChain(topic1);

        expect(fnT0.called).to.be.true;
        expect(fnT1.called).to.be.true;
        expect(fnT2.called).to.be.false;
    });

    it("test publish down chain", ()=> {
        let service = new MessageService();
        let topic0  = "topic0";
        let topic1  = "topic0/topic1";
        let topic2  = "topic0/topic1/topic2";
        let fnT0    = sinon.spy();
        let fnT1    = sinon.spy();
        let fnT2    = sinon.spy();

        service.subscribe(topic0, fnT0);
        service.subscribe(topic1, fnT1);
        service.subscribe(topic2, fnT2);

        service.publishDownChain(topic1);

        expect(fnT0.called).to.be.false;
        expect(fnT1.called).to.be.true;
        expect(fnT2.called).to.be.true;
    });
});