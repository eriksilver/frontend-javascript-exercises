//stuck here
module.exports.stream = function(conditionalFn, actionFn) {
  while (conditionalFn() === true) {
    actionFn();
    //conditionalFn();
  }
  }

module.exports.sumNumbers = function(array) {
  var counter = 0;
  var arraySum = 0;
  while (counter < array.length) {
    arraySum += array[counter];
    counter ++;
  }
  return arraySum;
}


