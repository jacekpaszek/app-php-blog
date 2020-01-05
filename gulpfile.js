var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var pipeline = require('readable-stream').pipeline;

gulp.task('buildcss', function(){
	return pipeline(
		gulp.src('assets-dev/styles/*.css'),
		cleanCSS(),
		gulp.dest('assets-prod/styles')
	);
});

gulp.task('copyimages', function(){
	return pipeline(
	gulp.src('assets-dev/images/*.png'),
	gulp.dest('assets-prod/images')
	);
});