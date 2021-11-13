const obj1 = {
    a: "a",
    b: "b",
    c: "c",
}
const obj2 = {
    d: "d",
    e: "e"
}
const nuevoObjeto = Object.assign({}, obj1, obj2);
console.log(nuevoObjeto);

const nuevoObjeto2 = {...obj1, ...obj2};
console.log(nuevoObjeto2);