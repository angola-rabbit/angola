/**
 * @author    akai-inu <akai_inu@live.jp>
 * @copyright angola-rabbit
 */

var fs = require('fs');

/**
 * ログを検索するクラス
 */

/**
 * コンストラクタ
 */
var LogSearcher = function () {
};

/**
 * 検索を実行する
 *
 * @param string logFile ログファイル名
 * @param RegExp regexp  検索正規表現
 * @return
 */
LogSearcher.prototype.exec = function (logFile, regexp, done) {
};

module.exports = LogSearcher;
