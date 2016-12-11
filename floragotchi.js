var five = require("johnny-five");
var Edison = require("edison-io");

var Floragotchi = function (board) {

  board.on("ready", function() {
    console.log("Board is ready");

    var redLed = new five.Led({
      id: "red",
      pin: 5
    });

    var greenLed = new five.Led({
      id: "green",
      pin: 6
    });

    var onSensorData = function() {
      console.log("light:" + lightSensor.value);
      console.log("moisture:" + moistureSensor.value);
      if (lightSensor.value > 200 && moistureSensor.value > 200) {
        redLed.off();
        // redLed.stop().off();
        setTimeout(() => greenLed.on(), 200);
      } else {
        greenLed.off();
        // greenLed.stop().off();
        setTimeout(() => redLed.on(), 200);
      }
    }

    var lightSensor = new five.Sensor({
      "pin": "A0",
      "freq": 500
    });

    lightSensor.on("change", onSensorData);

    var moistureSensor = new five.Sensor({
      "pin": "A2",
      "freq": 500
    });

    moistureSensor.on("change", onSensorData);

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
  });
}

var board = new five.Board({
  io: new Edison(),
  // repl: false,
  // debug: false
});

new Floragotchi(board);
