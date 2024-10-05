// Write a program that calculates the sum, the average, the highest and the lowest numbers from an array.

// Example:
// Array: [4, 7, 10, 12, 1, 8, 20, 16]
// Output:

// Sum: 78
// Average: 9.75
// Highest: 20
// Lowest: 1

let numbers = [4, 7, 10, 12, 1, 8, 20, 16]

function soma(numbers) {
    let soma = 0;

    for (i = 0; i < numbers.length; i++) 
        soma += numbers[i];

        return soma;
}

console.log(soma(numbers));
console.log((soma(numbers))/numbers.length)

let highestNumber = Math.max(...numbers);

console.log(highestNumber);

let lowestNumber = Math.min(...numbers);

console.log(lowestNumber);
