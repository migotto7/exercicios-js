// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        rua: 'Rua abc',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, benHumorada = true} = pessoa
console.log(sobrenome, benHumorada)

const { endereco: { rua, numero, Cep} } = pessoa
console.log(rua, numero, Cep)

const { conta: { ag, num} } = pessoa
console.log(ag, num)


