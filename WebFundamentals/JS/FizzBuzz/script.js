
// Change These values if you want to use different numbers for fizzbuzz!
const fizz = 3;
const buzz = 5;

for (var i=1; i<=100; i++) {
    if (i % fizz === 0 && i % buzz === 0) {
        console.log("FizzBuzz");
    } else if (i % fizz === 0) {
        console.log("Fizz");
    } else if (i % buzz === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}