//  um array é uma estrutura que permite guardar varios valores indexados por um numero

// let nomes = ["Tojo", "Miguel", "Luis", "Helder"];
// let numeros = [34, 64, 75, 34];
// let estranhos = [4, "miguel", true, function() {}, 5];  // pode ter diferentes valores string, number ou boolean


let nomes = ["Tojo", "Miguel", "Luis", "Helder"];
// ou let nomes = [
        // "Helder",
        // "miguel",
        // "luis",
        // "tojo"   
//          ]

  // vamos imprimir apenas o segundo valor do array
//   console.log(nomes[1]);  // a ordem começa sempre em 0,1,2,3,4,etc

//   console.log(nomes.length);

//   for(let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i]);
//   }

let numeros = [4, 9, 3, 10, 55, 23, -4, 87, 2];


for (let i = 0; i < numeros.length; i++) {
    // verificar se o indice é par e imprimir
    if (i % 2 == 0) {
        console.log(numeros[i]);
    }    
}

console.log("\n");

for (let i = 0; i < numeros.length; i++) {
    // verificar se o valor é par e imprimir
    if (numeros[i] % 2 == 0) {
        console.log(numeros[i]);
    } 
}
 
    
        
