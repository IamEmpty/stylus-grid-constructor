module.exports = (gulp, plugins, paths) => () =>
  gulp.src(paths.stylus)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.stylus())
    .pipe(plugins.sourcemaps.write(''))
    .pipe(gulp.dest(paths.build));
