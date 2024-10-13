//  Write a program that check wether a number exists inside an array of numbers.

let n = 5;
let numbers = [4, 7, 10, 12, 1, 8, 20];
// for this case the result would be false

let resultText = "Falso";

for (let i = 0; i < numbers.length; i++) {
    if (n === numbers[i]) {
        resultText = "Verdadeiro";
    }
}
        
console.log(resultText);