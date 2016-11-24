const gulp = require('gulp'),
  del = require('del'),
  plugins = require('gulp-load-plugins')();

const paths = {
  stylus: 'test/**/*.styl',
  stylusWatch: ['src/**/*.styl', 'test/**/*.styl'],
  build: 'build/'
};

const clean = () => del([ 'build/' ]);
const cleanAll = () => del([ 'build/', 'node_modules/' ]);

function task(name) {
  return require('./gulp-tasks/' + name)(gulp, plugins, paths);
}

exports.clean = clean;
exports.cleanAll = cleanAll;

// Rerun the task when a file changes
function watch() {
  gulp.watch(paths.stylusWatch, task('css'));
}

gulp.task('build', task('css'));

const dev = gulp.parallel(task('css'), watch);
gulp.task('dev', dev);

// The default task (called when you run `gulp` from cli)
gulp.task('default', dev);
