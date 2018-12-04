var gulp = require('gulp');
const babel = require('gulp-babel');
var less = require('gulp-less');
var webserver = require('gulp-webserver');

gulp.task('css', function() {
    return gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('build/css'))
});

gulp.task('js', function() {
    gulp.src('src/js/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build/js'))
});

gulp.task('webserver', function() {
    gulp.src('build')
      .pipe(webserver({
        livereload: true,
      }));
  });

gulp.task('build', ['css', 'js']);
gulp.task('server', ['webserver'])