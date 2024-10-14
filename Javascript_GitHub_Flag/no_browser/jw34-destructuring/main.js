const numbers = [
    100,
    200,
    250,
    300,
    600,
    750,
    1000
];

//  Array destructuring

const [n1, n2, ,n3] = numbers;

// const n1 = numbers [0];
// const n2 = numbers [1];
// const n3 = numbers [3];

console.log(n1);
console.log(n2);



//
//  Object Destructuring


const person = {
    name: "Joe",
    age: 40,
    city: "London",
    profession: "Developer",
    marriageStatus: "Single",
    footballClub: "Manchester United"
};

const {name, city} = person;    //  Está-se a criar 2 constantes ao mesmo tempo

//  const name = person.name;
//  const city = person.city;