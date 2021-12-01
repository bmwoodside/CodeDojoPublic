// Remove the duplicates from a given array. Do not alter the original array, return a new one! Keep the results 'stable' (retain the original order);

// Example: [2,1,2,1,3,4,4,5] ==> [2,1,3,4,5]

// Slightly more difficult! Work 'in-place' in the given array. For this one you can mess with the order if you need too!


// function removeDuplicates(arr) {
//     // your code here
// }

// console.log(removeDuplicates([1,2,1,3,4,4,5])); // [1,2,3,4,5]
// console.log(removeDuplicates([1,2,1,3,4,4,5,4,4,4,4,6,6,6,6,7,8,7,53])) // [1, 2, 3, 4, 6, 7, 8, 5, 53]

//===========================================
// Kadane's Algo
//===========================================

// Given an array comprised of numbers that  is potentially very long, return the maximum sum of values from a subarray. Any consecutive seuqence of indices in the array is considered a subarray. Create a function that returns the highest sum possible from these subarrays, and prints the subarray.

// [1,2,-4,3,-2,3,-1] return 4 and print [3,-2,3]

// function maxOfSubarray(arr) {
//     let maxSoFar = 0, maxEndingHere = 0;

//     for (i=0; i < arr.length; i++) {
//         maxEndingHere = maxEndingHere + arr[i];
//         if (maxSoFar < maxEndingHere) {
//             maxSoFar = maxEndingHere;
//         }
//         if (maxEndingHere < 0) {
//             maxEndingHere = 0;
//         }
//     }
//     return maxSoFar;
// }

// console.log(maxOfSubarray([1,2,-4,3,-2,3,-1])); //return 4; prints [3,-2,3]

// Remove the duplicates from a given array. Do not alter the original array, return a new one! Keep the results 'stable' (retain the original order);

// Example: [2,1,2,1,3,4,4,5] ==> [2,1,3,4,5]

// Slightly more difficult! Work 'in-place' in the given array. For this one you can mess with the order if you need too!


function removeDuplicates(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i])
        }
    }
    return (newArray);
}

console.log(removeDuplicates([1, 2, 1, 3, 4, 4, 5])); // [1,2,3,4,5]
console.log(removeDuplicates([1, 2, 1, 3, 4, 4, 5, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 7, 53])) // [1, 2, 3, 4, 6, 7, 8, 5, 53]

//===========================================
// Kadane's Algo
//===========================================

// Given an array comprised of numbers that  is potentially very long, return the maximum sum of values from a subarray.
// Any consecutive seuqence of indices in the array is considered a subarray. Create a function that returns the highest sum possible from these subarrays, and prints the subarray.

// [1,2,-4,3,-2,3,-1] return 4 and print [3,-2,3]

function maxOfSubarray(arr) {
    var newArray = [];
    var substring = null;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var newSubstring = arr.slice(i, j);
            var sum = newSubstring.reduce((p, c) => p + c)
            if (sum > substring) {
                substring = sum;
                newArray = newSubstring;
            }
        }
    }
    console.log(substring)
    return newArray;
}

    console.log(maxOfSubarray([1,2,-4,3,-2,3,-1])); //return 4; prints [3,-2,3]