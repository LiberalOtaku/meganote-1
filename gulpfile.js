(function() {
  'use strict';

  var gulp = require('gulp');
  var order = require('gulp-order');
  var concat = require('gulp-concat');
  var plumber = require('gulp-plumber');
  var sourcemaps = require('gulp-sourcemaps');
  var babel = require('gulp-babel');
  var connect = require('gulp-connect');

  gulp.task('bundle', bundle);
  gulp.task('start-web-server', startWebServer);
  gulp.task('watch', watch);
  gulp.task('default', ['bundle', 'start-web-server', 'watch']);

  ////////////////////

  var jsFiles = [
    'app/**/*.js',
    '!app/bower_components/**/*',
    '!app/content/bundle.js',
  ];

  function bundle() {
    return gulp.src(jsFiles)
      // order JS files by module
      .pipe(order([
        'app/app.module.js',
        'app/**/*.module.js',
        'app/**/*.js',
      ], { base: './' }))

      // restart gulp on error
      .pipe(plumber())

      // let sourcemaps watch this pipeline
      .pipe(sourcemaps.init())

      // transpile into ES5 for browsers
      .pipe(babel({
        presets: ['es2015']
      }))

      // Concatenate all JS files
      .pipe(concat('bundle.js'))

      // emit the .map file for debugging
      .pipe(sourcemaps.write('.'))

      .pipe(gulp.dest('app/content'));
  }

  function startWebServer() {
    connect.server({
      root: 'app',
      port: 8000,
    });
  }

  function watch() {
    gulp.watch('app/**/*', ['bundle']);
  }
})();
