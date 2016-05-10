var gulp = require('gulp');
var styl = require('gulp-styl'); 
var imagemin = require('gulp-imagemin'); 
var uglify = require('gulp-uglify');
var concat = require('gulp-concat'); 

gulp.task('script', function(){
    gulp.src(['js/src/*.js'])
        .pipe(concat('main.min.js'))
		.pipe(uglify())
        .pipe(gulp.dest('js/dist'))
})		

gulp.task('styles', function(){		
	gulp.src(['css/src/*.css'])
		.pipe(styl({compress : true}))
		.pipe(concat('main.min.css'))
        .pipe(gulp.dest('css/dist'))	
})		

gulp.task('image', function(){			
	gulp.src(['img/src/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('./img/dist'))
})		

gulp.task('default', function(){
  gulp.run('script', 'styles', 'image');

  gulp.watch("js/src/*.js", function(event){
    gulp.run('script');
  })
  
  gulp.watch("css/src/*.css", function(event){
    gulp.run('styles');
  })
  
  gulp.watch("img/src/*", function(event){
    gulp.run('image');
  })
});
