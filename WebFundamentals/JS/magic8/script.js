var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function ask() {
    if (document.querySelector("#question").value === "") {
        document.querySelector("#ballResponse").innerText = "42";
    }
    else {
        document.querySelector("#ball").setAttribute('src', './ball.gif');
        setTimeout(replace, 1200)
    }
}

function replace() {
    var random = Math.floor(Math.random()*lifesAnswers.length);
    document.querySelector("#ballResponse").innerText = lifesAnswers[random];

    document.querySelector("#ball").setAttribute('src', './ballStill.jpg');
}
