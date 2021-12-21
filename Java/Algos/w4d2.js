// Given a list of itineraries, find the proper path of the trip. 
// A list of itineraries will be an array of arrays, where the inner array will always be length two. 
// For example, here is an example list of itineraries: [ ['LAX', 'SFO'], ['ICN', 'LAX'], ['SJC', 'ICN'] ].

// The first element in each inner array is the "from" airport, and the latter is the "to" airport. 
// So, ['LAX', 'SFO'] means "from LAX to SFO." Running with this example, given this list of itineraries,
// your code should then print out 'SJC -> ICN -> LAX -> SFO', or you can just comma-separate 
// those airports if you don't like the arrows. Whatever method you choose, 
// you should produce the proper route of the trip. It's guaranteed that the itineraries 
// have exactly one start airport, and exactly one end airport, and that there aren't any loops. 
// Basically, the itinerary will form a single linked list.

// return a single string of the mapped itineraries

// function mappingItineraries(arr) {
//     // your code here
//     let obj = {};
//     let result = [];
//     let front;
//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i][0]] = arr[i][1];
//     }
    
//     // find the key that is not in any value
//     for (let key in obj) {
//         if (!obj[obj[key]]) {
//             front = key;
//         }
//     }
//     console.log(front);
// }

const mappingItineraries = (arr) => {
    let front;
    let tripDict ={};
    let itinerary="";

    for(let i = 0; i < arr.length; i++){
        let j=0;
        for(j; j < arr.length; j++){
            if(!tripDict[arr[j][0]]){
                tripDict[arr[j][0]]=arr[j][1];
            }
            if(arr[j][1] === arr[i][0]){
                break;
            }
        }
        if(j === arr.length){
            front = arr[i][0];
        }
    }
    let current=front;
    itinerary+= front;
    for(let i = 0; i < arr.length; i++){
        itinerary +=  " -> " + tripDict[current];
        current = tripDict[current];
    }
    return itinerary;
}

console.log(mappingItineraries( [  ['ICN', 'LAX'], ['LAX', 'SFO'], ['SJC', 'ICN'], ['NYU', 'SJC'], ['AMS', 'NYU'] ]));
// AMS -> NYU -> SJC -> ICN -> LAX -> SFO

