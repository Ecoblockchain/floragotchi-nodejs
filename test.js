var mraa = require('mraa');
var led = new mraa.Gpio(6);
led.dir(mraa.DIR_OUT);

// Light toggle example
// var toggle = false;
// setInterval(function(){
//   toggle = !toggle;
//   led.write(toggle?1:0); 
// }, 1000);

var moistureSensor = new mraa.Aio(0);
setInterval(function(){
  var moistureValue = moistureSensor.read();
  console.log("Moisture Value ", moistureValue);
  if(moistureValue > 200){
    led.write(1); 
  }else{
    led.write(0); 
  }
}, 1000);