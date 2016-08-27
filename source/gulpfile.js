var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer'); //自动添加 浏览器前缀
var wrap = require('gulp-wrap');          // 使用布局文件 插件
var browserSync = require('browser-sync');  // 页面自动刷新


gulp.task('browser-sync', ['build', 'sass', 'cp'], function() {
    browserSync({
        server: {
            baseDir: '..'
        }
    });
});

gulp.task('cp',function () {
  return gulp.src(['js/main.js','assets/*'], { base: '.' })
         .pipe(gulp.dest('..'))
         .pipe(browserSync.reload({stream:true}));; // 更新浏览器

});

gulp.task('build', function(){
  gulp.src("pages/*.html")
      .pipe(wrap({src:"layout/default.html"}))
      .pipe(gulp.dest(".."));
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}


gulp.task('sass', function(){
  gulp.src('styles/main.scss')
    .pipe(sass()).on('error', handleError) // 使用sass 编译，编译完成后如果报错 怎样
    .pipe(prefix())     // 自动处理浏览器前缀
    .pipe(gulp.dest('../styles')) // 写到外面那一层 的 style里面
    .pipe(browserSync.reload({stream:true}));; // 更新浏览器
});

gulp.task('rebuild', ['build'], function () {
    browserSync.reload();// 更新浏览器
});

gulp.task('watch', function(){
  gulp.watch(['**/*.html'], ['rebuild']); // 只要项目中的 .html 文件改变，就刷新页面
  gulp.watch(['styles/*.scss'], ['sass']); // 只要style/*.sass 文件改变了，就执行 编译成 .css
  gulp.watch(['js/main.js'], ['cp']);  // js/main.js 脚本文件改变了，就让 js/main.js 和 assets文件下面的 重新打包到最外层
})


gulp.task('default', ['browser-sync', 'watch']);
