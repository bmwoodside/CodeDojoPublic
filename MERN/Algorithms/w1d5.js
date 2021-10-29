var array1 = [490, -213, 72, 345, 367, 511]

function radix_sort(arr){
    var inc = 1
    for(var idx=0; idx < arr[0].toString().length; idx++){
        for(var i = 1; i < arr.length; i++){
            var temp = arr[i].toString()[(arr[i].toString().length)-inc];
            temp == undefined? temp = 0: null;
            console.log("temp: " +temp)
            var tempFull = arr[i];
            for(var j=i; j > 0 && temp < arr[j-1].toString()[arr[j-1].toString().length-inc]; j--){
                arr[j] = arr[j-1];
            }
            arr[j] = tempFull;
        }
        inc++;
        console.log(inc);
    }
    console.log(arr);
}

radix_sort(array1);