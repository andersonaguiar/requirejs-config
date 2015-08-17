gulp.task('uglifyJs', function() {
  return gulp.src(config.js.dest)
    .pipe($.uglify({ outSourceMap: true }))
    .pipe(gulp.dest(config.js.dest))
    .pipe($.size())
});
