'use strict'
module.exports = function () {
	$.gulp.task('pug',function () {
		return $.gulp.src('src/pug/pages/*.pug')
			.pipe($.gp.pug ({ pretty:true }))
			.on('error', $.gp.notify.onError(function (error) {
				return {
					title: 'Pug',
					message: error.message
				}
			}))
			.pipe($.gp.notify('Pug convert succesfully'))
			.pipe($.gulp.dest('build'))
			.on('end',$.bs.reload);
	});
}
