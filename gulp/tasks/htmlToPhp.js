const gulp = require('gulp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const mode = require('gulp-mode')();
const paths = require('../paths');

const htmlToPhp = () => {
    // console.log(paths) 
    return gulp
        .src(paths.src.htmlToPhp)
        .pipe(gulp.dest(paths.build.html))
};

module.exports = htmlToPhp;