var n1 = 5
var n2 = 3
var n3 = 10
var n4 = 56
var n5 = 76
var numMenor = 0
var numMaior = 0

if( n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    numMaior = n1
}

else if(n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
    numMaior =  n2
}

else if(n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
    numMaior = n3
}

else if(n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
    numMaior = n4
}

else {
    numMaior = n5
}

if(n1 < n2 && n1 < n3 && n1 < n4 && n1 < n5) {
    numMenor = n1
}

else if(n2 < n1 && n2 < n3 && n2 < n4 && n2 < n5) {
    numMenor = n2
}

else if(n3 < n1 && n3 < n2 && n3 < n4 && n3 < n5) {
    numMenor = n3
}

else if(n4 < n1 && n4 < n2 && n4 < n3 && n4 < n5) {
    numMenor = n4
}

else {
    numMenor = n5
}

console.log(`${numMaior} é o maior númeor e ${numMenor} é o menor númeor.`)

var operacoes = 'soma'

switch(operacoes) {
    case 'soma':
        var soma = numMaior + numMenor
        console.log(`A soma entre ${numMaior} e ${numMenor} é: ${soma}`)
        

    case 'subtracao':
        var subtracao = numMaior - numMenor
        console.log(`A subtração entre ${numMaior} e ${numMenor} é: ${subtracao}`)
        

    case 'multiplicacao':
        var multiplicacao = numMaior * numMenor 
        console.log(`A multiplicação entre ${numMaior} e ${numMenor} é: ${multiplicacao}`)
        

    case 'divisao':
        var divisao = numMaior / numMenor
        console.log =(`A divisão entre ${numMaior} e ${numMenor} é: ${divisao}`)
        break
}