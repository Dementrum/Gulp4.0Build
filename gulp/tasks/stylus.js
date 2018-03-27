'use strict';

module.exports = function () {
	$.gulp.task('stylus',function () {
		return $.gulp.src('src/static/stylus/*.styl')
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.stylus({
				'include css':true
			}))
			.pipe($.gp.autoprefixer({
				browsers : [
					'last 10 version',
					'> 1%',
					'ie 8',
					'ie 9',
					'Opera 12.1'
				],

			}))
			.on("error",$.gp.notify.onError({
				message: "Error: <%= error.message %>",
				title: "Style"
			}))
			.pipe($.gp.csso())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('build/static/css'))
			.pipe($.bs.reload({
				stream:true
			}));
	});
}
