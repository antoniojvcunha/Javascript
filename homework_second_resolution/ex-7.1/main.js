let readlinesync = require("readline-sync");

let priceNight = 90;
let breakfast = 10;

console.log("Quantas noites pretende ficar?")

let costumerNightAnswer = readlinesync.question("> ");

function totalNightPrice() {
    console.log("O total ficará em " + (costumerNightAnswer * priceNight) + "€")
}

totalNightPrice();


console.log("\n" + "Por + 10€/dia quer incluir pequeno-almoço?")

let costumerBreakfastAnswser = readlinesync.question("> ");

let totalWithBreakfast = totalNightPrice + 10 * costumerBreakfastAnswser

    if (costumerBreakfastAnswser == "sim") {
        console.log("Nesse caso o valor fica em " + totalWithBreakfast + "€")
    } else {
        console.log("Nesse caso o valor mantém-se em " + totalNightPrice + "€")
    }
