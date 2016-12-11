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

    var lcd = new five.LCD({
      controller: "JHD1313M1"
    });

    var onSensorData = function() {
      var light = lightSensor.value;
      var moisture = moistureSensor.value;
      var tempc = thermoSensor.thermometer.celsius;
      var tempf = thermoSensor.thermometer.fahrenheit;
      lcd.cursor(0, 0).print("Moisture: " + moisture);
      lcd.cursor(1, 0).print("Light:" + light + " T:" + tempf);
      if (lightSensor.value > 200
         && moistureSensor.value > 200
         && tempc > 20) {
        redLed.off();
        // Delay to avoid race conditions
        setTimeout(() => greenLed.on(), 200);
      } else {
        greenLed.off();
        // Delay to avoid race conditions
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

    var thermoSensor = new five.Multi({
      controller: "TH02"
    });

    /*
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
  repl: false,
  debug: false
});

new Floragotchi(board);
