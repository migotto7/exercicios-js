// função sem retorno
function imprimiSoma(a, b) {
    console.log(a + b)
}

imprimiSoma(2, 3)
imprimiSoma(2)
imprimiSoma(2, 10, 4, 5, 6)
imprimiSoma()

// função com retorno

function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))