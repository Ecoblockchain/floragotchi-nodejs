var checkEnvirounment = require('./checkEnvirounment');
var displayState = require('./displayState');

function main() {
  var env = checkEnvirounment();
  displayState(env);
}

main();
setInterval(main, 1000);
