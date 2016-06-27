'use strict';

const gulp    = require('gulp');
const webpack = require('webpack-stream');

gulp.task('copy', () => {
  gulp.src(__dirname + '/app/**/*.html')
    .pipe(gulp.dest(__dirname + '/build'));
  gulp.src(__dirname + '/app/css/style.css')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('bundle', () => {
  return gulp.src('./app/js/client.js')
    .pipe(webpack({output:{filename: 'bundle.js'}}))
    .pipe(gulp.dest('./build'));
});

gulp.task('bundle:test', () => {
  return gulp.src('./test/**/*-test.js')
    .pipe(webpack({
      output:{
        filename: 'test-bundle.js'
      },
      module: {
        loaders: [{
          test: /\.html$/,
          loader: 'html'
        }]
      }
    })).pipe(gulp.dest('./test'));
});

gulp.task('build', ['copy', 'bundle']);

gulp.task('default', ['build']);
