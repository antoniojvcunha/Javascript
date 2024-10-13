const people = [
    {
        name: "Joe",
        height:180
    },
    {
        name: "Jane",
        height:170
    },
    {
        name: "Max",
        height:165
    },
];

//  qUAL A MEDIA DE ALTURAS

let sum = 0;
for (i = 0; i < people.length; i++) {
    console.log(people[i].height);
    sum += people[i].height;
}
    
const avg = sum / people.length;
console.log(avg.toFixed(2));