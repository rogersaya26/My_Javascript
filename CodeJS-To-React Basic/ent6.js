const coche = {
    marca: "Tesla",
    //model: "S",
}
//coche modelo si existe / si no coche model X
let modelo = coche.model ? coche.model : 'X';
console.log(modelo);


function suma (a, b) {
    a = a == null ? 0 : a
    a = a ?? 0
    b = b == null ? 0 : b
    return a + b
}
console.log(suma(5,2));


function suma2 (a, b) {
    a = a ?? 0
    b = b ?? 0
    return a + b
}
console.log(suma2(5,2));