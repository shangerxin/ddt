/**
 * Created by Shang, Erxin (Edwin) on 1/6/2017.
 */
var {sourcePath, expect} = require("../fixtures/global");
var {TestModelFactory} = require(`${sourcePath}/factories/TestModelFactory`);


describe("test TestModelFactory", ()=>{
	it("test get several instances of test model factory instance, the instances should be same", ()=>{
		let ins0 = TestModelFactory.instance;
		let ins1 = TestModelFactory.instance;

		expect(ins0).to.be.an.instanceof(TestModelFactory);
		expect(ins1).to.be.equal(ins1);
	});
});
