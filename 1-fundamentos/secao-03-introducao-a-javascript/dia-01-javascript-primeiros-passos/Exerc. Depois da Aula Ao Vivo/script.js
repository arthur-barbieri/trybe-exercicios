//  Exercício 1

let a = 20;
let b = 12;

let adicao = a + b
let subtracao = a - b
let multiplicacao = a * b
let divisao = a / b
let modulo = a % b

console.log(adicao)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo)

// Exercício 2

let numero1 = 23
let numero2 = 10

if (numero1 > numero2) {
    console.log(numero1, 'é maior que ', numero2)
} else {
    console.log(numero2, 'é maior que ', numero1)
}

// Exercício 3

let number1 = 10
let number2 = 0
let number3 = 050

if (number1 > number2 && number1 > number3) {
    console.log(number1, 'é o maior número!')
} else if (number2 > number1 && number2 > number3) {
    console.log(number2, 'é o maior número!')
} else {
    console.log(number3, 'é o maior número!')
}

// Exercício 4

let number = -12227;

if (number > 0) {
    console.log('positive')
} else if (number < 0) {
    console.log('negative')
} else {
    console.log('zero')
}

// Exercício 5

let ladoA = 40;
let ladoB = 100;
let ladoC = 40;

let sumaDosAngulos = ladoA + ladoB + ladoC;

let todosOsAngulos = ladoA > 0 && ladoB > 0 && ladoC > 0;

if(todosOsAngulos){
  if (sumaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido!');
}

// Exercício 6

