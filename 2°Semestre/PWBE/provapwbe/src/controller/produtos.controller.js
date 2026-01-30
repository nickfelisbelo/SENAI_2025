const produtos = require("../data/produtos.data");

const cadastrar = (req, res) => {
    const novoProduto = req.body;
    produtos.push(novoProduto);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const alterar = (req, res) => {
    const produtoAlterado = req.body;
    var encontrei = false;

    produtos.forEach((produto, index) =>{
        if(produto.codigo === produtoAlterado.codigo){
            produtos[index] = produtoAlterado;
            encontrei = true;
        }
    });
    if (encontrei === false){
        res.status(404).end();
    }
    else{
        res.status(201).end();
    }
};

const listar = (req, res) => {
    res.status(200).send(produtos).end();
};

const buscar = (req, res) => {
    const codigoProduto = req.params.codigo;

    produtos.forEach((produto, index) => {
        if(produto.codigo === codigoProduto){
            prod = produto;
        }
    });

    res.send(prod).end();
};

module.exports = {
    alterar,
    cadastrar,
    listar,
    buscar
};