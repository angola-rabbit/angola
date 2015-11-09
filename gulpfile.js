/**
 * @author    akai-inu <akai_inu@live.jp>
 * @copyright angola-rabbit
 */

var gulp = require('gulp');
var gls = require('gulp-live-server');

var BOWER_DIR = __dirname + '/bower_components';
var DIST_DIR = __dirname + '/public';

gulp.task('default', ['copy-bower'], function () {
});

gulp.task('copy-bower', [], function () {
  var bowerFiles = [
    ['/jquery/dist/*', '/vendor/jquery/'],
    ['/bootstrap/dist/css/bootstrap.*', '/vendor/bootstrap/css'],
    ['/bootstrap/dist/fonts/*', '/vendor/bootstrap/fonts'],
    ['/bootstrap/dist/js/bootstrap.min.js', '/vendor/bootstrap/js'],
  ];

  for (i in bowerFiles) {
    gulp.src(BOWER_DIR + bowerFiles[i][0])
    .pipe(gulp.dest(DIST_DIR + bowerFiles[i][1]))
  }
});

gulp.task('serve', ['copy-bower'], function () {
  var server = gls('bin/www', {env: {NODE_ENV: 'development'}});
  server.start();

  // views か routes が更新されたら通知
  gulp.watch([__dirname + '/views/**/.jade', __dirname + '/routes/**/*.js'], function (file) {
    server.notify.apply(server, [file]);
  });

  // コア更新でリスタート
  gulp.watch(__dirname + '/app.js', function (file) {
    server.start();
  });
});
