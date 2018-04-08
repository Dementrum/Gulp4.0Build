module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./src/static/img/**/*.{png,jpg,jpeg,gif}')
            .pipe($.gulp.dest('./build/static/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./src/static/img/**/*.{png,jpg,jpeg,gif}')
            .pipe($.gp.tinypng('180ubdQBU9etKEwdqq4XKuL5aLEBTO-N'))
            .pipe($.gulp.dest('./build/static/img/'));
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./src/static/img/general/*.svg')
            .pipe($.gulp.dest('./build/static/img/general/'));
    });
};
