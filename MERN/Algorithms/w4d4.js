

// -- bitwise exclusive or --
// take in 2 binary strings of equal length and return a binary string
// of the XOR value

function xor(a, b) {
    let xor = "";
    if (a.length != b.length) {
        return "Error: strings must be equal length";
    }
        
    else {
        for (i = 0; i < a.length; i++) {
            if (a[i] == b[i]) {
                xor += "0";
            }
            else {
                xor += "1";
            }
        }
    }
    return xor;
}

// console.log(xor("1010", "1011"));
// console.log(xor("1001101", "1001101"))
// console.log(xor("100101", "011001"))

// -- left shift --
function bitwiseLSL(binaryStr, shiftAmount) { 
    let shifted = "";
    shifted = binaryStr.slice(shiftAmount);
    for (i = 0; i < shiftAmount; i++) {
        shifted += "0";
    }
    return shifted;
}

console.log(bitwiseLSL("1010111", 3)); // expected output: 0111000