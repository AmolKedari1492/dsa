/*
Bubble Sort :  swap adjacent element
Selection Sort: replace most highest with lowest element at each iteration
insertion Sort: find lowest element, insert them at begining and minimise iteration index
*/

#include<iostream>
using namespace std;

void printArray(int arr[], int size ) {
  for(int i = 0; i < size; i++) {
    std::cout << arr[i]<<  " , ";
 }
 std::cout << endl;
}

void insertionSort(int arr[], int size) {
  int min;
  int sortedPosition = 0;
  int foundAt = -1;
  for(int i = 0; i < size; i++) {
    min = arr[i];
    foundAt = i;
    for(int j = i + 1; j < size; j++) {
      if(min > arr[j]) {
        min = arr[j];
        foundAt = j;
      }
    }
    sortedPosition++;
    for(int k = foundAt; k > sortedPosition - 1; k--) {
      arr[k] = arr[k-1];
    }
    arr[sortedPosition - 1] = min;
    printArray(arr, size);
  }
}


void selectionSort(int arr[], int size) {
  int min;
  int replacePos;
  for(int i = 0; i < size; i++) {
    min = arr[i];
    replacePos = i;
    for(int j = i + 1; j < size; j++) {
      if(min > arr[j]) {
        min = arr[j];
        replacePos = j;
      }
    }
    arr[replacePos] = arr[i];
    arr[i] = min;
    std::cout << "After each iteration" << " - ";
    printArray(arr, size);
    std::cout << endl;
  }
}

void bubbleSort(int arr[], int size) {
  int max;
  for(int i = 0; i < size; i++) {
    for(int j = i + 1; j < size; j++) {
      if(arr[i] > arr[j]) {
        max = arr[i];
        arr[i] = arr[j];
        arr[j] = max;
      }
    }
    std::cout << "After each iteration" << " - ";
    printArray(arr, size);
    std::cout << endl;
  }

}

int main() {
 int arr[] = {10, 25, 12, 22,64, 1};
 // int arr[] = {5, 4, 3, 2, 1};
 int size = sizeof(arr)/sizeof(arr[0]);
 int option;
 int max;
 int min;
 int replacePos;
 int counter = 0;
 std::cout <<  "Original Array : ";
 printArray(arr, size);
 std::cout << endl;
 if(option == 1) {
   std::cout << "Using SelectionSort "<< endl;
   selectionSort(arr, size);
 } else {
   std::cout << "Using BubbleSort "<< endl;
   insertionSort(arr, size);
 }
 std::cout <<  "After sorting Array : ";
 printArray(arr, size);
std::cout << endl;
std::cout << "counter : " << counter << endl;
return 0;
}
