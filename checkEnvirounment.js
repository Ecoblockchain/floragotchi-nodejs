var sensors = require('./sensors');


var board = sensors.initBoard();
var lightSensor = sensors.getAnalogSensor('A0');
var moistureSensor = sensors.getAnalogSensor('A2');
// var tempSensor = sensors.getAnalogSensor('A2');

function checkEnvirounment() {
  var light = lightSensor.value;
  var moisture = moistureSensor.value;
  var isGood = (light > 200 && moisture > 200);

  return {
    "isGood": isGood,
    "light": light,
    "moisture": moisture
    // "temp": tempSensor.value
  };
}

module.exports = checkEnvirounment;
