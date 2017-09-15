/*
Set a pivot element
using this pivot element split into two equal part
lower in first split and higher in second split
concat returned array
*/
exports.quickSort = function(arr, isFirst) {
  if(arr.length < 2) {
    return arr;
  }
  var sortedArr = [];
  var arr1 = [];
  var arr2 = [];
  var mid = Math.floor(arr.length / 2);
  if(arr.length > 1) {
    for(var i = 0; i < arr.length; i++) {
      if(isFirst) {
        if(arr[i] < arr[mid]) {
          arr1.push(arr[i]);
        } else {
          arr2.push(arr[i]);
        }
      } else {
        if(arr[i] <= arr[mid]) {
          arr1.push(arr[i]);
        } else {
          arr2.push(arr[i]);
        }
      }
    }
    console.log('Split : ', arr1, arr2);
    arr1 = quickSortFn(arr1, true);
    arr2 = quickSortFn(arr2,false);
    console.log('Merge ', arr1.concat(arr2));
    return arr1.concat(arr2);
  }
}
var quickSortFn = require('./quick-sort').quickSort;
var nonSortingArray = [5, 3, 4, 1, 2];
var nonSortingArray = [5, 10, 4, 3, 2, 1];
console.log(nonSortingArray);
quickSortFn(nonSortingArray);
