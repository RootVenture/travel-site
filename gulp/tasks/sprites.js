var gulp = require("gulp"),
  svgSprite = require("gulp-svg-sprite");

var config = {
  mode: {
    css: {
      // options for the svg package to create our css
      render: {
        css: {
          template: "./gulp/templates/sprite.css"
        }
      }
    }
  }
};

gulp.task("createSprite", function() {
  // gulp src always needs to return something
  return gulp
    .src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("./app/temp/sprite/"));
});
