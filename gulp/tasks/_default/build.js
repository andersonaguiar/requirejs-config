gulp.task(
  'build',
  [
    'clean',
    'copy-assets',
    'require:build'
  ]
);
