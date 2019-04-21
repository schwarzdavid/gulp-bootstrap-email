const gulp = require('gulp');
const gulp_bootstrap_email = require('../index');
const gulp_htmlmin = require('gulp-htmlmin');
const gulp_inline_images = require('gulp-inline-images');
const path = require('path');

const input = path.join(__dirname, './input.html');
const output = path.join(__dirname, './output/');

gulp.task('default', () => {
	return gulp.src(input)
		.pipe(gulp_bootstrap_email())
		.pipe(gulp.dest(output));
});

gulp.task('advanced', () => {
	return gulp.src(input)
		.pipe(gulp_bootstrap_email())
		.pipe(gulp_htmlmin({
			removeComments: true,
			collapseWhitespace: true
		}))
		.pipe(gulp_inline_images())
		.pipe(gulp.dest(output))
});
