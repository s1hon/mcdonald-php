var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('server', function() {
	// Start the server at the beginning of the task 

    // Restart the server when file changes    
    gulp.watch(['./scss/*.scss'],function(event){
    	gulp.run('styles');
    });

});

gulp.task('styles', function(){
	return sass('./scss/' , {lineNumbers: true,style: 'expanded'})
		.on('error', function (err) {
	      console.error('Error', err.message);
	   	})
	    .pipe(autoprefixer('last 2 version'))
		// .pipe(minifyCSS())
		.pipe(gulp.dest('./css/'));
});

gulp.task('default', ['styles','server']);