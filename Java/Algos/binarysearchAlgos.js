// Big O Notation!  Quick summary video: https://www.youtube.com/watch?v=g2o22C3CRfU
// O(n) | Lineary Complexity - it takes exactly 1 unit of time per element when looping through an array of items
// O(log n) | Logarithmic Complexity - in a sorted array we can do a binary search where we check whether the 
//    value given is greater than or less than a midway point and we continue cutting the search range in half
//    until we find the value.  This is why the given array must be sorted for this to work

// Here is an example of how the binary search would work
// The array we are searching: arr = [1,2,3,5,7,9,10,11,13,14,15,56,78]
// The value we are looking for:  value = 9

// STEPS:
// [1,2,3,5,7,9,10  |  11,13,14,15,56,78] - Get the array's middle index position
//   Find the halfway point's value. 9 is less than that so we only need to search the left side
// [1,2,3,5  |  7,9,10] - Now we cut the left hand side in half and evaluate the midpoint's value
//   9 is greater than the midpoint's value so we only need to search the right hand side
// [7, | 9,10] - Now, depending on where you split in half, 9 is greater than halfway so we check the right hand side
// [9, | 10] - Get it down to 1 or 2 items, then check to see which one the value is equal to

// Use recursiveBinarySearch(arr, value, ?????) to receive a given array of sorted numbers and value to search for
// Return true if the value is found, return false if it is not

// HINTS:  You may want two other parameters, one for the left side (start) of the array and one for the right (end)

// Edge Cases:
// What if it's empty?  What if the value is in the middle?

function recursiveBinarySearch(arr, value) {

}

arr = [1,2,3,5,7,9,10,11,13,14,15,56,78]
console.log(recursiveBinarySearch(arr,10))
console.log(recursiveBinarySearch(arr,78))
console.log(recursiveBinarySearch(arr,111))
console.log(recursiveBinarySearch(arr,999))



function recursiveBinarySearch(arr, value, lefttemp = arr[0], righttemp = arr[arr.length-1]) {
    var contains = false
    if (value == lefttemp || value ==righttemp){
        contains = true
        return contains
    }
    else if(arr.length == 2){
        return contains
    } 
    else {
        var midpoint = arr[Math.floor(arr.length / 2)]
        if (value == midpoint) {
            contains = true
            return contains
        }
        else if(value > righttemp || value < lefttemp){
            return contains
        }
        else if(value < midpoint){
            var arr = arr.slice(lefttemp, midpoint)
            return recursiveBinarySearch(arr, value, lefttemp = arr[0], righttemp = arr[arr.length-1])
        }
        else{
            var arr = arr.slice(midpoint, righttemp)
            return recursiveBinarySearch(arr, value, lefttemp = arr[0], righttemp = arr[arr.length-1])
        }
    }
}

let recursiveFunction = function (arr, x, start, end) {

    // Base Condition
    if (start > end) return false;

    // Find the middle index
    let mid=Math.floor((start + end)/2);

    // Compare mid with given key x
    if (arr[mid]===x) return true;

    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x)
        return recursiveFunction(arr, x, start, mid-1);
    else

        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid+1, end);
}

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length-1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");
