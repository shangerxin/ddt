/**
 * Created by shange on 10/6/2016.
 */
var {sourcePath, expect} = require("../fixtures/global");
var SubscriberTree       = require(`${sourcePath}/libs/SubscriberTree`).SubscriberTree;


describe("test subscriberTree", ()=> {
    it("test create an instance", ()=> {
        let subscribers = new SubscriberTree();
        expect(subscribers).to.not.be.null;
    });

    it("test add and remove a subscriber into the subscribers", ()=>{
        let subscribers = new SubscriberTree();
        let fn = ()=>{};
        let topic = "topic/abc";
        let result = subscribers.addSubscriber(topic, fn);

        expect(result).to.be.true;

        result = subscribers.removeSubscriber(topic, fn);
        expect(result).to.be.true;

        result = subscribers.removeSubscriber(topic, ()=>{});
        expect(result).to.be.false;
    });

    it("test walk down the topic path", ()=>{
        let subscribers = new SubscriberTree();
        let fn = ()=>{};
        let topic = "topic/abc";

        subscribers.addSubscriber(topic, fn);
        subscribers.addSubscriber(`${topic}/def`, fn);
        subscribers.addSubscriber(`${topic}/def/gh`, fn);
        subscribers.addSubscriber(`${topic}/abc/de`, fn);
        subscribers.addSubscriber(`${topic}/rpg`, fn);
        subscribers.addSubscriber(`not-call`, fn);

        let count = 0;
        let topics = [];
        for(let subscriber of subscribers.walkDownPath(topic)){
            topics.push(subscriber.topic);
            count++;
        }
        expect(count).to.equal(6);
        expect(topics).to.eql(["abc","def","abc","rpg","gh","de"]);
    });

    it("test add one time subscriber and remove the subscriber", ()=>{
        let subscribers = new SubscriberTree();
        let fn = ()=>{};
        let topic = "topic/test";
        
        subscribers.addOneTimeSubscriber(topic, fn);
        let subscriber = subscribers.find(topic);
        expect(subscriber.handlers.length).to.equal(1);

        let handler = subscriber.handlers[0];
        expect(handler.isOneTime).to.be.true;

        handler.remove();
        expect(subscriber.handlers.length).to.equal(0);
    });

    it("test walk along path", ()=>{
        let subscribers = new SubscriberTree();
        let fn = ()=>{};
        let topic = "topic/test";
        let count = 0;
        let topics = [];

        subscribers.addOneTimeSubscriber(topic, fn);
        for(let s of subscribers.walkAlongPath(topic)){
            count++;
            topics.push(s.topic);
        }

        expect(count).to.equal(2);
        expect(topics).to.eql(["topic", "test"]);
    });

    it("test find a subscriber", ()=>{
        let subscribers = new SubscriberTree();
        let fn = ()=>{};
        let topic = "topic/test";

        subscribers.addOneTimeSubscriber(topic, fn);

        expect(subscribers.find(topic)).to.not.be.null;
    })
});