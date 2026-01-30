var livros = [
    {
        "nome": "O Cortiço",
        "autor": "Aluisio Azevedo"
    },
    {
        "nome":"Dom Casmurro",
        "autor":"Castro Alves"
    },
    {
        "nome": "Diva",
        "autor": "José de Alencar"
    }
]

livros.forEach((livro) => {
    if(livro.nome == "Dom Casmurro"){
        console.log(livro)
    }
});
console.log("===============================");

livros.forEach((livro,indice) => {
    if(livro.nome == "O Cortiço"){
        livros.splice(indice,1);
    }
});

console.log(livros);
console.log("===============================");

livros.push({"nome": "Sei la", "autor": "Fulano"});

console.log(livros);
console.log("===============================");

livros.forEach((livro, autor) =>{
    if(livro.nome==="Dom Casmurro"){ 
        livro.autor = "Machado de Assis";
    }    
});

console.log(livros);