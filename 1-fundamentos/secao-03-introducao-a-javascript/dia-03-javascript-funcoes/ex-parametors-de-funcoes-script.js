// Exercício 1
// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function adicionarClientes(clienteNovo) {
    
//     if (typeof clienteNovo === 'string') {
//         clientesTrybeBank.push(clienteNovo)
//         return "Cliente " + clienteNovo + " adicionado com sucesso!"
//     } else {
//         return 'Esse cliente não tem uma string como valor!'
//     }

// }

// console.log(adicionarClientes('Arthur'))
// console.log(clientesTrybeBank);

// Exercício 2

let clientesTrybeBank2 = ['Ada', 'John', 'Gus'];

function excluiCliente(cliente2) {
    let clienteEncontrado = false

    if (typeof cliente2 === 'string') {
        for (let index = 0; index < clientesTrybeBank2.length; index += 1) {
            if(cliente2 === clientesTrybeBank2[index]) {
                clientesTrybeBank2.splice(index, 1)
                clienteEncontrado = true
                return 'Cliente excluído com sucesso!'
            }
        }

        if (clienteEncontrado === false) {
            return 'Cliente não encontrado!'
        }
        
    } else {
        return 'O parâmetro passado deve ser do tipo "string"!'
    }
}


console.log(excluiCliente('Ada'));
console.log(clientesTrybeBank2);