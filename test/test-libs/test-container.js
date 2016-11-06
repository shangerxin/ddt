/**
 * Created by shange on 11/6/2016.
 */
var {sourcePath, expect} = require("../fixtures/global");
var container            = require(`${sourcePath}/libs/container`).container;


describe("test subscriberTree", ()=> {
    it("test register type", ()=>{
        let instance = {};
        container.register("abc", ()=>{return instance});
        let ins = container.getInstance("abc");

        expect(ins).to.be.equal(instance);
        expect(container.isRegistered("abc")).to.be.true;
    });
});