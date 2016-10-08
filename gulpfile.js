var gulp = require("gulp");
var mocha = require("gulp-mocha");
var gutil = require("gulp-util");

gulp.task("mocha", ()=>{
    return gulp.src(["test/**/test-*.js"], {read:false})
        .pipe(mocha({reporter:"list"}))
        .on("error", gutil.log);
});

gulp.task("default", ()=>{
    gulp.watch(["test/**/test-*.js"], ["mocha"]);
});