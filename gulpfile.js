'use strict'

var gulp = require('gulp'),
	gp = require('gulp-load-plugins')();

gulp.task('pug',function () {
	return gulp.src('src/pug/pages/*.pug')
		.pipe(pug({
			pretty:true
		}))
		.pipe(gulp.dest('build'));
});

