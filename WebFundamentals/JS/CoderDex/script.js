// https://api.github.com/users/NicholeKing
// https://api.github.com/users/bmwoodside

var user = document.querySelector("#user")

// async function getInfo() {
//     var response = await fetch("https:api.github.com/users/NicholeKing");
//     var coderData = await response.json()
//     createUser(coderData);
// }

async function getCoderData() {
    var myuser=document.querySelector("#myUser").value;
    console.log(myuser);
    var response = await fetch("https://api.github.com/users/" + myuser);
    var coderData = await response.json();
    console.log(coderData);
    console.log(coderData.name);
    user.innerHTML = `<h1>${coderData.name}</h1>`;
    createUser(coderData);
}


function createUser(data) {
    var res = `<div class="user">
    <h1>${data.name} <span id="gray">${data.login}</span></h1>
    <img src="${data.avatar_url}" alt="user">
    <h3>Location: ${data.location}</h3>
    <h3>Visit <a href="${data.html_url}">Profile</a></h3>
    </div>`;
    user.innerHTML = res + user.innerHTML;

}

