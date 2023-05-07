// Exercício 1

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let person in names) {
    console.log('Olá', names[person]);
  }  

// Exercício 2

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let key in car) {
    console.log(key, ':', car[key]); 
    // key vai retornar a chave e o car[key vai retornar o valor de cada item dentro do objeto car]
}