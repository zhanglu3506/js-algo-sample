function mergeSort(array) {
  // corner case handling
  if(array == null || array.length <= 1){
    return array;
  }
  // sort and return.
  _mergeSort(array, 0, array.length-1);
  return array;
}
// hepler function for mergeSort.
function _mergeSort(array, left, right){
  // base case return, when there is only one element.
  if(left >= right) {
    return;
  }
  // found the mid index of the array. remember to parse it as int.
  var mid = parseInt(left + (right - left)/2);
  _mergeSort(array, left, mid);  // sort left part of Array
  _mergeSort(array, mid+1, right); // sort right part of Array

  // start from here, we merge the left and right sorted array.
  var k = left;
  var i = left;
  var j = mid + 1;
  var helperArray = new Array(array.length);
  for(var n = left; n <= right; n++) {
    helperArray[n] = array[n];
  }
  while( i <= mid && j <= right){
    if(helperArray[i] <= helperArray[j]){
      array[k] = helperArray[i];
      i++;
    } else {
      array[k] = helperArray[j];
      j++;
    }
    k++;
  }
  while(i <= left) {
    array[k] = helperArray[i];
    i++;
    k++;
  }
}
// test case;
var a = [1, 5, 2, 6];
var b = mergeSort(a);
console.log(b);
