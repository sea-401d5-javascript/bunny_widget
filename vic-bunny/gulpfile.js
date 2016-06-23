'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');

var files = ['*.js', './app/*.js', './app/js/*.js', './app/js/photoalbum/*.js', './app/js/photoalbum/controllers/*.js', './app/js/photoalbum/directives/*.js'];

const paths = {
  js:__dirname + '/app/js/**/**/*.js',
  html:__dirname + '/app/**/*.html',
  css:__dirname + '/app/css/*.css'
};

gulp.task('lint', () => {
  return gulp.src(files)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('copy-html', () => {
  return gulp.src(paths.html)
  .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('copy-css', () => {
  return gulp.src(paths.css)
  .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('bundle', () => {
  return gulp.src(paths.js)
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('default', ['bundle', 'copy-html', 'copy-css']);

gulp.task('watch', () => {
  gulp.watch(paths.js, ['lint', 'bundle']);
  gulp.watch(paths.html, ['copy-html']);
  gulp.watch(paths.css, ['copy-css']);
});
