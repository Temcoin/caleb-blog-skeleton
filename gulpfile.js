var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('serve', function() {
    browserSync.init({
        server: {
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });
    gulp.watch("src/images/*.jpeg").on('change', browserSync.reload);
    gulp.watch("src/images/*.png").on('change', browserSync.reload);
    gulp.watch("src/images/*.jpg").on('change', browserSync.reload);
    gulp.watch("src/styles/*.css").on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});
gulp.task('s', ['serve']);
gulp.task('default', ['serve']);
