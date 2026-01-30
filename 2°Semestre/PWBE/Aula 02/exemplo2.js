// function soma(a, b){
//     return a + b;
// }

// console.log("Soma = " + soma(2,10));

// function soma(a,b){
//     let res = a+b;
//     console.log(soma);
// }
// soma(5,5);

// const subtrai = (a , b) => {
//     console.log(a - b);
// };

// subtrai(5,7);

var carros = ["Celta", "Gol", "Kazin", "Uno Escada", "147", "Fusca"]

const imprime = (valor) => {
    console.log("Modelo - "+ valor);
}

carros.forEach((valor) =>{
        if(valor === "Uno Escada"){
            console.log("Encontrei");
        }
});

/* forEach substitui for com uma definição */

var usuarios = [
    {
        "nome":"Fulano",
        "matricula": 1234,
        "telefone": "(12) 3456-78901",
        "sobrenome": "Silva",
        "Nascimento": 1999
    },
    {
        "nome": "Cilcano",
        "matricula": 4321,
        "telefone": "(12) 3456-1234",
        "sobrenome": "Vieira",
        "Nascimento": 2002
    },
    {
        "nome": "Beltrano",
        "matricula": 1243,
        "telefone": "(98) 7654-32109",
        "sobrenome": "Oliveira",
        "Nascimento": 2012
    }
];

usuarios.forEach((usuario) =>{
    let idade = 2025 - usuario.Nascimento; 
    if(usuario.matricula === 1234){
        console.log(`Nome: ${usuario.nome} ${usuario.sobrenome}`);
        console.log("Idade: " + idade);
    }
});