/*
count no of times each element is repeated
iterate them and push them into sortedlist upto their repeated count
*/
exports.countingSort = function(unSortedList) {
  console.log('Unsorted : ', unSortedList);
  var counter = {};
  var counterIndex = {};
  var sortedList = [];
  var sortedPos = 0;
  var ind = 0;
  for(var i = 0; i < unSortedList.length; i++) {
    counter[unSortedList[i]] = counter[unSortedList[i]] + 1 || 1;
  }
  console.log('Counter : ', counter);
  for(i in counter) {
    if(counter[i] == 1) {
      sortedList[ind] = i * 1;
      ind++;
    } else {
      var conditionUpTo = ind;
      for(var j = ind; j < counter[i] + conditionUpTo; j++, ind++) {
        sortedList[j] = i * 1;
      }
    }
  }
  console.log('Sorted : ', sortedList);
}
var countingSortFn = require('./counting-sort').countingSort;
var unSortedList = [5,4, 4,3,2,2, 1];
var unSortedList = [1, 4, 1, 2, 7, 5, 2];
countingSortFn(unSortedList);
