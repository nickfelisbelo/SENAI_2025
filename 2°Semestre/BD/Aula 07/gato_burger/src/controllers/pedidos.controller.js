const db = require("../data/connection");

const listarPedidos = async (req, res) => {
    const lista = await db.query("SELECT * FROM pedidos");
    res.json(lista[0]).end();
};

const buscarPedidos = async (req, res) => {
    const idPedido = req.params.id;
    const pedido = await db.query("SELECT * FROM pedidos WHERE id = " + idPedido);
    res.json(pedido[0][0]).end();
};

const cadastrarPedido = async (req, res) => {
    const {produto_id, status, data_pedido} = req.body;
    try{
        const novoPedido = await db.query("INSERT INTO pedidos VALUES (DEFAULT, ?, ?, ?)", [produto_id, status, data_pedido]);

        const pedido = {
            id: novoPedido[0].insertId,
            status: status,
            data_pedido: data_pedido
        };

        res.json(pedido).status(201).end();
    } catch(error){
        console.log(error);

        const info = {msg: ""};

        if(error.errno === 1452){
            info.msg = "produto não existente";
        }

        res.status(500).json(info).end();
    }
};

const excluirPedido = async (req, res) => {
    const idPedido = req.params.id;

    try{
        const delPedido = await db.query("DELETE FROM pedidos WHERE id = ?", [idPedido]);

        const info = {msg:""};

        if(delPedido[0].affectedRows === 1){
            info.msg = "Excluido com Sucesso";
        } else if(delPedido[0].affectedRows === 0){
            info.msg = "Produto não encontrado";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        const info = {msg:""};

        if(error.errno === 1452){
            info.msg = "Pedido não pode ser excluido";
        }

        res.status(500).json(info).end();
    }
};

const atualizarPedido = async (req, res) => {
    const {id, produto_id, status, data_pedido} = req.body;
    
    try{
        const atualiza = await db.query("UPDATE pedidos SET produto_id = ?, status = ?, data_pedido = ? WHERE id = ?", [produto_id, status, data_pedido, id]);

        const info = {msg:""};

        if(atualiza[0].affectedRows === 0){
            info.msg = "Nenhum pedido encontrado";
        }else if(atualiza[0].affectedRows === 1){
            info.msg = "Pedido atualizado com sucesso";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
};

const totalVendidoProd = async (req, res) => {
    const idProduto = req.params.id;

    try{
        const totalVendas = await db.query("SELECT COUNT(*) AS total_pedidos FROM pedidos WHERE id = " + idProduto);

        res.status(202).json(totalVendas[0]).end();
    } catch(error){
        console.log(error);
    }
}

const quantPedStatus = async (req, res) => {
    const statusPedido = req.params.status;

    try{
        const quantStatus = await db.query("SELECT COUNT(*) AS total_pedidos FROM pedidos WHERE status = ?", [statusPedido]);

        res.status(202).json(quantStatus[0]).end();
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    listarPedidos,
    buscarPedidos,
    cadastrarPedido,
    excluirPedido,
    atualizarPedido,
    totalVendidoProd,
    quantPedStatus
};