const gulp = require('gulp')
const browserSync = require('browser-sync').create()

// Static server
gulp.task('default', function () {
  browserSync.init({
    files: ['*.css', '*.html', '*.js'],
    server: {
      baseDir: './'
    }
  })
})
