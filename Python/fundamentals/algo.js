// Use the generateCoinChange function below to receive a dollar (decimal) amount with change. 
// Covert that value to the number of quarters, dimes, nickels, and pennies it would have.
// It should count the number or quarters first then work it's way down from there
// This can return a string or an object or whatever you'd like

// Example: generateCoinChange(.67) woud return 2 quarters, 1 dime, 1 nickel, 2 pennies
// Example: generateCoinChange(0.77) would return 3 quarters, 2 pennies
// Example: generateCoinChange(2.85) would return 11 quarters, 1 dime
// Example: generateCoinChange(4.57) would return 18 quarters, 1 nickel, 2 pennies

function generateCoinChange(input) {
    change = {'quarters': 0, 'dimes': 0, 'nickels': 0, 'pennies': 0};
    while(input>= .25){
        change['quarters']++;
        input-=.25
    }
    while(input>= .10){
        change['dimes']++;
        input-=.10
    }
    while(input>= .05){
        change['nickels']++;
        input-=.05
    }
    while(input>= .01){
        change['pennies']++;
        input-=.01
    }

    return change;
}


function generateCoinChange2(input) {
    change = {'quarters': 0, 'dimes': 0, 'nickels': 0, 'pennies': 0};
    change['pennies'] = (input%.25%.10%.05/.01).toFixed(0);
    input-=change['pennies']*.01;
    change['nickels'] = (input%.25%.10/.05).toFixed(0);
    input-=change['nickels']*.05;
    change['dimes'] = (input%.25/.10).toFixed(0);
    input-=change['dimes']*.10;
    change['quarters'] = (input/.25).toFixed(0);

    return change;
}

console.log(generateCoinChange(.67)) 
console.log(generateCoinChange(0.77))
console.log(generateCoinChange(2.85)) 
console.log(generateCoinChange(4.57))