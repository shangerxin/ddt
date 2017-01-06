/**
 * Created by Shang, Erxin (Edwin) on 1/6/2017.
 */
var {sourcePath, expect} = require("../fixtures/global");
var {ServiceFactory} = require(`${sourcePath}/factories/serviceFactory`);


describe("test ServiceFactory", ()=>{
	it("test get several instances of service factory instance, the instances should be same", ()=>{
		let ins0 = ServiceFactory.instance;
		let ins1 = ServiceFactory.instance;

		expect(ins0).to.be.an.instanceof(ServiceFactory);
		expect(ins1).to.be.equal(ins1);
	});
});