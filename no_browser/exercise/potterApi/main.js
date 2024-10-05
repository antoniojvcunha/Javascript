async function fetchHogwartsList() {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    const result = await response.json();

    createCharactersList(result);

}

function preventDefault(event) {
    event.preventDefault();
}

function createCharactersList(charactersData) {
    dropdownCharacter.innerHTML = "";
    for (let i = 0; i < charactersData.length; i++) {
        dropdownCharacter.innerHTML += `<option>${charactersData[i].name}</option>`;
    }
}

const dropdownCharacter = document.querySelector("#dropdownCharacter");

window.onload = function() {   //perguntar se dá para fazer de alguma maneira que
    fetchHogwartsList();       //tenhamos aprendido
};


const characterImage = document.querySelector("#characterImage");
const nameInfo = document.querySelector("#nameInfo");
const genderInfo = document.querySelector("#genderInfo");
const birthdayInfo = document.querySelector("#birthdayInfo");
const ancestryInfo = document.querySelector("#ancestryInfo");
const wandInfo = document.querySelector("#wandInfo");
const houseInfo = document.querySelector("#houseInfo");




function displayCharacterDetails(characterDetails) {
    characterImage.src = characterDetails.image;
    nameInfo.textContent = characterDetails.name;
    genderInfo.textContent = characterDetails.gender;
    birthdayInfo.textContent = characterDetails.dateOfBirth;
    ancestryInfo.textContent = characterDetails.ancestry;
    wandInfo.textContent = characterDetails.wand.wood;
    houseInfo.textContent = characterDetails.house;
};

async function fetchCharacterByName(name) {
    // A API não permite buscar diretamente por nome, então você deve filtrar a lista
    const charactersData = await (await fetch("https://hp-api.onrender.com/api/characters")).json();
    const character = charactersData.find(c => c.name === name);
    
    if (character) {
        displayCharacterDetails(character); // Exibe a imagem do personagem se encontrado
    } else {
        console.error("Personagem não encontrado");
    }
}

dropdownCharacter.addEventListener("change", function() {
    const selectedCharacter = dropdownCharacter.value;
    fetchCharacterByName(selectedCharacter);
});