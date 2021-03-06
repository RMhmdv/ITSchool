module.exports = {
    src: {
        html: 'src/*.html',
        css: 'src/sass/main.scss',
        js: 'src/js/**/*.js',
        images: 'src/images/**/*',
        fonts: 'src/fonts/**/*',
        php: 'src/php/**/*',
        htmlToPhp: 'src/*.php',
    },
    watch: {
        html: 'src/**/*.html',
        css: 'src/sass/**/*.scss',
        js: 'src/js/**/*.js',
        images: 'src/images/**/*',
        fonts: 'src/fonts/**/*',
        php: 'src/php/**/*',
        htmlToPhp: 'src/*.php',


    },
    build: {
        html: 'build/',
        css: 'build/css',
        js: 'build/js',
        images: 'build/images',
        fonts: 'build/fonts',
        php: 'build/php',
    },
    inject: {
        html: 'build/index.php',
        css: 'build/css/**/*.css',
        js: 'build/js/**/*.js',
        php: 'build/php/**/*.php'
    },
    clean: 'build/',
};