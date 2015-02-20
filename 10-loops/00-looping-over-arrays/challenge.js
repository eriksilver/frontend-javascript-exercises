module.exports.sumNumbers = function(array) {
  var sum = 0;
  for (var i=0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

module.exports.splitAndLowerCaseString = function(inputString) {
  var inputLower = inputString.toLowerCase();
  return inputLower.split(",");
}

module.exports.addIndex = function(array) {
  var newObj = String(array); 
  var newArray = newObj.split(',');

  var show = [ ];
  for (var i=0; i < newArray.length; i++) {
    show[i] = i + " is " + newArray[i];
  } 
  return show;
};
