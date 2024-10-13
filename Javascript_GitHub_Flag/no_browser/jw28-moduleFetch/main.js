import users from "./services/users.js";

const userList = document.querySelector("#userList");

const userData = await users.getAllUsers();

userList.innerHTML = "";
for (let i = 0; i < userData.length; i++) {
    userList.innerHTML += `<li>${userData[i].email}</li>`;
}

// Example to get just 1 user
const someUser = await users.getuserById(5);
console.log(someUser);