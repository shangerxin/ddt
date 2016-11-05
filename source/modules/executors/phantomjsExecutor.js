/**
 * Created by shange on 11/3/2016.
 */

var page = require('webpage').create();

page.settings.userAgent = 'phantomjs';
console.info('test start');
page.open('http://www.google.com/ncr', function (status) {
    console.info("navigate to google status", status);
    page.evaluate(function () {
        console.info("q element", document.getElementsByName("q"));
        document.getElementsByName("q")[0].value = "HPE";
        document.getElementsByName("btnG")[0].click();
        console.info("go button", document.getElementsByName("btnG")[0]);
        console.info("window location", window.location.href);
        //document.addEventListener("load", function(){
        if (document.title != "HPE - Google Search") {
            throw new Error("Navigate to google search HPE failed!");
        }
        else {
            console.info("Test pass");
        }
        //})
    });
    phantom.exit();
});


//var webdriver = require('selenium-webdriver'),
//    By = webdriver.By,
//    until = webdriver.until;
//
//var driver = new webdriver.Builder()
//    .forBrowser('chrome')
//    .build();
//
//driver.get('http://www.google.com/ncr');
//driver.findElement(By.name('q')).sendKeys('HPE');
//driver.findElement(By.name('btnG')).click();
//driver.wait(until.titleIs('HPE - Google Search'), 1000);
//



