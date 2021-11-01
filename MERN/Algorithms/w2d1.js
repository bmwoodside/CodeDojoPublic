const string = "It's a Monday and Mondays really suck, especially for algorithm practices."

// split string into array of words
const words = string.split(' ')

console.log(words)


// reverse the order of the words
const reversedWords = words.reverse()
console.log(reversedWords)


let reversedWords2 = []
for (let i = words.length - 1; i>=0; i--) {
    reversedWords2.push(words[i])
}
console.log(reversedWords2)



// reverse order of the entire string (not just the words)
let reversedWords3 = []
for (let i = string.length - 1; i >= 0; i--) {
    reversedWords3.push(string[i])
}
console.log(reversedWords3)