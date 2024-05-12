var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var sass = require('gulp-sass')(require('sass'));
var cssbeautify = require('gulp-cssbeautify');
var stripCssComments = require('gulp-strip-css-comments');
var plumber = require('gulp-plumber');
var rigger = require('gulp-rigger');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var svgmin =require('gulp-svgmin');
var webp = require('gulp-webp');
var { series, parallel } = require('gulp');
// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('serve', (cb) =>{

  gulp.src('../src/img/*.svg')
    .pipe(svgmin())
 .pipe(gulp.dest('../assets/img'))

	cb();
});
gulp.task('serve1', (cb) =>{

  gulp.src('../src/img/**')

	.pipe(webp())
	.pipe(gulp.dest('../assets/img'));
	cb();
});

exports.watchers = () => {
	 
	    browserSync.init({
        server: {
           baseDir: __dirname.replace('gulp','')
        }
    });
	
  gulp.watch("../src/css/*.sass", (done) => {
	gulp.src('..//src//css//*.sass')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('../assets/css'))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(cssbeautify())
		.pipe(stripCssComments())
		.pipe(gulp.dest('../assets/css'))
		.pipe(browserSync.reload({stream: true})) 
    done();
  });

  gulp.watch("../*.html").on("change", reload);
  gulp.watch("../assets/css/*.css").on("change", reload);
  gulp.watch("../assets/js/*.js").on("change", reload);
  
  gulp.watch("../src/*.pug", (done) => {
   gulp.src('../src/*.pug')
	.pipe(plumber())
    .pipe(pug({}))
	
    .pipe(gulp.dest('../'));
      done();
  });
  
   gulp.watch("../assets/js/*.js", (done) => {
	   gulp.src(['../src/js/*.js']) 
        .pipe(rigger())
		.pipe(uglify())
        .pipe(gulp.dest('../assets/js'));
    done();
  });
};


gulp.task(`converters`,  gulp.series(`serve`, `serve1`));