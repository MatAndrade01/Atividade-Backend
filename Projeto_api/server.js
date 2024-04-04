// importando o expresse
const expresse = require('express');

// criando servidor
const app = expresse();

// criando rota
app.get('/', (req, res) => {
    res.send('Hello World!'); 
});

app.get('/pessoas', (req, res) => {
    res.send('aqui é a rota de pessoas'); 
});

app.get('/carros/:id', (req, res) => {
    //Quarda o id 
    const carId = req.params.id;
    //Procura esse Id informado no nosso array ou banco de dados, find === pesquisa.
    const car = arrCarros.find(car => car.id === parseInt(carId));
    //Se for True entre nessa condicao
    if(car){
        console.log(car);
        res.send(car);
    }
    else{
        res.send(`Nao existe carro com esse ID ${carId}`);
    }
});

let arrCarros = [
    {
        id: 1,
        nome: 'Matheus',
        marca: 'Ford'
    },

    {
        id: 2,
        nome: 'Lucas',
        marca: 'Ferrari'
    },

    {
        id: 3,
        nome: 'Marcos',
        marca: 'Porshe'
    }
]

app.get('/carros', (req, res) => {
    console.log(arrCarros);
    res.send(arrCarros);
  })

app.delete('/carros/delete/:id', (req, res) => {
    const carId = req.params.id;
    arrCarros = arrCarros.filter(car => car.id !== parseInt(carId));
  
    res.send(`Carro ${carId} excluído com sucesso!`);
  
    console.log(arrCarros);
  
  });
// iniciando o servidor
app.listen(3000);

console.log('Servidor inicado na porta 3000');