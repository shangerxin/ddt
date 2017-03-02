/**
 * Created by erxin on 1/15/2017.
 */
let {ObjectBase} = require("../objectBase");
let {utils}      = require("../../global/utils");

class ScriptBase extends ObjectBase {
    constructor() {
        super();

        this._config;
        this._testSuites = [];
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

exports.ScriptBase = ScriptBase;