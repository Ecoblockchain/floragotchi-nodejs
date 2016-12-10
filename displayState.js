var mraa = require('mraa');

function displayState(env) {
  console.log("displayState: " + JSON.stringify(env));
  var redLed = new mraa.Gpio(5);
  var greenLed = new mraa.Gpio(6);
  if (env.isGood) {
    redLed.dir(mraa.DIR_OUT);
    redLed.write(0);

    greenLed.dir(mraa.DIR_OUT);
    greenLed.write(1);
  }
  if (!env.isGood) {
    redLed.dir(mraa.DIR_OUT);
    redLed.write(1);

    greenLed.dir(mraa.DIR_OUT);
    greenLed.write(0);
  }
}

module.exports = displayState;
