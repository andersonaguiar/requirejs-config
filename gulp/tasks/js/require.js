var config      = require('../../config');

gulp.task('require', function() {
  var obj         = {},
      sourceList  = [],
      counter     = 0;

  for (node in config.require.map) {
    obj         = config.require.map[node];
    sourceList  = (typeof(obj.src) == 'string') ?  [obj.src] : obj.src;

      gulp.src(sourceList)
        .pipe($.concat(obj.file))
        .pipe(gulp.dest(config.require.dest))

      counter = counter + sourceList.length;
  }
  $.util.log($.util.colors.green('#########################'));
  $.util.log('Files compiled:', $.util.colors.green(counter), 'files');
  $.util.log($.util.colors.green('#########################'));
});

gulp.task('require:build', ['uglifyJs'], function() {
  var obj         = {},
      sourceList  = [],
      counter     = 0;

  for (node in config.require.map) {
    obj         = config.require.map[node];
    sourceList  = (typeof(obj.src) == 'string') ?  [obj.src] : obj.src;

      gulp.src(sourceList)
        .pipe($.concat(obj.file))
        .pipe($.uglify())
        .pipe(gulp.dest(config.require.dest))

      counter = counter + sourceList.length;
  }
  $.util.log($.util.colors.green('#########################'));
  $.util.log('Files compiled:', $.util.colors.green(counter), 'files');
  $.util.log($.util.colors.green('#########################'));
});

