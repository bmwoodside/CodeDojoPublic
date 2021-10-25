// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr = [1,5,6,3,2,7,8,9,10,4];


function bubblesort(arr){
    for (var i = 0; i<arr.length; i++){
        for (var j = 0; j<arr.length; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubblesort(arr));

// select sort
function selectsort(arr){
    for (var i = 0; i<arr.length; i++){
        var min = i;
        for (var j = i+1; j<arr.length; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

console.log(selectsort(arr));