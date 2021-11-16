// binary to decimal
function binaryToDecimal(binary) {
    let decimal = 0;
    let counter = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        decimal += binary[i] * Math.pow(2, counter);
        counter++;
    }
    return decimal;
}



// decimal to binary (does not handle negative numbers)
function decimalToBinary(decimal) {
    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}

// console.log(binaryToDecimal("1010"));
// console.log(binaryToDecimal("1111101"));
// console.log(binaryToDecimal("10101"));
// console.log(binaryToDecimal("10000001"));

// console.log(decimalToBinary(5));
// console.log(decimalToBinary(127));
// console.log(decimalToBinary(255));
// console.log(decimalToBinary(256));
// console.log(decimalToBinary(102));
// console.log(decimalToBinary(11749));

// discord answers by hand
// decimal to binary
// 1101, 0110, 11001, 1000, 101101, 1010, 1 1001, 01000000, 11111110, 01111111, 100011, 0, 11000110

// binary to decimal
// 165, 7, 

