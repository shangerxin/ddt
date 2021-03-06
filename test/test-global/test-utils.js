/**
 * Created by Shang, Erxin (Edwin) on 10/6/2016.
 */
let {sourcePath, expect} = require("../fixtures/global");
let {utils}              = require(`${sourcePath}/global/utils`);

describe("test util", () => {
	it("test get generate a GUID by the utils.getGUID", () => {
		let aGUID = utils.getGUID();
		expect(aGUID).to.be.a("string");
		expect(/\w{8}-\w{4}-8\w{3}-\w{4}-\w{12}/.test(aGUID)).to.be.true;
	})
});
