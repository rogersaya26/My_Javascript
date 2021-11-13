const cuadrado = {
    x: 10,
    y: 10,
}
function calcularArea(cuadrado) {
    return cuadrado.x * cuadrado.y;
}
console.log(calcularArea(cuadrado));

function calcularArea2(cuadrado) {
    const {x, y} = cuadrado
    return x * y;
}
console.log(calcularArea2(cuadrado));

function calcularArea3({x, y}) {
    return x * y;
}
console.log(calcularArea3(cuadrado));