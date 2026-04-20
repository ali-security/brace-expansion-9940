var test = require('tape');
var expand = require('..');

if (!String.prototype.repeat) {
  String.prototype.repeat = function (n) {
    return Array(n + 1).join(this);
  };
}

test('redos', function (t) {
  var str = '{a}' + ','.repeat(100000) + '\0';
  var startTime = Date.now();
  expand(str);
  var endTime = Date.now();
  var timeTaken = endTime - startTime;
  t.ok(timeTaken < 1000, 'Expected time (' + timeTaken + 'ms) to be less than 1000ms');
  t.end();
});
