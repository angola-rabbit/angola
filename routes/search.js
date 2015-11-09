/**
 * @author    akai-inu <akai_inu@live.jp>
 * @copyright angola-rabbit
 */

/**
 * 調査検索ページのルーティング実装
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('search', {});
});

module.exports = router;
