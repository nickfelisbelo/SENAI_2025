const reserva = require("../data/reserva.data");
const clientes = require("../data/cliente.data");

const cadastrar = (req, res) => {
    const novaReserva = req.body;
    clientes.forEach((cliente) =>{
        if(cliente.id === novaReserva.clienteId){
            reserva.push(novaReserva);
            res.status(201).send("Reservado com Sucesso !").end();
        }
        else{
            res.status(404).send("Não Reservado!").end();
        };
    });
};

const listar = (req, res) => {
    res.status(200).send(reserva).end();
};


  
module.exports = {
    listar,
    cadastrar
};