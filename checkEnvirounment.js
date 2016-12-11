var sensors = require('./sensors');


var board = sensors.initBoard();
var lightSensor = sensors.getAnalogSensor('A0');
// var tempSensor = sensors. getAnalogSensor('A1');

function checkEnvirounment() {
  var light = lightSensor.value;
  var isGood = (light > 200);

  return {
    "isGood": isGood,
    "light": light,
    // "temp": tempSensor.value
  };
}

module.exports = checkEnvirounment;
