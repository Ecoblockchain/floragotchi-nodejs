
var isGood = false;

function checkEnvirounment() {
  isGood = !isGood;
  return {
    "isGood": isGood
  };
}

module.exports = checkEnvirounment;
