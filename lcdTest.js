var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
  io: new Edison()
});

board.on("ready", function() {
  var lcd = require('jsupm_i2clcd');
  var display = new lcd.Jhd1313m1(0, 0x3E, 0x62);
  display.setCursor(1, 1);
  display.write('hi there');
});