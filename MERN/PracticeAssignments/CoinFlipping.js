

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

    return headsCount == 5 ? `It took ${attempts} tries to flip five "heads"` : attempts = 100 ? `Ran out of max attempts (100).` : "something went horribly wrong";

}

console.log(fiveHeadSync());
