function selectionSort(array) {
  for(var i = 0; i < array.length; i++){
    var min = i;
    for(var j = i+1; j < array.length; j++){
      if(array[min] > array[j]){
        min = j;
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
var a = [1, 3, 2, 6, 9, 4];
selectionSort(a);