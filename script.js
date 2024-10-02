// while
// do/while
// for

// Crie uma lista com 5 nomes usando um while

// enquanto ( condição verdadeira ) faça alguma coisa
let numeroDeVezes = 0


while(numeroDeVezes <5){
    console.log("Passou aqui!")
    numeroDeVezes = numeroDeVezes + 1 
}
// lista, array, vetor, matriz
// lista, array ou vetor
let lista = ['banana', 'maça', 'kiwi', 'morango', 'laranja', 'pera']
// Matriz
let listaDeLista = [
['banana', 'maça', 'kiwi', 'morango', 'laranja'],
['banana', 'maça', 'kiwi', 'morango', 'laranja'],
['banana', 'maça', 'kiwi', 'morango', 'laranja']
]
// Cria uma váriável de contador
let posicao = 0
// Cria uma lista não ordenada
const listaEmTela = document.createElement("ol")

while (posicao <6) {
console.log(lista[posicao])
const itemLista = document.createElement("li")
itemLista.textContent = lista[posicao]
listaEmTela.appendChild(itemLista)
posicao = posicao + 1
}

document.body.appendChild(listaEmTela)

// Exemplo de informação de SEXO
let sexo

do {
    sex = prompt("Informe seu sexo (M-Masculino; F-Feminino): ")
} while (!sexo);

// Exemplo DoWhile
//do {
//posicao = 0
//const listaEmTelaDoWhile = document.createElement("ol")
//console.log(lista[posicao])
//const itemLista = document.createElement("li")
//itemLista.textContent = lista[posicao]
//listaEmTela.appendChild(itemLista)
//posicao = posicao + 1
//} while (posicao < lista.length);

// 
/*
Comparação Truthy
variavel != underfined
variavel != null
variavel > 0
variavel = true

Comparação Falsy
variavel == underfined
variavel == null
variavel == 0
variavel == false
variavel == ""
*/

console.log(!sexo)


// for - para
// Usos dor for: quando eu sei o tamanho da minha lista ou quantidade de vezes
// que eu vou executar a repetição
// para uma variavel index que começa em 0;
// condição (enquanto o index < o tamanho da lista);
// Incremente em 1 a variável index
// index++ é a mesma coisa que index = index + 1
for (let index = 0; index < lista.length; index = index + 1) {
    const element - lista[index]
    console.log('${index + 1} - ${elemet}')
}

// for Each
for (let item of lista){
    console.log

}

