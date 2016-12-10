var mraa = require('mraa');

var Led = function(pin){
  var led = new mraa.Gpio(pin);
  led.dir(mraa.DIR_OUT);

  this.on = () => led.write(1);

  this.off = () => led.write(0);
}

module.exports = Led;
