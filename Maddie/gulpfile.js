'use strict';
const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');

const paths = {
  html: __dirname + '/app/**/*.html',
  js: __dirname + '/app/js/client.js'
};

gulp.task('clean', () => {
  return del('./build/**/*');
});

gulp.task('copy', ['clean'], () => {
  return gulp.src(paths.html)
  .pipe(gulp.dest('build/'));
});

gulp.task('bundle', ['clean'], () => {
  return gulp.src(paths.js)
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/'));
});

gulp.task('build', ['bundle', 'clean', 'copy']);
