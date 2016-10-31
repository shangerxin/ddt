/**
 * Created by shange on 10/7/2016.
 */

var Engine                 = require("./modules/engines/engine").Engine;
var DirectCommunicator     = require("./modules/communicators/directCommunicator").DirectCommunicator;
var SeleniumAgent          = require("./modules/agents/seleniumAgent").SeleniumAgent;
var CONST                  = require("./global/const").CONST;
var HtmlToTestSchemaParser = require("./modules/parsers/html2TestSchemaParser").HtmlToTestSchemaParser;
var Markdown2HtmlParser    = require("./modules/parsers/markdown2HtmlParser").MarkdownToHtmlParser;

function main() {
    var engine       = new Engine();
    var agent        = new SeleniumAgent();
    var communicator = new DirectCommunicator();
    var commands     = CONST.commands.engine;
    var steps        = {};
    var testObjects;

    engine.addCommunicator(communicator);
    agent.addCommunicator(communicator);

    communicator.send(commands.start);
    communicator.send(commands.replay, steps, testObjects);
    communicator.send(commands.stop);
}

main();