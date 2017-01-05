/**
 * Created by Shang, Erxin (Edwin) on 11/3/2016.
 */
var page = require('webpage').create();


page.onConsoleMessage = function(msg){
    console.log(msg);
};


page.open("file:///F:/test-phantom.html", function(status){
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        if(status == "success"){
            var link = page.evaluate(function(){
                console.info("test start");
                var $x = $("#x");
                console.info("get x");
                var $y = $("#y");
                console.info("get y");
                var $sum = $("#sum");
                console.info("get sum");
                var $output = $("#output");
                console.info("get output");
                $x.prop('value', 5);
                $y.prop('value', 6);
                //$sum.click();
                document.getElementById("sum").click();
                console.info($x.prop('value') + " + " + $y.prop('value') + " = " + $output.text());
                var $a = $("a").first();
                return $a.prop("href");
            });
            page.open(link, function(status){
                if(status == "success") {
                    console.info("navigate to", window.location.href);
                    page.evaluate(function(){
                        console.info("title ", document.title);
                    });
                }
            });
        }
    });
});


