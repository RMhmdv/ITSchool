'use strict';

const { series, parallel, watch } = require('gulp');
const requireDir = require('require-dir');
const browserSync = require('browser-sync').create();
const tasks = requireDir('./gulp/tasks', { recurse: true });
const paths = require('./gulp/paths');

const serve = () => {
    return browserSync.init({
        server: 'build',
        notify: false,
        open: false,
        cors: true,
        ui: false,
        logPrefix: 'DevServer',
        host: 'localhost',
        port: process.env.PORT || 1234,
    });
};

const watcher = done => {
    watch(paths.watch.html).on(
        'change',
        series(tasks.html, tasks.inject, browserSync.reload),
    );
    watch(paths.watch.css).on('change', series(tasks.css, browserSync.reload));
    watch(paths.watch.js).on('change', series(tasks.scripts, browserSync.reload));
    watch(paths.watch.php).on('change', series(tasks.php, browserSync.reload));
    watch(paths.watch.htmlToPhp).on('change', series(tasks.htmlToPhp, browserSync.reload));
    watch(paths.watch.images, tasks.images);
    watch(paths.watch.fonts, tasks.fonts);

    done();
};

exports.start = series(
    tasks.clean,
    tasks.images,
    parallel(tasks.css, tasks.fonts, tasks.scripts, tasks.html, tasks.php, tasks.htmlToPhp),
    tasks.inject,
    watcher,
    serve,
);

exports.build = series(
    tasks.clean,
    tasks.images,
    parallel(tasks.css, tasks.fonts, tasks.scripts, tasks.html, tasks.php, tasks.htmlToPhp),
    tasks.inject,
);