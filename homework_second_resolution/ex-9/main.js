//  Write a program that prints 1 per line only the names on odd positions in an array of names.

let names = ["Josie", "Cathrin", "Bob", "Max", "Hannah", "Alex"];

for (let i = 0; i < names.length; i++) {
    if (i % 2 ==! 0) {
        console.log(names[i]);
    }
}