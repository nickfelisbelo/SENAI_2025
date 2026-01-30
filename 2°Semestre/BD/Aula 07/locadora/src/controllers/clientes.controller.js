const db = require("../data/connection");

const listarClientes = async (req, res) => {
    const lista = await db.query("SELECT * FROM clientes");
    res.json(lista[0]).end();
};

const buscarClientes = async (req, res) => {
    const idCliente = req.params.id;
    const cliente = await db.query("SELECT * FROM clientes WHERE id = " + idCliente);
    res.json(cliente[0][0]).end();
};

const cadastrarCliente = async (req, res) => {
    const {nome, email} = req.body;
    const novoCliente = await db.query("INSERT INTO clientes VALUES (DEFAULT, ?, ?)", [nome, email]);
    
    const cliente = {
        id: novoCliente[0].insertId,
        nome: nome
    };

    res.json(cliente).status(201).end();
};

const excluirCliente = async (req, res) => {
    const idCliente = req.params.id;

    try{
        const delCliente = await db.query("DELETE FROM clientes WHERE id = ?", [idCliente]);

        const info = {msg:""};

        if(delCliente[0].affectedRows === 1){
            info.msg = "Excluido com Sucesso";
        } else if(delCliente[0].affectedRows === 0){
            info.msg = "Cliente não encontrado";
        }

        res.status(200).json(info).end();
    }catch(error){
        const info = {msg:""};

        if(error.errno === 1451){
            info.msg = "Cliente com locação";
        }

        res.status(500).json(info).end();
    }
};

const atualizarCliente = async (req, res) => {
    const {id, nome, email} = req.body;
    
    try{
        const atualiza = await db.query("UPDATE clientes SET nome = ?, email = ? WHERE id = ?", [nome, email, id]);

        const info = {msg:""};

        if(atualiza[0].affectedRows === 0){
            info.msg = "Nenhum cliente encontrado";
        }else if(atualiza[0].affectedRows === 1){
            info.msg = "Cliente atualizado com sucesso";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
        
        res.status(500).end();
    }
};

const LocacoesPendentes = async (req, res) => {
    try{
        const locacoes = await db.query("SELECT clientes.nome, COUNT(cliente_id) AS locacoes_pendentes FROM locacoes INNER JOIN clientes ON locacoes.cliente_id = clientes.id WHERE status = 'pendente' GROUP BY cliente_id;");
        res.status(200).json(locacoes[0]).end()
    }catch(error){
        console.log(error);
    }
}

const gastoCliente = async (req, res) => {
    try{
        const gastoCliente = await db.query("SELECT clientes.nome as Cliente, SUM(filmes.preco) as 'Total Gasto' FROM locacoes INNER JOIN clientes ON locacoes.cliente_id = clientes.id INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY cliente_id");
        res.status(200).json(gastoCliente[0]).end();
    }catch(error){
        console.log(error);
    }
}

const InfoClientes = async (req, res) => {
    try{
        const info = await db.query("SELECT clientes.nome AS 'Nome Cliente', status as 'Status Pedido', COUNT(cliente_id) AS 'Id Cliente' FROM locacoes INNER JOIN clientes ON locacoes.cliente_id = clientes.id GROUP BY cliente_id, locacoes.status ORDER by cliente_id desc");
        res.status(200).json(info[0]).end();
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    listarClientes,
    buscarClientes,
    cadastrarCliente,
    excluirCliente,
    atualizarCliente,
    LocacoesPendentes,
    gastoCliente,
    InfoClientes
};