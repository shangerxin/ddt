/**
 * Created by shange on 10/7/2016.
 */

let Engine                 = require("./modules/engines/engine").Engine;
let DirectCommunicator     = require("./modules/communicators/directCommunicator").DirectCommunicator;
let SeleniumAgent          = require("./modules/agents/seleniumAgent").SeleniumAgent;
let CONST                  = require("./global/const").CONST;
let HtmlToTestSchemaParser = require("./modules/parsers/html2TestSchemaParser").HtmlToTestSchemaParser;
let Markdown2HtmlParser    = require("./modules/parsers/markdown2HtmlParser").MarkdownToHtmlParser;
let TestObjectService = require("./services/testObjectService").TestObjectService;
let fs = require("fs");

function main() {
    let engine       = new Engine();
    let agent        = new SeleniumAgent();
    let communicator = new DirectCommunicator();
    let commands     = CONST.commands.engine;
    let testObjectService = new TestObjectService();

    let testObjects  = testObjectService.getTestObjects("google.com");
    let steps;

    let markdownContent = fs.readFileSync("E:\\Notes\\InnovationPresentation\\ddt-demo-markdown.txt", 'utf8');
    let md2htmlParser = new Markdown2HtmlParser();
    let testDocument = md2htmlParser.parse(markdownContent);
    fs.writeFileSync("E:\\Notes\\InnovationPresentation\\ddt-demo-markdown.html", testDocument);

    let html2TestSchemaParser = new HtmlToTestSchemaParser();
    steps = html2TestSchemaParser.parse(testDocument);

    engine.addCommunicator(communicator);
    agent.addCommunicator(communicator);

    communicator.send(commands.start);
    communicator.send(commands.replay, steps, testObjects);
    communicator.send(commands.stop);
}

main();