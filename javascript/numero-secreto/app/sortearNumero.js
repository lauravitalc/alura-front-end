const menorNumero = 1
const maiorNumero = 1000
const numero = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorNumero + 1);
}

console.log(numero)

const elementoMenor = document.getElementById('menor-valor');
elementoMenor.innerHTML = menorNumero;

const elementoMaior = document.getElementById('maior-valor');
elementoMaior.innerHTML = maiorNumero;