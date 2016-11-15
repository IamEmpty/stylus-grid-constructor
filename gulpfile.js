const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')();

const paths = {
  stylus: 'test/**/*.styl',
  stylusWatch: ['src/**/*.styl', 'test/**/*.styl'],
  build: 'build/'
};

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins, paths);
}

// Get one .less file and render
gulp.task('css', getTask('css'));

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.stylusWatch, ['css']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('build', ['css']);
gulp.task('dev', ['build', 'watch']);
gulp.task('default', ['dev']);
