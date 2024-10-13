//  Write a program that prints the name with more characters in an array of names.

let names = ["Josie", "Cathrin", "Bob", "Max", "Hannah", "Alex"];



function longestName() {
    let longestName = "";
    for (let i = 0; i < names.length; i++) {
        if (
            names[i].length > longestName.length
        ) {
            longestName = names[i];
        }
    }
    return longestName;
}

console.log(longestName());



