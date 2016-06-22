'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');

var files = ['*.js', './app/*.js', './app/js/*.js', './app/js/bunny/*.js', './app/js/bunny/controllers/*.js', './app/js/bunny/directives/*.js'];

const paths = {
  js:__dirname + '/app/js/**/**/*.js',
  html:__dirname + '/app/index.html'
};

gulp.task('lint', () => {
  return gulp.src(files)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('copy', () => {
  return gulp.src(paths.html)
  .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('bundle', () => {
  return gulp.src('./app/js/client.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('default', ['bundle', 'copy']);

gulp.task('watch', () => {
  gulp.watch(paths.js, ['lint', 'bundle']);
  gulp.watch(paths.html, ['copy']);
});
