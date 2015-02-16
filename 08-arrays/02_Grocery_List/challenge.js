module.exports.addItem = function(endItem, array) {
  if (array!= endItem) {
  array.push(endItem) }
  return array
};

module.exports.reverseSortedList = function(array) {
  array.sort().reverse();
  return array
}