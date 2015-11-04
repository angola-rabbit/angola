gulp = require 'gulp'

BOWER_DIR = __dirname + '/bower_components'
DIST_DIR = __dirname + '/public'

gulp.task 'default', ['copy-bower'], ->

gulp.task 'copy-bower', [], ->
  bowerFiles = [
    ['/jquery/dist/*', '/vendor/jquery/']
    ['/bootstrap/dist/css/bootstrap.*', '/vendor/bootstrap/css']
    ['/bootstrap/dist/fonts/*', '/vendor/bootstrap/fonts']
    ['/bootstrap/dist/js/bootstrap.min.js', '/vendor/bootstrap/js']
  ]

  gulp.src(BOWER_DIR + item[0]).pipe(gulp.dest(DIST_DIR + item[1])) for item in bowerFiles
