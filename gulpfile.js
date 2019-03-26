var gulp = require('gulp'),             // 載入 gulp
    gulpSass = require('gulp-sass');

gulp.task('styles', function () {
    gulp.src('./*.scss')    // 指定要處理的 Scss 檔案目錄
      .pipe(gulpSass())         // 編譯 Scss
      .pipe(gulp.dest('./'));  // 指定編譯後的 css 檔案目錄
});

gulp.task('watch', function () {
  gulp.watch('./*.scss', ['styles']);
});

gulp.task('default', function () {
  console.log('default')
})

// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// exports.default = defaultTask