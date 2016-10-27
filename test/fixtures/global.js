/**
 * Created by shange on 9/7/2016.
 */
var chai = require("chai");

exports.sourcePath = __dirname.replace(/\\/g, "/").replace("test/fixtures", "source");
exports.expect = chai.expect;