var tslint = require("gulp-tslint"),
    gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    tsProject = tsc.createProject('tsconfig.json'),
    nodemon = require('gulp-nodemon');
sourcemaps = require("gulp-sourcemaps");

del = require('del');
var gulpSequence = require('gulp-sequence')

const TYPE_SCRIPT_FILES = ["./**/*.ts"];
//const LIBRARY_TYPE_SCRIPT_DEFINITION = './typings/globals/**/*.ts';

gulp.task('clean:out', function () {
    return del([
        'out/**/*'
    ]);
});

gulp.task("copy-files", function () {
    gulp.src('./email-templates/**/*')
        .pipe(gulp.dest('./out/services/email-templates'));

    //gulp.src('./node_modules/**/*')
    //    .pipe(gulp.dest('./out/node_modules/'));

    gulp.src('./.env.*')
        .pipe(gulp.dest('./out/'));
});


gulp.task('compile-ts', function () {

    return tsProject.src()
        .pipe(tsProject())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("out"))
});

gulp.task('default', gulpSequence('clean:out', 'compile-ts', 'copy-files'));