/**
 * Created by zhaowei on 17/3/1.
 */
var gulp = require("gulp");
var rename = require("gulp-rename");
var fontcss = require("gulp-iconfont-css");
var iconfont = require("gulp-iconfont");

var FOLDER = "tmp/";
var ICONS = ["app/assets/svg/**/*.svg"];


// The development server (the recommended option for development)
gulp.task("default", ['compile-icon'], function () {

});

gulp.task("compile-icon", function () {

    return gulp.src(ICONS, {base: "app"})
        .pipe(fontcss({
            fontName: "icon", path: "app/assets/svg/config/iconfont.css.tpl", targetPath: "icon.css"
        }))
        .pipe(iconfont({fontName: "icon", normalize: true}))
        .pipe(gulp.dest(FOLDER + "assets/fonts"));
});
