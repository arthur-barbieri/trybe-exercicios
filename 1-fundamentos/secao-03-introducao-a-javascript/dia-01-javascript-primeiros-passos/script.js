// Exercício 1 - Variáveis
let myName = 'Arthur'

let birthCity = 'Jundiaí'

let birthYear = 1993

console.log(myName)
console.log(birthCity)
console.log(birthYear)

// Exercício 2 - Tipos Primitivos, tipagem dinâmica e operações aritméticas

let base = 5;

let height = 8;

let area = base * height
console.log(area)

let perimeter = base + base + height + height
console.log(perimeter)

// Exercício 3 - Condições if e else

let nota = 93;

if (nota >= 80) {
    console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!')
} else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera.')
} else if (nota < 60) {
    console.log('Infelizmente, você reprovou.')
}

// Exercício 4 - Operadores Lógicos 1

let currentHour = 23;

let message = '';

if (currentHour >= 2) {
    console.log('Não deveríamos comer nada, é hora de dormir')
} else if (currentHour >= 18 && currentHour < 22) {
    console.log('Rango da noite, vamos jantar :D')
} else if (currentHour >= 14 && currentHour < 18) {
    console.log('Vamos fazer um bolo pro café da tarde?')
} else if (currentHour >= 11 && currentHour < 14) {
    console.log('Hora do almoço!!!')
} else if (currentHour >=4 && currentHour < 11) {
    console.log('Hmmm, cheiro de café recém-passado')
}

// Exercício 4 - Operadores Lógicos 2

let weekDay = 'quarta-feira';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D”')
} else {
    console.log('FINALMENTE, descanso merecido! UwU!')
}