'use strict'
module.exports = function () {
	$.gulp.task('img:dev',function () {
		return $.gulp.src('./src/static/img/*.{png,jpg,jpeg,gif}')
			.pipe($.gulp.dest('build/static/img/'));
	});

	$.gulp.task('img:build',function () {
		return $.gulp.src('src/static/img/*.{png,jpg,jpeg,gif}')
			.pipe($.gp.tinypng('C9-NF0kT_jkq7Bd9PR-AcEvG2FoF1J85'))
			.pipe($.gulp.dest('build/static/img/'));
	});
};
