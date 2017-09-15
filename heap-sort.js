/*
  Set unsorted array into tree
  arrange as max node tree
  push node into sorted list
  swap first and last element and repeat for same
*/

var sortedArr = [];
exports.heapSort = function(unSortedArr) {
  console.log('Sorted : ', sortedArr);
  console.log('Unsorted : ', unSortedArr);
  var leftChildAt, rightChildAt, temp;
  for(var i = 0; i < unSortedArr.length; i++) {
    leftChildAt = ( 2 * i ) + 1;
    rightChildAt = ( 2 * i ) + 2;
    if(unSortedArr[leftChildAt] && unSortedArr[leftChildAt] > unSortedArr[i]) {
      temp = unSortedArr[i];
      unSortedArr[i] = unSortedArr[leftChildAt];
      unSortedArr[leftChildAt] = temp;
    }
    if(unSortedArr[rightChildAt] && unSortedArr[rightChildAt] > unSortedArr[i]) {
      temp = unSortedArr[i];
      unSortedArr[i] = unSortedArr[rightChildAt];
      unSortedArr[rightChildAt] = temp;
    }
    console.log('Sorted again : ', unSortedArr);
    if(i == unSortedArr.length - 1) {
      sortedArr.unshift(unSortedArr[0]);
      unSortedArr[0] = unSortedArr[unSortedArr.length - 1];
      unSortedArr.pop();
      heapSortFn(unSortedArr);
    }
  }
}
var heapSortFn = require('./heap-sort').heapSort;
var unSortedArr = [4, 10, 3, 5, 1];
console.log('Original Array : ', unSortedArr);
heapSortFn(unSortedArr);
