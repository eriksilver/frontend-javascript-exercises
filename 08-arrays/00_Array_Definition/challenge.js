module.exports.newArray = function(one, two, three, four) {
  newArray = [one,two,three,four];
  return newArray;
}

module.exports.firstAndLast = function(array) {
  // array = [one,two,three];
  // newArray[0] = array[0];
  // newArray[array.length-1] = array.length-1;
  return [array[0],array[array.length-1]];
};

