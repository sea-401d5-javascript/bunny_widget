const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('copy', ()=> {
  return gulp.src(['./app/**/*.html','./app/**/*.css'])
  .pipe(gulp.dest('build/'));
});

gulp.task('bundle', ()=> {
  return gulp.src('./app/js/client.js')
  .pipe(webpack({output:{filename: 'bundle.js'}}))
  .pipe(gulp.dest('build/'));
});

gulp.task('bundle:test', ()=> {
  return gulp.src('./test/**/*_test.js')
  .pipe(webpack({
    output: {
      filename: 'bundle_test.js'
    },
    module: {
      loaders: [{
        test: /\.html$/,
        loader: 'html'
      }]
    }
  })).pipe(gulp.dest('./test'));
});

gulp.task('build',['copy', 'bundle']);

gulp.task('default', ['build'], () => {
  console.log('started');
});
