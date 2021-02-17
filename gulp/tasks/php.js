const gulp = require('gulp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const mode = require('gulp-mode')();
const paths = require('../paths');

const php = () => {
    // console.log(paths) 
    return gulp
        .src(paths.src.php)
        .pipe(gulp.dest(paths.build.php))
};

module.exports = php;