var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jsSources = [
        'node_modules/jquery/dist/jquery.min.js',
        'js/main.js',
        'js/!*.js'
    ];

gulp.task('sass', function () {
    return gulp.src('css/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts:dev', function () {
    return gulp.src(jsSources)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch('js/*.js', ['scripts:dev']);
});


gulp.task('default', ['sass', 'watch']);

