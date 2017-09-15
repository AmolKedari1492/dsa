/*

Merge Sort
 Each time split array into two equal/enqual half
 when array splits to single element then sort adjacent split and return
 Use recursion
*/


exports.mergeSort = function(arr) {
  function sliceFn(arr, startInd, size) {
    var tempArr = [];
    for(var i = 0, j = startInd; i < size; i++, j++) {
      if(arr[j]) {
        tempArr[i] = arr[j];
      }
    }
    return tempArr;
  }

  function insertAt(arr, ind, elem) {
    var tempArr = [];
    for(var i = 0, j = 0; i < arr.length + 1; i++) {
      if(i == ind) {
        tempArr[i] = elem;
      } else {
        tempArr[i] = arr[j];
        j++;
      }
    }
    return tempArr;
  }
  var size = arr.length;
  if(size == 1) {
    return arr;
  }
  var splitArrSize = Math.ceil(size/2);
  // var split1 = arr.slice(0, splitArrSize);
  // var split2 = arr.slice(splitArrSize);
  var splitArr1 = sliceFn(arr, 0, splitArrSize);
  var splitArr2 = sliceFn(arr, splitArrSize, splitArrSize);
  console.log('Split : ', splitArr1, splitArr2);
  splitArr1 = mergeSortFn(splitArr1);
  splitArr2 = mergeSortFn(splitArr2);
  console.log('Split : ', splitArr1, splitArr2);
  var mergeArr = [];
  if(splitArr1) {
    for(var i = 0; i < splitArr1.length; i++) {
      mergeArr[i] = splitArr1[i];
    }
    if(splitArr2) {
      var min;
      for(var i = 0; i < splitArr2.length; i++) {
        min = splitArr2[i];
        for(var j = 0; j < mergeArr.length; j++) {
          if(min < mergeArr[j]) {
            mergeArr = insertAt(mergeArr, j, min);
            break;
          } else if(i == splitArr2.length - 1 && mergeArr.length == 1) {
            mergeArr.push(min);
            break;
          }
        }
      }
    }
  } else {
    mergeArr = splitArr2;
  }
  console.log('Merged  : ', mergeArr);
  return mergeArr;
}
var mergeSortFn = require('./merge-sort').mergeSort;
var nonSortingArray = [5, 3, 4, 1, 2];
var nonSortingArray = [5, 10, 4, 3, 2, 1];
console.log("Original Array", nonSortingArray);
mergeSortFn(nonSortingArray);
