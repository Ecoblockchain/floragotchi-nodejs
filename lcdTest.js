var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
  io: new Edison()
});

board.on("ready", function() {

  var lcd = new five.LCD({
    controller: "JHD1313M3"
  });

  lcd.useChar("TEST");

  lcd.cursor(0, 0).print("hello :heart:");

  lcd.blink();

  lcd.cursor(1, 0).print("Blinking? ");
});