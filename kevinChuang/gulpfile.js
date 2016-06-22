const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const webpack = require('webpack-stream');

gulp.task('copy', ()=> {
  gulp.src('./app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('bundle', ()=> {
  gulp.src('./app/js/client.js')
  .pipe(webpack({output:{filename: 'bundle.js'}}))
  .pipe(gulp.dest('build/'));
});

gulp.task('build',['copy', 'bundle']);

gulp.task('default', ['build'], () => {
  console.log('started');
});

gulp.task('lint', () => {
  gulp.src('/server.js')
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('test', () => {
  gulp.src('test/*test.js')
  .pipe(mocha());
});

gulp.watch('./**/*.js', ['lint', 'test']);
