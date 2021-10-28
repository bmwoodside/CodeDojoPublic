// quicksort!

function randint(start,stop){
    return Math.floor(Math.random()*(stop-start))+start
}

const arr = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9]

function quicksort(arr, left=0, right=arr.length, counter=0){
    let i = left
    let j = right
    let pivot = arr[randint(left,right)]
    console.log(`Recursion number ${counter}, pivot is ${pivot}, array is ${arr}`)
    while (i != j){
        for (i; i<right; i++){
            if (arr[i] >= pivot){
                break
            }
        }
        for (j; j>left; j--){
            if (arr[j] <= pivot){
                break
            }
        }
        if (i != j){
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }
    if (left - j > 1 || left - j < -1){ //Left side
        quicksort(arr, left, j-1, counter+1)
    }
    if (j+1 - right > 1 || j+1 - right < -1){ //Right side
        quicksort(arr, j+1, right, counter+1)
    }
    return arr
}