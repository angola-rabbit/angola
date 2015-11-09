/**
 * @author    akai-inu <akai_inu@live.jp>
 * @copyright angola-rabbit
 */

/**
 * トップページのルーティング実装
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

module.exports = router;
