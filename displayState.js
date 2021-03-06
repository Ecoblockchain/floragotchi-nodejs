var Led = require('./led');

var state = {
  red: new Led(5),
  green: new Led(6)
};

function displayState(env) {
  console.log("displayState: " + JSON.stringify(env));

  if (env.isGood) {
    state.red.off()
    state.green.on()
  } else {
    state.red.on()
    state.green.off()
  }
}

module.exports = displayState;
