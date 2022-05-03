// calculateSalary 
// Crie uma função que receba Receba o salário fixo e o valor das vendas efetuadas pelo vendedor;
//E então calcule e retorne o seu salário total.

function calculateSalary(salario, vendas) {

    if (vendas <= 1200) {
        salario += 1200 * 0.03
    } else {
        if (vendas > 1200) {
            salario += (1200 * 0.03) + (vendas - 1200) * 0.05
        }
    }

    return salario

}
console.log(calculateSalary(100, 10))

//Cria uma função que receba um inteiro que representa o valor de um saque em reais (R$)
//Recebe como parâmetro:
//valor do saque;
//valor do salário fixo;
//valor das vendas feitas pelo vendedor;
//Deve Calcular:
//A quantidade de notas de cada valor necessária para o saque. Exemplo: 2 notas de R$200, 1 nota de R$100, 1 nota de R$50;
//O restante do seu salário após o saque.
//Retorne os resultado dos dois calculos em formato de string

function cashMachine(saque, salario, vendas) {
    let valorSaque = saque
    let cedulas = [200, 100, 50, 20, 10, 5, 2]
    let novoValor = calculateSalary(salario, vendas) - saque
    cedulas.forEach((item) => {
        let numNotas = parseInt(saque / item)
        if (numNotas > 0) {
            console.log(`${numNotas} notas de R$${item}`)
        }
        saque = saque % item
    })
    console.log(`Valor sacado = ${valorSaque}`)
    return `Valor restante = ${novoValor}`
}
console.log(cashMachine(3754, 10000, 8000))


//Crie uma função que receba como parâmetro:
//a quantidade atual em estoque
//a quantidade máxima em estoque
//a quantidade mínima em estoque de um produto
//E então faça com que a sua função:
//calcule a quantidade média dos produtos.
//se a quantidade em estoque for maior ou igual à quantidade média, retorne a mensagem: 'Não efetuar compra'
//senão retorne: 'Efetuar compra'

function calculateStock(ea, emax, emin) {
    let emed = (emax + emin) / 2
    if (ea >= emed) {
        return "Não efetuar compra"
    } else {
        return "Efetuar compra"
    }
}
console.log(calculateStock(10, 20))
//Crie uma função que receba o ano de nascimento de uma pessoa e o ano atual, calcule e retorne:
//a idade dessa pessoa em anos
//a idade dessa pessoa em meses
//a idade dessa pessoa em dias
//a idade dessa pessoa em semanas

function calculateAge(anoNas, anoAtus) {
    let idade = anoAtus - anoNas
    let anoBi = idade / 4
    return " Voce tem: " + idade + " anos " + (12 * idade) + " meses " + ((365 * idade) + Math.trunc(anoBi)) + " dias " + (52 * idade) + " semanas"
}
console.log(calculateAge(1990, 2020))

//Crie uma função que receba uma matriz quadrada NxN e retorne um vetor com sua diagonal principal.

function getDiagonal(matrNx) {
    let diagP = []
    for (let i = 0; i < matrNx.length; i++) {
        diagP.push(matrNx[i][i])
    }
    return diagP
}
console.log(getDiagonal([
    [3, 5, 6],
    [2, 5, 7],
    [5, 8, 9]
]))