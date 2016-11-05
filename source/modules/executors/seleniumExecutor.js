/**
 * Created by shange on 10/31/2016.
 */
//var net = require("net");
//var process = require("process");

//var serverPort = process.argv[2];
//
//var client = net.connect({port:process.argv[2]}, ()=>{
//
//});
//
//client.on('data', (data)=>{
//    let step = JSON.stringify(data.toString());
//
//
//});

//process.env.PATH += "E:\\Project\\document_driven_test\\environments\\webdrivers";

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('HPE');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('HPE - Google Search'), 1000);

