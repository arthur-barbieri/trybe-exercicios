// Exercício 1
let info1 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem-vinda,', info1.personagem);

// Exercício 2

info1.recorrente = 'Sim'

console.log(info1);

// Exercício 3

for (let index in info1) {
    console.log(index);
}
console.log('-------------------------------');

// Exercício 4

for (let index in info1) {
    console.log(info1[index]);
}
console.log('--------------------------------');

// Exercício 5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

    for (let key in info1) {
        if(key === 'recorrente' && info1[key] === 'Sim' && info2[key] === 'Sim') {
            console.log('Ambos recorrentes!');
        } else {
            console.log(info1[key], 'e', info2[key]); 
        }
}

// Exercícios PARTE 2

// Exercício1

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };

console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama', leitor.livrosFavoritos[0].titulo);

console.log(leitor.name, 'tem', leitor.livrosFavoritos.length, 'livros favoritos');




