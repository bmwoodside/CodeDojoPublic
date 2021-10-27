// combine arrays
// merge sort


function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++){
        let curVal = arr[i];
        for(let j = i; j > 0; j--){
            if(curVal < arr[j-1]){
                arr[j] = arr[j-1];
                arr[j-1] = curVal;
            }
            else {
                break;
            }
        }
    }
    return arr;
}


function combineSorted(arr1, arr2){
    var merged1 = insertionSort(arr1)
    var merged2 = insertionSort(arr2)
    var counter1 = 0
    var counter2 = 0
    var mergedArr = []
    while(counter1 + counter2 < arr1.length + arr2.length){
        if(arr1[counter1]<=arr2[counter2]){
            mergedArr.push(arr1[counter1])
            counter1++
        }else{
            mergedArr.push(arr2[counter2])
            counter2++
        }
    }
    return mergedArr;
}

function deconstArr(arr1){
    if(arr1.length==1){
        return arr1
    }
    else{
        var temp1 = arr1.slice(0, Math.floor(arr1.length/2))
        var temp2 = arr1.slice(Math.floor(arr1.length/2))        
        return combineSorted(deconstArr(temp1), deconstArr(temp2))
    }
}

arr1 = [1,4,3,2,10,12,5,6,8,15,18];
arr2 = [1,477,3,2,10,345,5,6,677,15,12];

result1 = combineSorted(arr1, arr2);
result2 = deconstArr(arr1);

// console.log(insertionSort(arr1));
// console.log(insertionSort(arr2));
console.log(result1);
console.log(result2);