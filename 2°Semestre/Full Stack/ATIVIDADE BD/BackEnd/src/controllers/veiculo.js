const db = require('../data/connection.js');

const listarVeiculos = async (req, res) => {
    const listar = await db.query ("SELECT * FROM veiculo");

    res.send(listar[0]).end();
};


const atualizarVeiculos = async (req, res) => {
    const {modelo, localizacao, placa } = req.body;
    // const  = req.params.placa;

    try{
    const atualizar = await db.query ("UPDATE veiculo SET modelo = ?, localizacao = ? WHERE placa = ?", [modelo, localizacao,placa]);

    res.send({
        placa: placa,
        modelo: modelo,
        localizacao: localizacao
    }).end();
    } catch(error){
        console.log(error);
    }
};

const deletarVeiculos = async (req, res) => {
    const placa = req.params.placa;

    // const novaplaca = 

    try{
    const deletar = await db.query ("DELETE FROM veiculo WHERE placa = ?", novaplaca);

    res.send("Deletado com Sucesso").end();
    } catch (error){
        console.log(error);
    }
}

module.exports = {
    listarVeiculos,
    atualizarVeiculos,
    deletarVeiculos
}