// Bitwise Operations


// Bitwise AND



// Bitwise OR



// Bitwise NOT


// test cases
// 0b010101 & 0b0110111 (AND) = 0b010001
function checkAnd(binary1, binary2) {
    output = "";
    let minLength = binary1.length;
    if (binary1.length > binary2.length) {
        minLength = binary2.length;
    }
    
    for (i=minLength-1; i >= 0; i--) {
        if (binary1[i] == 1 && binary2[i] == 1) {
            output += "1";
        }
        else {
            output += "0";
        }
    }
    
    return output;
}

// 0b010101 | 0b0110111 (OR) = 0b011111
// 0b010101 ~ 0b0110111 (NOT) = 0b101010 0b1001000
console.log(checkAnd("010101", "101011011"))