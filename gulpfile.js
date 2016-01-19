var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
    minifyCSS = require('gulp-minify-css');
    htmlmin = require('gulp-htmlmin');
    critical = require('critical');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');



gulp.task('imagemin', function() {
     gulp.src('src/img/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img/'));
  gulp.src('src/view/images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/view/images/'));
});



gulp.task('uglifyJavascript', function(){
     gulp.src('src/js/*.js').pipe(uglify()).pipe(gulp.dest('dist/js/'));
     gulp.src('src/views/js/*.js').pipe(uglify()).pipe(gulp.dest('dist/views/js/'));

});




gulp.task('minifyCssStyle', function(){
    gulp.src('src/css/*.css').pipe(minifyCSS()).pipe(gulp.dest('dist/css/'));
    gulp.src('src/views/css/*.css').pipe(minifyCSS()).pipe(gulp.dest('dist/views/css'));

});



gulp.task('content', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('critical', function (cb) {
  critical.generate({
    inline: true,
    base: './',
    src: 'src/index.html',
    css: ['src/css/style.css'],
    dest: 'dist/index.html',
    minify: true,
    extract: true
  });
  critical.generate({
    inline: true,
    base: './',
    src: 'src/views/pizza.html',
    css: ['src/views/css/style.css'],
    dest: 'dist/views/pizza.html',
    minify: true,
    extract: true
  });
});


gulp.task('watch', function(){

    gulp.watch('src/js/*.js', ['uglifyJavascript']);
    gulp.watch('src/views/js/*.js', ['uglifyJavascript']);
    gulp.watch('src/css/*.css', ['minifyCssStyle']);
    gulp.watch('src/views/css/*.css', ['minifyCssStyle']);
    gulp.watch('src/index.html', ['critical']);
    gulp.watch('src/views/pizza.html', ['critical']);
});

gulp.task('default', ['imagemin','uglifyJavascript', 'minifyCssStyle', 'critical',  'watch']);
