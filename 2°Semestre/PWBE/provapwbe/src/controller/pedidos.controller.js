const pedidos = require("../data/pedidos.data");

const cadastrar = (req, res) => {
    const novoPedido = req.body;

    if(novoPedido.quantidade <= 0){
        res.status(404).send("Não é possivel realizar o cadastro!").end();
    } else {
        pedidos.push(novoPedido);
        res.status(201).send("Cadastrado com Sucesso !").end();
   
    };
};

const atualizar = (req, res) => {
    const idPedido = req.params.id;
    const novasInformacoes = req.body;

    var indice = -1;

    pedidos.forEach((pedido, index) => {
        if(idPedido === pedido.id){
            indice = index;
        };
    });

    if (indice === -1) res.status(404);
    else{
        Object.keys(novasInformacoes).forEach((key) => {
            pedidos[indice][key] = novasInformacoes[key];
        });
        res.status(204).end();
    };
};

const listar = (req, res) => {
    res.status(200).send(pedidos).end();
};

module.exports = {
    cadastrar,
    atualizar,
    listar
    
};

// * Atualizar status (manualmente) / Completo
// * Listar todos pedidos / Completo
// * Consultar pedido pelo seu código(id)

// Detalhamento:
// Não é permitido comprar em quantidade <= 0