// var array1 = [490, -213, 72, 345, 367, 511]

// function radix_sort(arr){
//     var inc = 1
//     for(var idx=0; idx < arr[0].toString().length; idx++){
//         for(var i = 1; i < arr.length; i++){
//             var temp = arr[i].toString()[(arr[i].toString().length)-inc];
//             temp == undefined? temp = 0: null;
//             console.log("temp: " +temp)
//             var tempFull = arr[i];
//             for(var j=i; j > 0 && temp < arr[j-1].toString()[arr[j-1].toString().length-inc]; j--){
//                 arr[j] = arr[j-1];
//             }
//             arr[j] = tempFull;
//         }
//         inc++;
//         console.log(inc);
//     }
//     console.log(arr);
// }

// radix_sort(array1);

// radixSort using countingSort

function radixSort(arr) {
    // using countingSort, sort numbers from least significant digit to most significant digit
    console.log(arr);
    let max = arr[0];
    // let digit = 2;
    for(let num of arr) {
        max = num > max ? num : max;
    }
    let iters = String(max).length;
    for (let i = 1; i <= iters; i++) {
        arr = countingSort(arr, i);
        console.log(arr);
    }

}


// takes an array, puts each element into a sub array, fills a new array with sorted sub array elements
function countingSort(arr, digit) {
    //loop through the array
                //0    1   2  3    4   5  6    7   8  9
    let subarr = [[], [], [], [], [], [], [], [], [], []];
    for(let i = 0; i < arr.length; i++) {
        //place items in sub arrays based on their "ones" digit
        let num = arr[i];
        subarr[Math.floor((num % Math.pow(10, digit))/Math.pow(10, digit-1))].push(num);
    }

    // console.log(subarr);
    
    // take items from sub array and fill sorted array
    let sorted = [];
    for(let group of subarr) {
        for(let num of group) {
            sorted.push(num);
        }
    }
    return sorted;
}


radixSort([234, 267, 163, 666, 357, 91, 121])