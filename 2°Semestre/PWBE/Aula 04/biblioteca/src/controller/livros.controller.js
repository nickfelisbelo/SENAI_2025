const livros = require("../data/livros.data");

const listar = (req, res) =>{
    res.status(200).send(livros).end();
};

const buscar = (req, res) =>{

    const idLivro = req.params.id;

    var book = "Não Encontrado";

    livros.forEach((livro, index) => {
        if(livro.id === idLivro){
            book = livro; 
        }
    });

    res.send(book).end();
};

const cadastrar = (req, res) => {
    const novoLivro = req.body;
    livros.push(novoLivro);
    res.status(201).send("Livro Adicionado !").end();
};

const apagar = (req, res) => {
    const idLivro = req.params.id;

    var indice = -1;

    livros.forEach((livro, index) =>{
        if(livro.id === idLivro){
            indice = index;
        }
    });

    if (indice === -1) res.status(404).end();
    else{
        livros.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const livroAtualizado = req.body;
     
    var encontrei = -1;

    livros.forEach(( livro, index) => {
        if(livro.id === livroAtualizado.id){
            encontrei = index;
            livros[index] = livroAtualizado;
        }
    });

    if(encontrei === -1) res.status(404).end();
    else{
        res.status(204).end();
    }
};

const atualizar = (req, res) => {
    const idLivro = req.params.id;
    const novasInformacoes = req.body;

    var indice = -1;

    livros.forEach((livro, index) => {
        if(idLivro === livro.id){
            indice = index;
        }
    });

    if (indice === -1) res.status(404);
    else{
        Object.keys(novasInformacoes).forEach((key) => {
            livros[indice][key] = novasInformacoes[key];
        });
        res.status(204).end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar, 
    alterar,
    atualizar
}