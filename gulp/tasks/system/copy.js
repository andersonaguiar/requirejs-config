gulp.task('copy-img', function() {
  gulp.src([config.images.src])
    .pipe(gulp.dest(config.images.dest));
});

gulp.task('copy-markup', function() {
  gulp.src([config.markup.src])
    .pipe(gulp.dest(config.markup.dest));
});

gulp.task('copy-assets', ['copy-img', 'copy-markup']);
