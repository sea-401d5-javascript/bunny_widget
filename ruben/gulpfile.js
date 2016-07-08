'use strict';
const gulp = require('gulp');
const webpack = require('webpack-stream');

const paths = {
  js: __dirname + '/app/js/**/*.js',
  html: __dirname + '/app/**/*.html',
  css: __dirname + '/app/css/app.css'
};

gulp.task('copy', () => {
  gulp.src([paths.html, paths.css])
    .pipe(gulp.dest('./build'));
});

gulp.task('bundle', () => {
  return gulp.src(__dirname + '/app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('bundle:test', () => {
  return gulp.src('./test/**/*_test.js')
    .pipe(webpack({
      output: {
        filename: 'test_bundle.js'
      },
      module: {
        loaders: [{
          test: /\.html$/,
          loader: 'html'
        }]
      }
    })).pipe(gulp.dest('./test'));
});

gulp.task('watch', () => {
  gulp.watch(paths.html, ['copy']);
  gulp.watch(paths.js, ['bundle']);
  gulp.watch('./app/css/app.css', ['copy']);
  gulp.watch('./test/**/*_test.js', ['bundle:test']);
});

gulp.task('default', ['bundle:test', 'bundle', 'copy']);
