const { src, watch, dest, series, parallel } = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const sass = require('gulp-sass');
 
sass.compiler = require('node-sass');

const paths = {
    pages: ['src/*.html']
};

const copyHTML = () => {
  return src(paths.pages)
        .pipe(dest('dist'));
}

const build = () => {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
      cache: {},
      packageCache: {}
  })
  .plugin(tsify)
  .transform('babelify', {
      presets: ['es2015'],
      extensions: ['.ts']
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./'))
  .pipe(dest('dist'));
}

const compileScss = () => {
  return src('./src/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest('dist'));
}

const watchTS = () => {
  watch(`./src/*.ts`, build)
}

const watchSCSS = () => {
  watch(`./src/styles/*.scss`, compileScss)
}

const watchHTML = () => {
  watch(`./src/*.html`, copyHTML)
}

const watchBuild = series(parallel(copyHTML), compileScss, build, parallel(watchTS, watchHTML, watchSCSS))

exports.default = watchBuild
