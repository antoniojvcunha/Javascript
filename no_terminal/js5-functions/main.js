// classic function declaration syntax

// function totalFamilyAge() {
//     let mother = 55
//     let sister = 15
//     let me = 26
//     let total = mother + sister + me
//     console.log("Total age of the family is: " + total)
// }

// // functions need to be executed
// // for thst we call them by name
// totalFamilyAge();


// function greeting(name) {
//     console.log("Hello " + name + "! How are you doing?")
// }

// greeting("Tojo");


function rectPerimeter(width, height) {
    const result = (2 * width) + (2 * height);
    console.log(result);
}

function rectArea(width, height) {
    const result = width * height;
    console.log(result);
}

function circumference(radius) {
    const result = 2 * Math.PI * radius;
    console.log(result);
}

function circleArea(radius) {
    const result = Math.PI * radius ** 2;
    console.log(result);
}

rectPerimeter(4, 4);
rectArea(4, 4);
circumference(3);
circleArea(3);
     