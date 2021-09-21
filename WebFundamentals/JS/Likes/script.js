// "use strict"

let likes1 = 0;
let likes2 = 0;
let likes3 = 0;

console.log(likes1,likes2,likes3)

function addLike1() {
    likes1++;
    document.querySelector("#likesCount1").innerText = likes1;
}

function addLike2() {
    likes2++;
    document.querySelector("#likesCount2").innerText = likes2;
}

function addLike3() {
    likes3++;
    document.querySelector("#likesCount3").innerText = likes3;
}