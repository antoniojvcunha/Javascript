const names = [
    "Batman",
    "Superman",
    "Spider-Man",
    "Aquaman",
    "Wolverine",
    "Invincible",
    "Joker"
]


// const firstLetter = names.filter (function(value) {
//     if (value[0] === "A" || value[0] === "S") {
//         return true
//     } else {
//         return false
//     }
// });

//  OR

const firstLetter = names.filter (function(value) {
    return value[0] === "A" || value[0] === "S"
});


console.log(firstLetter);