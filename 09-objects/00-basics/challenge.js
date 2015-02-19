module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = { 
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents,
  }
  return course;
}

module.exports.addProperty = function(object, newProp, newValue) {
 
  if (object.hasOwnProperty(newProp)) {
    return object;
  } else {
     //object.newProp = newValue; not sure why dot syntax didnt work!
     object[newProp] = newValue;
     return object;
  }
}

module.exports.formLetter = function(letter) {
  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender

}

module.exports.canIGet = function(item, money) {
  var itemArray = ["MacBook Air", "MacBook Pro", "Mac Pro", "Apple Sticker"];
  var itemPosition = itemArray.indexOf(item)

  var priceTable = {
    cost: [999, 1299, 2499, 1],
    }
  var test = money >= priceTable.cost[itemPosition]
  return test

};
