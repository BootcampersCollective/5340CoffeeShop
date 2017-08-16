let gulp = require('gulp');
let del = require('del');
let gutil = require('gulp-util');
let babel = require('gulp-babel');
let concat = require('gulp-concat');
let ngAnnotate = require('gulp-ng-annotate');
let uglify = require('gulp-uglify');
let sourceMaps = require('gulp-sourcemaps');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let livereload = require('gulp-livereload');
let debug = require('gulp-debug');

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
const SERVER_SCRIPTS_PATH = 'server/**/*.js';
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
		.pipe(livereload());
});

gulp.task('copyFonts', function () {
	console.log('---Starting Copy Fonts task---');
	return gulp.src([FONT_PATH])
		.pipe(gulp.dest('public/fonts'))
		.pipe(livereload());
});

// Index
gulp.task('copyIndex', function () {
	console.log('---Starting Copy Index task---');
	return gulp.src([INDEX_PATH])
		.pipe(gulp.dest('public'))
		.pipe(livereload());
});

// Styles
gulp.task('styles', function () {
	console.log('---Starting Styles task---');
	return gulp.src('client/sass/style.scss')
		.pipe(sourceMaps.init())
		.pipe(autoprefixer())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('public/styles'))
		.pipe(livereload());
});

// Vendor Scripts
gulp.task('vendorScripts', function () {
	console.log('---Starting Vendor Scripts task---');
	return gulp.src(VENDOR_SCRIPTS)
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/scripts'));
});

// Client Scripts
gulp.task('clientScripts', function () {
	console.log('---Starting Client Scripts task---');
	return gulp.src(CLIENT_SCRIPTS_PATH)
		.pipe(ngAnnotate())
		.pipe(sourceMaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('angular.bundle.js'))
		.pipe(uglify())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('public/scripts'))
		.pipe(livereload());
});

gulp.task('serverScripts', function() {
	console.log('---Starting Server Scripts task---');
	return gulp.src([SERVER_SCRIPTS_PATH])
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('index.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'))
		.pipe(livereload());
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
	'serverScripts'
], function () {
	console.log('---Starting Default task---');
});

// Watch
gulp.task('watch', ['default'], function () {
	console.log('---Starting Watch task---');
	require('./index.js');
	livereload.listen();
	gulp.watch(INDEX_PATH, ['copyIndex']);
	gulp.watch(IMAGE_PATH, ['copyImage']);
	gulp.watch(CLIENT_SCRIPTS_PATH, ['clientScripts']);
	gulp.watch(STYLE_PATH, ['styles']);
	gulp.watch(SERVER_SCRIPTS_PATH, ['serverScripts']);
});
