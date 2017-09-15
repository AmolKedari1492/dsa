exports.bucketSorting = function (arr) {
 var size = arr.length;
 var sortedList = [];
 var bucketObj = {}, temp;
 for(var i = 0; i < size; i++) {
   temp = Math.floor(arr[i]*10);
   if(bucketObj[temp]) {
     bucketObj[temp].push(arr[i])
   } else {
     bucketObj[temp] = [arr[i]];
   }
 }
 var customBucket;
 for(var bucket in bucketObj) {
   customBucket =  bucketObj[bucket];
   for(var i = 0; i < customBucket.length - 1; i++) {
     if(customBucket[i] > customBucket[i+1]) {
       temp = customBucket[i];
       customBucket[i] = customBucket[i + 1];
       customBucket[i + 1] = temp;
     }
   }
   sortedList = sortedList.concat(customBucket);
 }
 console.log('Sorted List : ', sortedList);

}

var bucketSortingFn = require('./bucket-sorting').bucketSorting;
var unsortedList = [0.897, 0.565, 0.677, 0.656, 0.1234, 0.665, 0.3434];
console.log('Unsorted List : ', unsortedList);
bucketSortingFn(unsortedList);
