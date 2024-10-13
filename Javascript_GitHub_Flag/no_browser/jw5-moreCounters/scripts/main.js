const squareBox = document.getElementById("squareBox");
const buttonDown = document.getElementById("buttonDown");
const buttonUp = document.getElementById("buttonUp");

let counter = 0;

//  Criar um contador que sobe ou desce em incrementos de 1
//  1-  o contador deve ser ciclico, quando chega ao 10 se o utilizador carregar no UP volta para o 0; Se estiver em 0 e carregar DOWN vai para o 10

//  2-  Fazer outro contador em que so vai de 0 ao 10 na mesma, mas para quando chega ao 10 ou ao 0 a descer
//  Bonus Points: desativar o botao quando nao podem ser utilizados


buttonDown.addEventListener("click", function() {
    counter -= 1;

    if(counter < 0) {
        counter = 10; //    volta ao 10 quando o contador vai abixo de 0
    }
    squareBox.textContent = counter; // só aqui é que é feito o update da logica
});

buttonUp.addEventListener("click", function() {
    counter += 1;
    
    if(counter > 10) {
        counter = 0; // volta ao 0 quando o contador vai acima de 10
    }
    squareBox.textContent = counter; // só aqui é que é feito o update da logica
});

//---------------------------EX.2------------------------
// let counter2 = 0;

// const squareBox2 = document.getElementById("squareBox2");
// const buttonDown2 = document.getElementById("buttonDown2");
// const buttonUp2 = document.getElementById("buttonUp2");

// buttonDown2.addEventListener("click", function() {
//     if(counter2 > 0) {
//         counter2 -= 1;
//     }

//     squareBox2.textContent = counter2;
// });

// buttonUp2.addEventListener("click", function() {
//     if(counter2 < 10) {
//         counter2 += 1;
//     }

//     squareBox2.textContent = counter2;
// });

//---------------------------EX.2 C/BONUS---------------
let counter2 = 0;

const squareBox2 = document.getElementById("squareBox2");
const buttonDown2 = document.getElementById("buttonDown2");
const buttonUp2 = document.getElementById("buttonUp2");

buttonDown2.disabled = true;

buttonDown2.addEventListener("click", function() {
    buttonUp2.disabled = false;
    counter2 -= 1;
    squareBox2.textContent = counter2;

    if(counter2 === 0) {
        buttonDown2.disabled = true;
    } 
});

buttonUp2.addEventListener("click", function() {
    buttonDown2.disabled = false;
    counter2 += 1;
    squareBox2.textContent = counter2;
    
    if(counter2 === 10) {
        buttonUp2.disabled = true;
    }
});


