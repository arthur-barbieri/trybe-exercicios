let fulano = {
    name: 'Arthur',
    sobrenome: 'Claudio',
    idade: 29,
    altura: 1.81
}

let novaChave = 'peso'
let peso = 85

function addCaracteristicas(object, key, value) {
    object[key] = value
}

addCaracteristicas(fulano, novaChave, peso)
console.log(fulano); // aqui foi adicionado a propriedade peso com o valor 85 no objeto fulano

novaChave = 'nacionalidade'
let nacionalidade = 'Brasileiro'

addCaracteristicas(fulano, novaChave, nacionalidade); 
console.log(fulano); // aqui foi adicionado a propriedade nacionalidade com o valor 'Brasileiro' no objeto fulano


addCaracteristicas(fulano, `sexo`, `Masculino`)
addCaracteristicas(fulano, `cidade`, `Jundiaí`)
addCaracteristicas(fulano, `profissao`, `Cobrador`)
// aqui foi adicionado as propriedades sexo, cidade e profissao com os valores 'Masculino', 'Jundiaí' e 'Cobrador' no objeto fulano

console.log(fulano);

for (let chave in fulano) {
    console.log(chave);
}

console.log(Object.keys(fulano));















