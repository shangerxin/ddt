/**
 * Created by shange on 10/7/2016.
 */

let Engine                = require("./modules/engines/engine").Engine;
let DirectCommunicator    = require("./modules/communicators/directCommunicator").DirectCommunicator;
let SeleniumAgent         = require("./modules/agents/seleniumAgent").SeleniumAgent;
let CONST                 = require("./global/const").CONST;
let HtmlToTestSuiteParser = require("./modules/parsers/html2TestSuitesParser").Html2TestSuitesParser;
let Markdown2HtmlParser   = require("./modules/parsers/markdown2HtmlParser").Markdown2HtmlParser;
let TestObjectService     = require("./services/testObjectService").TestObjectService;
let fs                    = require("fs");
let Natural2StepParser = require("./modules/parsers/natural2StepParser").Natural2StepParser;

function main() {
    let engine            = new Engine();
    let agent             = new SeleniumAgent();
    let communicator      = new DirectCommunicator();
    let commands          = CONST.commands.engine;
    let testObjectService = new TestObjectService();

    let testObjects = testObjectService.getTestObjects("google.com");
    let testSuite;

    let markdownContent = fs.readFileSync("E:\\Notes\\InnovationPresentation\\ddt-demo-markdown.txt", 'utf8');
    let md2htmlParser   = new Markdown2HtmlParser();
    let testDocument    = md2htmlParser.parse(markdownContent);
    fs.writeFileSync("E:\\Notes\\InnovationPresentation\\ddt-demo-markdown.html", testDocument);

    let html2TestSuiteParser = new HtmlToTestSuiteParser(new Natural2StepParser());
    testSuite                     = html2TestSuiteParser.parse(testDocument);

    engine.addCommunicator(communicator);
    agent.addCommunicator(communicator);

    communicator.send(commands.start);
    communicator.send(commands.replay, testSuite, testObjects);
    communicator.send(commands.stop);
}

main();