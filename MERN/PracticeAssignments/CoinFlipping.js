

const tosscoin = () => {
    return Math.random() > 0.5 ? "heads" : "tails";
}


const fiveHeadSync = () => {

    let headsCount = 0;
    let attempts = 0;

    while (headsCount < 5 && attempts < 100) {
        attempts++;
        let result = tosscoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }

    return headsCount == 5 ? `It took ${attempts} tries to flip five "heads"` : attempts == 100 ? `Ran out of max attempts (100).` : "something went horribly wrong";

}

const fiveHeads = () => {
    return new Promise( (resolve, reject) => {

        let headsCount = 0;
        let attempts = 0;

        while (headsCount < 5 && attempts < 100) {
            attempts++;
            let result = tosscoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }

        headsCount == 5 ? resolve(`It took ${attempts} tries to flip five "heads"`) : attempts == 100 ? reject(`Ran out of max attempts (100).`) : reject("something went really horribly wrong.");

    });
}

// console.log(fiveHeadSync());
fiveHeads().then( res => console.log(res)).catch( err => console.log(err));
