let gulp = require('gulp');
let del = require('del');
let plugins = require('gulp-load-plugins')();
let	browserSync = require('browser-sync').create();
// let gutil = require('gulp-util');
// let babel = require('gulp-babel');
// let concat = require('gulp-concat');
// let ngAnnotate = require('gulp-ng-annotate');
// let uglify = require('gulp-uglify');
// let sourceMaps = require('gulp-sourcemaps');
// let sass = require('gulp-sass');
// let autoprefixer = require('gulp-autoprefixer');
// let livereload = require('gulp-livereload');
// let debug = require('gulp-debug');

// File paths
const VENDOR_SCRIPTS = [
	'node_modules/angular/angular.js',
	'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
	'node_modules/@uirouter/angularjs/release/resolveService.js',
	'node_modules/@uirouter/angularjs/release/stateEvents.js',
	'node_modules/angular-animate/angular-animate.js',
	'node_modules/angular-aria/angular-aria.js',
	'node_modules/angular-sanitize/angular-sanitize.js',
];
const CLIENT_SCRIPTS_PATH = ['client/app/**/*.module.js', 'client/app/**/*.js'];
const STYLE_PATH = 'client/app/**/*.scss';
const IMAGE_PATH = 'assets/images/*';
const FONT_PATH = 'assets/fonts/*';
const INDEX_PATH = 'assets/index.html';

// Images
gulp.task('images', function () {
	console.log('---Starting Images task---');
});

// Assets
gulp.task('copyImages', function () {
	console.log('---Starting Copy Images task---');
	return gulp.src([IMAGE_PATH])
		.pipe(gulp.dest('public/images'))
		.pipe(browserSync.stream());
});

gulp.task('copyFonts', function () {
	console.log('---Starting Copy Fonts task---');
	return gulp.src([FONT_PATH])
		.pipe(gulp.dest('public/fonts'))
		.pipe(browserSync.stream());
});

// Index
gulp.task('copyIndex', function () {
	console.log('---Starting Copy Index task---');
	return gulp.src([INDEX_PATH])
		.pipe(gulp.dest('public'))
		.pipe(browserSync.stream());
});

// Styles
gulp.task('styles', function () {
	console.log('---Starting Styles task---');
	return gulp.src('client/sass/style.scss')
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.autoprefixer())
		.pipe(plugins.sass({
			outputStyle: 'compressed'
		}))
		.pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest('public/styles'))
		.pipe(browserSync.stream());
});

// Vendor Scripts
gulp.task('vendorScripts', function () {
	console.log('---Starting Vendor Scripts task---');
	return gulp.src(VENDOR_SCRIPTS)
		.pipe(plugins.concat('vendor.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('public/scripts'));
});

// Client Scripts
gulp.task('clientScripts', function () {
	console.log('---Starting Client Scripts task---');
	return gulp.src(CLIENT_SCRIPTS_PATH)
		.pipe(plugins.ngAnnotate())
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(plugins.concat('angular.bundle.js'))
		.pipe(plugins.uglify())
		.pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest('public/scripts'))
		.pipe(browserSync.stream());
});

gulp.task('clean', function() {
	return del.sync([
		'public/'
	]);
});

// Default
gulp.task('default', [
	'clean',
	'copyFonts',
	'copyImages',
	'copyIndex',
	'styles',
	'vendorScripts',
	'clientScripts',
	'watch',
	'serve'
], function () {
	console.log('---Starting Default task---');
});

// Watch
gulp.task('watch', function () {
	console.log('---Starting Watch task---');
	gulp.watch([STYLE_PATH], ['styles']);
	gulp.watch(CLIENT_SCRIPTS_PATH, ['clientScripts']);
	gulp.watch([INDEX_PATH], ['copyIndex']);
});

// Serve
gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './server'
		}
	});
	gulp.watch('*.html').on('change', browserSync.reload);
});
