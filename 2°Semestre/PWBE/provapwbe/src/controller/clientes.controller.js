const cliente = require("../data/clientes.data");7

const cadastrar = (req, res) => {
    const novoCliente = req.body;
    cliente.push(novoCliente);
    res.status(201).send("Cadastrado com Sucesso !").end();
};

const buscar = (req, res) => {
    const cpfCliente = req.params.cpf;

    var user = "Não Encontrado";

    cliente.forEach((cliente, index) => {
        if(cliente.cpf === cpfCliente){
            user = cliente;
        }
    });

    res.send(user).end();
};

module.exports = {
    cadastrar,
    buscar
};