'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const clean = require('gulp-clean');

const paths = {
  js: __dirname + '/app/**/*.js',
  html: __dirname + '/app/**/*.html'
  // css: __dirname + '/app/**/*.css'
};

gulp.task('clean', ()=>{
  return gulp.src('./build/*', {read:false})
    .pipe(clean());
});

gulp.task('copy-html', ['clean'], ()=>{
  return gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
});

// gulp.task('copy-css', ['clean'], ()=>{
//   return gulp.src(paths.css)
//     .pipe(gulp.dest('./build'));
// });

gulp.task('bundle', ['clean'], ()=>{
  return gulp.src('./app/js/clent.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
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
    }))
    .pipe(gulp.dest('./test'));
});

gulp.task('watch', ()=>{
  gulp.watch('./app/*', ['build']);
});

gulp.task('build', ['clean', 'copy-html', 'bundle']);

gulp.task('default', ['build']);
