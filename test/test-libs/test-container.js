/**
 * Created by Shang, Erxin (Edwin) on 11/6/2016.
 */
var {sourcePath, expect} = require("../fixtures/global");
var container            = require(`${sourcePath}/libs/container`).container;


describe("test subscriberTree", ()=> {
    it("test register type", ()=>{
        let instance = {};
        container.register("abc", ()=>{return instance});
        let ins = container.resolve("abc");

        expect(ins).to.be.equal(instance);
        expect(container.isRegistered("abc")).to.be.true;
    });
});