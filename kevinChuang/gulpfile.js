const gulp = require('gulp');
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
