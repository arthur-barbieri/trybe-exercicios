let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };

function mostrarHabilidades(student) {
    let skills = Object.keys(student) 
    for (let key in skills) {
        console.log(skills[key], 'Nivel:', student[skills[key]]);
    }
}
console.log('Estudante 1');
mostrarHabilidades(student1)

console.log('Estudante 2');
mostrarHabilidades(student2)

// ---------------------------------

function mostrar1() {
    for(let index in student1) {
        console.log(index, 'Nível:', student1[index]);
    }
}
function mostrar2() {
    for(let index in student2) {
        console.log(index, 'Nível:', student2[index]);
    }
}
console.log('Estudante 1');
mostrar1()

console.log('Estudante 2');
mostrar2()