const colorBox = document.getElementById("colorBox");
const buttonChangeColor = document.getElementById("buttonChangeColor");
const buttonRandomColor = document.getElementById("buttonRandomColor");

let currentColorIndex = 0;
const colors = ["red", "green", "blue", "pink", "yellow", "bisque"];

colorBox.style.backgroundColor = colors[0];

buttonChangeColor.addEventListener("click", function () {
    currentColorIndex += 1;
    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
    // colorBox.textContent = counter;
    colorBox.style.backgroundColor = colors[currentColorIndex];
});

buttonRandomColor.addEventListener("click", function () {
    let random = parseInt(Math.random() * colors.length);
    while (random === currentColorIndex) {
        random = parseInt(Math.random() * colors.length);
    }
    currentColorIndex = random;
    // colorBox.textContent = counter;
    colorBox.style.backgroundColor = colors[currentColorIndex];
});

// T P C
// 1 - Criar uma pagina com uma tag <img> e respectiva imagem, criar um botao que ao clicar muda a imagem
// 2 - Criar uma mini galeria com um array de imagens ao estilo do exercicio acima