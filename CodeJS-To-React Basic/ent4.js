const array = [1,2,3,4,5];
const otroArray = [6,7,8,9,10];

const nuevoArray = [...array, ...otroArray];
console.log(nuevoArray)

const nuevoArray2 = [array.concat(otroArray)];
console.log(nuevoArray2);