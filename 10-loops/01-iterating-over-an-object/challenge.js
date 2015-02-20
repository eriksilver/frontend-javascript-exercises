module.exports.getKeys = function(inputObject) {
  // var keyArray = Object.keys(inputObject);
  // return keyArray;

var valuesArray = [ ];
  for (var prop in inputObject) {
    valuesArray += prop;
  }
  return valuesArray;  
};

module.exports.getValues = function(inputObject) {
  var valuesArray = [ ];
  for (var prop in inputObject) {
    valuesArray += inputObject[prop];
  }
  return valuesArray;  
};

//STUCK HERE
module.exports.objectToArray = function(inputObject) {
  var newArray =[];
  for( var i in inputObject ) {
    console.log(i);
       newArray.push(i + " is " + inputObject[i]);
    }
  return newArray;

}

  // var newArray = [ ]; 
  // newArray = inputObject.toString();
  //var newArray = inputObject.toString();

  // for (var prop in newArray) {
  //   return prop + "is" + newArray[prop];
  // }
  // for (var j=0; j < newArray.length; j++) {
  //   return j + " is " + newArray[j];
  // } 
// }