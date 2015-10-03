'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

var sass = require('gulp-sass');
var dist_dir = 'src/dist/'
var app_dir = 'src/app/';

var jsfiles = app_dir+'*/*.js';

gulp.task('lint', function() {
	gulp.src(jsfiles)
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});
 
gulp.task('dist', function() {
	gulp.src(jsfiles)
	 .pipe(concat('horas.js'))
	 .pipe(rename('horas.min.js'))
	 .pipe(uglify())
	 .pipe(gulp.dest(dist_dir));
});

var style_dir = app_dir + 'style/',
	sass_dir = style_dir + 'sass/',
	sass_file = sass_dir + '*.scss',
	sass_dest = dist_dir;
gulp.task('sass', function(){
	gulp.src(sass_file)
	 .pipe(concat(sass_dir))
	 .pipe(rename('horas.min.css'))
	 .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	 .pipe(gulp.dest(sass_dest));
});

gulp.task('default', function() {
	gulp.run('lint', 'dist', 'sass');
	gulp.watch(jsfiles, function(evt) {
		gulp.run('lint', 'dist');
	});	
	gulp.watch(sass_file, ['sass']);

}); 