gulp.task('copy-js', function() {
  gulp.src([config.js.src])
    .pipe(gulp.dest(config.js.dest));
});
