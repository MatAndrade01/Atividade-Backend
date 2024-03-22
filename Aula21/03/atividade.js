let numeros = [1, 2, 3, 4, 8, 10, 11, 13, 18]
for(let i = 0; i <= numeros.length -9; i++ ){
    var num = 'primeiro'
    switch(num){
        case 'primeiro':
            console.log(numeros[1])
        case 'segundo':
            console.log(numeros[3])
        case 'terceiro':
            console.log(numeros[5])
        case 'quarto':
            console.log(numeros[7])
    }
}