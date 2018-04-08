var moment = require('../lib/moment-with-locales');
var Base64 = require('../lib/js-base64/we-base64');

function formatTime(date, formatType) {
  moment.locale('zh_cn');
  formatType = typeof formatType == 'string' ? formatType : 'YYYY年MM月DD日 ';
  var res = moment(date).format(formatType);
  //console.log(res);
  return res;
}
function fromNow(date) {
  moment.locale('zh_cn');
  return moment(date).fromNow();
}
module.exports = {
  formatTime: formatTime,
  fromNow: fromNow,
  Base64: Base64
}