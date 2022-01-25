// const arrA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrB = [7, 7, 7, 8, 9, 10, 11, 12, 13, 14];

// let union = [...new Set([...arrA, ...arrB])];
// console.log(union);


// get union of two arrays
function union(arrA, arrB) {
    let union = [];
    while (arrA.length && arrB.length) {
        if (arrA[0] < arrB[0]) {
            union.push(arrA.shift());
        } else if (arrA[0] > arrB[0]) {
            union.push(arrB.shift());
        } else {
            union.push(arrA.shift());
            arrB.shift();
        }
    }

    if (arrA.length == 0) {
        union = union.concat(arrB);
    }
    else {
        union = union.concat(arrA);
    }

    return union;
}

// console.log(union(arrA, arrB));
// console.log(union([2,7,2,1,2], [6,7,2,7,6,2]));
// console.log(union([2,1,10,7,9],[3,10,2,7,9,5,2]));
// console.log(union([2,2,7,1,2],[2,2,6,7,6]));