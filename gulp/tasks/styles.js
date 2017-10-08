var gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssImport = require("postcss-import"),
  mixins = require("postcss-mixins");

gulp.task("styles", function() {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on("error", function(error) {
      // to string makes the error more readable
      console.log(error.toString());
      // for this stream, tell gulp to end the task
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
