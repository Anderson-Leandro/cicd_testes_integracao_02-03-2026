// 1.	Crie um arquivo chamado math.js e implemente as seguintes funções:
// •	add(a, b): Retorna a soma de a e b.
// •	subtract(a, b): Retorna a diferença entre a e b.
// •	multiply(a, b): Retorna o produto de a e b.
// •	divide(a, b): Retorna a divisão de a por b.


function add(a,b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}



// console.log("soma", add(10,5))
// console.log("subtrair", subtract(10,5))
// console.log("multiplicar", multiply(10,5))
// console.log("dividir", divide(10,5))


module.exports = {add, subtract, divide, multiply}