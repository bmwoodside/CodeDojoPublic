// Use the bookIndex function below to receive a sorted array of page numbers
// and then return a string that combines consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12,13,14,15,16,17] returns "1, 3-5, 7-8, 10, 12, 14-17"
// [1,3,4,5,7,8,10,12,13,14,15,16,17]
// ['1', '3-5', '7-8', '10', '12', '14-17']
// "1, 3-5, 7-8, 10, 12, 14-17"

// HINTS: 
// You'll want a way to look at the current value and then look at the next one to see if it's one higher
// If it is, then you've found a range, if it's not, you haven't
// You could create a string and add to it, or get rid of the values in the array that aren't needed 
//   and convert to a string, or whatever way you come up with!

function bookIndex(arr){
    //your code here
}

console.log(bookIndex([1,3,4,5,7,8,10,12,14,15,16,17]))