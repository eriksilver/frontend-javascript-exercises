module.exports.copy = function(inputObject) {
  var newObject = { };
  for (var i in inputObject) {
    newObject[i] = inputObject[i];
  }
  return newObject;
}

module.exports.extend = function(dest, src) {
  for (var i in src) {
    dest[i] = src[i];
  }
  return dest;
}

//Stuck here
module.exports.hasElems = function(obj,arr) {
  var keys = Object.keys(obj);
  var hasAllElements = true;

  for (i = 0; i < arr.length; i++) {
    if (keys.indexOf(arr[i]) === -1) {
      hasAllElements = false;
    }
  }

  return hasAllElements;


  // var objKeys = [ ];
  // for (var prop in obj) {
  //   objKeys += prop;
  // }

  // var test = (arr === objKeys);
  // return test;
}