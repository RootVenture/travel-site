var gulp = require("gulp"),
  svgSprite = require("gulp-svg-sprite"),
  rename = require("gulp-rename"),
  del = require("del");

var config = {
  mode: {
    css: {
      // updates the filename (removes .css)
      sprite: "sprite.svg",
      // options for the svg package to create our css
      render: {
        css: {
          template: "./gulp/templates/sprite.css"
        }
      }
    }
  }
};

gulp.task("beginClean", function() {
  return del(["./app/temp/sprite", ".app/assets/images/sprites"]);
});

gulp.task("createSprite", ["beginClean"], function() {
  // gulp src always needs to return something
  return gulp
    .src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("./app/temp/sprite/"));
});

gulp.task("createSpriteGraphic", ["createSprite"], function() {
  return gulp
    .src("./app/temp/sprite/css/**/*.svg")
    .pipe(gulp.dest("./app/assets/images/sprites"));
});

// note the dependency to createSprite
gulp.task("copySpriteCSS", ["createSprite"], function() {
  return gulp
    .src("./app/temp/sprite/css/*.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest("./app/assets/styles/modules"));
});

gulp.task("endClean", ["createSpriteGraphic", "copySpriteCSS"], function() {
  return del(["./app/temp/sprite"]);
});

gulp.task("icons", [
  "beginClean",
  "createSprite",
  "createSpriteGraphic",
  "copySpriteCSS",
  "endClean"
]);
