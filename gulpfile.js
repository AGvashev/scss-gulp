const {src, dest, series, watch} = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const image = require('gulp-image');
const sync = require('browser-sync').create();

function html() {
    return src('src/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('docs'))
}

function scss() {
    return src('src/scss/**.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(csso())
        .pipe(concat('index.css'))
        .pipe(dest('docs'))
}

function imageMin() {
    return src('src/img/*')
        .pipe(image())
        .pipe(dest('docs/img'))
}

function fonts() {
    return src('src/fonts/*')
        .pipe(dest('docs/fonts'))
}

function jsminify() {
    return src('src/js/**.js')
        .pipe(dest('docs/js'))
}

function clear() {
    return del('docs')
}

function serve() {
    sync.init({
        server: './docs'
    })

    watch('src/**.html', series(html)).on('change', sync.reload)
    watch('src/parts/**.html', series(html)).on('change', sync.reload)
    watch('src/js/**.js', series(jsminify)).on('change', sync.reload)
    watch('src/img/*', series(imageMin)).on('change', sync.reload)
    watch('src/scss/**.scss', series(scss)).on('change', sync.reload)
}

exports.build = series(clear, html, scss);
exports.serve = series(clear, scss, html, imageMin, fonts, jsminify, serve)