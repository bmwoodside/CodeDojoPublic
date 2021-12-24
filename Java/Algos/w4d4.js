// say you have a collection of (x,y) points, so for example: [ [2,3], [1,5], [-1,6], [0,1] ] 
// (or whatever syntax you're comfortable with). basically, an array of arrays, where all of 
// the subarrays represent (x,y) coordinates.

// find the smallest box that will contain all of those (x,y) coordinates

// note that a box can be represented by exactly two coordinates: one coordinate 
// for its bottom left corner, and one coordinate for its top right corner. 
// The moment you have those two coordinates, you have all the information you need 
// to actually draw the box (whether it be on paper or in your head). so basically, 
// when i say "find the smallest box ... etc" I really just want you to find me the 
// coordinates of the boxes lower left and top right corner.


// function findSmallestBox(points) {
//     // your code here
// }

// console.log(findSmallestBox([ [2,3], [1,5], [-1,6], [0,1] ])); // [[-1, 1], [2,6]]

// given a subarray of coordinates, find the smallest box that will contain all of those coordinates
function findSmallestBox(coordinates){
    let minX = coordinates[0][0];
    let minY = coordinates[0][1];
    let maxX = coordinates[0][0];
    let maxY = coordinates[0][1];
    for(let i = 1; i < coordinates.length; i++){
        minX = Math.min(minX, coordinates[i][0]);
        minY = Math.min(minY, coordinates[i][1]);
        maxX = Math.max(maxX, coordinates[i][0]);
        maxY = Math.max(maxY, coordinates[i][1]);
    }
    return [[minX, minY], [maxX, maxY]];
}

console.log(findSmallestBox([ [2,3], [1,5], [-1,6], [0,1] ])); // [[-1, 1], [2,6]]
console.log(findSmallestBox([ [-12,4], [17,0], [2,27]])); // [[-12, 0], [17,27]]