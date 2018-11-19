// Given two integer arrays A1 and A2, sort A1 in such a way that the relative order among the elements will be same as those are in A2.

// For the elements that are not in A2, append them in the right end of the A1 in an ascending order.

// Assumptions:

// A1 and A2 are both not null.
// There are no duplicate elements in A2.
// Examples:

// A1 = {2, 1, 2, 5, 7, 1, 9, 3}, A2 = {2, 1, 3}, A1 is sorted to {2, 2, 1, 1, 3, 5, 7, 9}

function sortA1ByA2(array1, array2) {
  var map = {};
  for(let i =0; i< array1.length; i++){
    map[array1[i]] = array2.indexOf(array1[i]) == -1 ? array2.length + i : array2.indexOf(array1[i]);
  }
  array1.sort(function(a, b) {
    if(map[a] < map[b]){
      return -1;
    }
    if(map[a] > map[b]){
      return 1;
    }
    return 0;
  });
}

var a1 = [2, 1, 2, 5, 7, 1, 9, 3];
var a2 = [2, 1, 3];
sortA1ByA2(a1, a2);


// Given an array of integers, move all the 0s to the right end of the array.

// The relative order of the elements in the original array does not need to be maintained.

// Assumptions:

// The given array is not null.
// Examples:

// {1} --> {1}
// {1, 0, 3, 0, 1} --> {1, 3, 1, 0, 0} or {1, 1, 3, 0, 0} or {3, 1, 1, 0, 0}
function moveZero(array) {
  if(array == null || array == undefined || array.length <= 1){
    return array;
  }
  let i = 0;
  let j = array.length - 1;
  while(i <= j) {
    if(array[i] === 0) {
      _swap(array, i, j);
      j--;
    } else {
      i++;
    }
  }
  return array;
}
function _swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

var a3 = [1, 0, 3, 0, 1];
moveZero(a3);