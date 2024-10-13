const values = [45, 35, 78, 12, 45, 12, 89];

const newValues = values.filter(value => value < 50);



newValues.sort((a, b) => b - a);

console.log(newValues);