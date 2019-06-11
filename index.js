const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  const winObj = record.find( (recordObj) => recordObj.result == "W");
  if (winObj) {
    return winObj.year;
  } else {
    return winObj;
  }

}
