var gulp = require("gulp");
var webpack = require("webpack");
var wabpackConfig = require("./webpack.config.js");

gulp.task("webpack", function () {

    var myConfig = Object.create(wabpackConfig);
    webpack(
        myConfig,
        function (err, stats) {
            callback();
        }
    );
});

gulp.task('default', function () {

    gulp.watch(['./**', '!./node_modules'], ['webpack'], function () {
        console.log("ok");
    });

});