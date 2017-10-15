var gulp = require("gulp"),
  svgSprite = require("gulp-svg-sprite"),
  rename = require("gulp-rename"),
  del = require("del"),
  svg2png = require("gulp-svg2png");

var config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      variables: {
        replaceSvgWithPng: function() {
          return function(sprite, render) {
            return render(sprite)
              .split(".svg")
              .join(".png");
          };
        }
      },
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

gulp.task("createPngCopy", ["createSprite"], function() {
  return gulp
    .src("./app/temp/sprite/css/*.svg")
    .pipe(svg2png())
    .pipe(gulp.dest("./app/temp/sprite/css"));
});

gulp.task("createSpriteGraphic", ["createPngCopy"], function() {
  // src will include both svg and png
  return gulp
    .src("./app/temp/sprite/css/**/*.{svg,png}")
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
  "createPngCopy",
  "createSpriteGraphic",
  "copySpriteCSS",
  "endClean"
]);
