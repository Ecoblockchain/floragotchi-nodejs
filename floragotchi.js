var five = require("johnny-five");
var Edison = require("edison-io");

var Floragotchi = function (board) {

  var state = {};

  board.on("ready", function() {
    console.log("Board is ready");

    var redLed = new five.Led(5);
    var greenLed = new five.Led(6);

    /*
    var thermoSensor = new five.Multi({
      controller: "TH02"
    });

    thermoSensor.on("change", function() {
      console.log("Thermometer");
      console.log("  celsius           : ", this.thermometer.celsius);
      console.log("  fahrenheit        : ", this.thermometer.fahrenheit);
      console.log("  kelvin            : ", this.thermometer.kelvin);
      console.log("--------------------------------------");

      console.log("Hygrometer");
      console.log("  relative humidity : ", this.hygrometer.relativeHumidity);
      console.log("--------------------------------------");
    });
    */

    var lightSensor = new five.Sensor({
      "pin": "A0",
      "freq": 500
    });

    lightSensor.on("change", function() {
      console.log(lightSensor.value);
      if (lightSensor.value > 200) {
        redLed.off();
        greenLed.on();
      } else {
        greenLed.off();
        redLed.on();
      }
    });
  });
}

var board = new five.Board({
  io: new Edison(),
  // repl: false,
  // debug: false
});

new Floragotchi(board);
