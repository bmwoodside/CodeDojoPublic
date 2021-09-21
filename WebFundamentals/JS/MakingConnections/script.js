

function changeName() {
    document.querySelector("#profileName").innerText = "Someone Else"
}




// function removeConnectionRequest() {
//     document.querySelector("#toddE").remove()
// }


function removeConnectionRequest(element) {
    document.querySelector(element).remove()
}