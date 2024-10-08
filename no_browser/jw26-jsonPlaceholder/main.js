const userList = document.querySelector("#userList");
let userData = [];

userList.addEventListener("click", function (event) {
    if (event.target.tagName !== "LI") {
        return;
    }
    const i = event.target.dataset.index;
    displayPersonsInfos(userData[i]);
});

async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";

    const response = await fetch(url);
    const result = await response.json();
    userData = result;
    userList.innerHTML = "";
    
    userList.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
        userList.innerHTML += `<li data-index="${i}">${result[i].name}</li>`
    }
}

const infoPersonsContainer = document.querySelector("#infoPersonsContainer");
const nameInfo = document.querySelector("#nameInfo");
const emailInfo = document.querySelector("#emailInfo");
const idInfo = document.querySelector("#idInfo");

function displayPersonsInfos(personInfo) {
    nameInfo.textContent = `Nome: ${personInfo.name},`;
    emailInfo.textContent = `Email: ${personInfo.email}`;
    idInfo.textContent = `ID: ${personInfo.id}`;
};


getUsers();