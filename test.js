var mraa = require('mraa');
var led = new mraa.Gpio(6);
led.dir(mraa.DIR_OUT);
var toggle = false;
setInterval(function(){
  toggle = !toggle;
  led.write(toggle); 
}, 1000);