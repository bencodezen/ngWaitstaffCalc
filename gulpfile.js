// Gulp Packages
var gulp = require('gulp'),
		autoprefixer = require('gulp-autoprefixer');

// Default Task
gulp.task('default', function() {
	gulp.src('style.css')
		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist/'))
});