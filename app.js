/**
 * @author    akai-inu <akai_inu@live.jp>
 * @copyright angola-rabbit
 */

/**
 * Express アプリケーションの実装
 */

var routes = {
  '/': 'index',
  '/search': 'search',
};

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(require('connect-livereload')({port: 35729}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ルーティング
for (var route in routes) {
  app.use(route, require('./routes/' + routes[route]));
}

// 404エラーハンドリング
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  err.message = 'Page Not Found';
  next(err);
});

// エラーハンドリング
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    error: err,
    dev: (app.get('env') === 'development')
  });
});

module.exports = app;
