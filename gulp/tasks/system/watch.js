var reload = $.browserSync.reload;

gulp.task('watch', function(callback) {
  // js
  gulp.watch(config.js.src, ['require', 'uglifyJs']);

  // browser sync
  gulp.watch(config.markup.src).on('change', reload);
  gulp.watch(config.js.dest + '/**/*.js').on('change', reload);
});
