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

function mostrarComObjValues(student) {
    
    return Object.values(student1)
}

console.log( 'Nível:', mostrarComObjValues(student1));

// function mostrarHabilidades(student) {
//     let skills = Object.keys(student) 
//     for (let key in skills) {
//         console.log(skills[key], 'Nivel:', student[skills[key]]);
//     }
// }
// console.log('Estudante 1');
// mostrarHabilidades(student1)

// console.log('Estudante 2');
// mostrarHabilidades(student2)

// -----------------------------------------------

