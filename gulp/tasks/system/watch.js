var reload = $.browserSync.reload;

gulp.task('watch', function(callback) {
  // sass|stylus
  gulp.watch(config.preprocessor.src, [config.preprocessor.choice]);

  // js
  gulp.watch(config.js.src, ['require', 'copy-assets']);

  // markup
  gulp.watch(config.markup.src, ['copy-markup']);

  // browser sync
  gulp.watch(config.markup.dest + '/**/*.html').on('change', reload);
  gulp.watch(config.preprocessor.dest + '/**/*.css').on('change', reload);
  gulp.watch(config.js.dest + '/**/*.js').on('change', reload);
});
