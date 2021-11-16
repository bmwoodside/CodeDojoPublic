// hex to decimal
function hexToDecimal(hex) {
    const hexValues = {"A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15}
    let decimal = 0;
    let counter = 0;
    for (let i = hex.length - 1; i >= 0; i--) {
        // if hex[i] in hexValues, switch key for value
        if ( hex[i] in hexValues ) {
            // console.log(hexValues[hex[i]])

            decimal += hexValues[hex[i]] * Math.pow(16, counter);
            // add back the original value:
            // some code here
        }
        else {
            decimal += hex[i] * Math.pow(16, counter);
            //add back the original value:
            //some code here
        }
        
        counter++;
    }
    return decimal;
}



// decimal to hex (does not handle negative numbers)
function decimalToHex(decimal) {
    let hex = "";
    while (decimal > 0) {
        hex = (decimal % 2) + hex;
        // decimal = Math.floor(decimal / 2);
    }
    return hex;
}


console.log(hexToDecimal("A2E"))