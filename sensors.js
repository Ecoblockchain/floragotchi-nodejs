var five = require('johnny-five');
var Edison = require('edison-io');

var board;

function initBoard() {
  board = new five.Board({
    io: new Edison()
  });

  board.on('ready', function() {
    console.log('Board ready.');
  });
}

function getAnalogSensor(pinNum) {
  var newAnalogSensor = new five.Sensor(pinNum);

  return newAnalogSensor;
}


function readSensor(sensor) {
  sensor.on('change', function() {
    return sensor.value;
  });
}

module.exports = {initBoard, getAnalogSensor, readSensor}
