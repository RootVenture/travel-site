var gulp = require("gulp"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync").create();

gulp.task("watch", function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch("./app/index.html", function() {
    browserSync.reload();
  });

  // task runner to watch changes on any files in our styles folder with the css ini
  // if detected, will cause async update of webpage css 'cssInject'
  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("cssInject");
  });

  watch("./app/assets/scripts/**/*.js", function() {
    gulp.start("scriptsRefresh");
  });
});

// Note: 2nd argument is the 'dependency' that needs to be run prior to the callback function
gulp.task("cssInject", ["styles"], function() {
  return gulp.src("./app/temp/styles/styles.css").pipe(browserSync.stream());
});

// prevent the page refresh until the scripts task is done
gulp.task("scriptsRefresh", ["scripts"], function() {
  browserSync.reload();
});
