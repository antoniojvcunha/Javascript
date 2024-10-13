// TPC : quando o numero é multiplo de 3 substituir por "fizz"
// quando o numero é multiplo de 5 substituir por "buzz"
// quando o numero é multiplo de 3 e de 5 substituir por "foobar"

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else if (i % 3 == 0) { 
        console.log("fizz");
    } else {
        console.log(i);
    }
}