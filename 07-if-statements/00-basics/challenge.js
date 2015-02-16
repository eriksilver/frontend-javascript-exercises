module.exports.favoriteNumber = function(favNum, guess) { 
  if (guess > favNum) {
    return "Too high";
  }
  else if (guess < favNum) {
    return "Too low";
  }
  else if (guess == favNum) {
    return "You got it!"
  }
};

module.exports.checkLock = function(num1, num2, num3, num4) {
  if ((num1 == 3 || num1 == 5 || num1 == 7)) {
    test = 1
  }
  if (num2 == 2) {
    test += 1;
  }
  if (5 <= num3 && num3 <= 100) {
    test += 1;
  }
  if (num4 < 9 || num4 > 20) {
    test += 1;
  } 
  if (test == 4) {
    return "correct"
  }
  else {
    return "incorrect"
  }
};

module.exports.canIGet = function(item, money) {
  if (item == "MacBook Air" && money >= 999) {
    return true }
  else if (item == "MacBook Pro" && money >= 1299) {
    return true }
  else if (item == "Mac Pro" && money >= 2499) {
    return true }
  else if (item == "Apple Sticker" && money >= 1) {
    return true }
  else {
    return false }

};