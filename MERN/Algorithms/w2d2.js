// rotate string
function rotateString(str, n) {
    return str.slice(n) + str.slice(0, n);
}

// console.log(rotateString('abcdefg', 6));


// rotate string
function rotateString2(str, num){
    if (num > str.length){
        num = num % str.length
    }
    let oldArr = str.split("")
    newArr = []
    while (newArr.length != oldArr.length){
        newArr.push(oldArr[num])
        if (num == oldArr.length-1){
            num = 0
        }
        else num++
    }
    newStr = ""
    for (each of newArr){
        newStr += each
    }
    return newStr
}


// check if string is a rearrangement of another string
function isRotatedString(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        let rotated = rotateString(str1, i);
        if (rotated === str2) {
            return true;
        }
    }
    return false;
}

function isRotatedString2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        let rotated = rotateString2(str1, i);
        if (rotated === str2) {
            return true;
        }
    }
    return false;
}

// console.log(isRotatedString('abcdefg', 'cdefgab'));
// console.log(rotateString2('abcdefg', 4));
// console.log(isRotatedString2('abcdefg', 'cdefgab'));

