const numbers = [34, 12, 4, 1, 6, 7, 12, 3, 5];

const numbersList = document.querySelector("#numbersList");

numbers.forEach(function(value) {
    numbersList.innerHTML += `<li>${value}</li>`;
});