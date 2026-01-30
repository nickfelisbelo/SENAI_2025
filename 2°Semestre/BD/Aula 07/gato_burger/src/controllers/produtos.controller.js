const db = require("../data/connection");

const listarProdutos = async (req, res) => {
    const lista = await db.query("SELECT * FROM produtos");
    res.json(lista[0]).end();
};

const buscarProdutos = async (req, res) => {
    const idProduto = req.params.id;
    const produto = await db.query("SELECT * FROM produtos WHERE id = " + idProduto);
    res.json(produto[0][0]).end();
};

const cadastrarProduto = async (req, res) => {
    const {nome_produto, descricao, categoria, preco} = req.body;
    const novoProduto = await db.query("INSERT INTO produtos VALUES (DEFAULT, ?, ?, ?, ?)", [nome_produto, descricao, categoria, preco]);

    const produto = {
        id: novoProduto[0].insertId,
        nome: nome_produto,
        preco : preco
    };

    res.json(produto).status(201).end();
};

const excluirProduto = async (req, res) => {
    const idProduto = req.params.id;

    try{
        const delProduto = await db.query("DELETE FROM produtos WHERE id = ?", [idProduto]);

        const info = {msg:""};

        if(delProduto[0].affectedRows === 1){
            info.msg = "Excluido com Sucesso";
        } else if(delProduto[0].affectedRows === 0){
            info.msg = "Produto não encontrado";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
    }
};

const atualizarProduto = async (req, res) => {
    const {id, nome_produto, descricao, categoria, preco} = req.body;
    
    try{
        const atualiza = await db.query("UPDATE produtos SET nome_produto = ?, descricao = ?, categoria = ?, preco = ? WHERE id = ?", [nome_produto, descricao, categoria, preco, id]);

        const info = {msg:""};

        if(atualiza[0].affectedRows === 0){
            info.msg = "Nenhum produto encontrado";
        }else if(atualiza[0].affectedRows === 1){
            info.msg = "Produto atualizado com sucesso";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
        
        res.status(500).end();
    }
};

const medPrecoCategoria = async (req, res) => {
    const categoriaProduto = req.params.categoria;

    try{
        const mediaPreco = await db.query("SELECT AVG(preco) AS preco_medio FROM produtos WHERE categoria = ?", [categoriaProduto]);
        
        res.status(202).json(mediaPreco[0]).end();
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    listarProdutos,
    buscarProdutos,
    cadastrarProduto,
    excluirProduto,
    atualizarProduto,
    medPrecoCategoria
};