/*  bouble sort
* compare two element, if a > b, swap position. 
* time: O(n^2) n^2 comparisons + n^2 swap. 
*/ space: O(1)
function boubleSort(array){
    var remain = array.length;
    for(var i = 0; i < array.length; i++){
        var j = 0;
        while(j < remain){
            if(array[j] > array[j + 1]){
                _swap(j, j+1, array);
            }
            j++;
        }
        ramain--;
    }
}
// selection sort
// found the smallest element in remainning unsorted array,
// and put the smallest element in sorted left.
function selectionSort(array){

}

// swap two element in one array.
function _swap(i, j, array){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}