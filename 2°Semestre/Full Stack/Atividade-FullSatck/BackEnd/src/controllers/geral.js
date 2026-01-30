const db = require("../data/connection");

const listarconsultas = async (req, res) => {
    const listar = await db.query("SELECT * FROM consultas");
    res.send(listar[0]).end();
}

const agendarConsulta = async (req, res) => {
    const { status, datahora, id_paciente, id_medico } = req.body;

    const validar = await db.query('SELECT datahora, id_paciente, id_medico FROM consultas WHERE datahora = ? AND id_paciente = ? AND id_medico = ?', [datahora, id_paciente, id_medico]);

    try {
        const hoje = new Date();

        const consulta = new Date(datahora);

        if((consulta < hoje)){
            res.send("Erro! Verifique a data da consulta").end();
        }
        else{
            if(validar[0].length == 1){
                res.send("Erro, agende a consulta em outra data ou com outro médico").end();
            } else{
                const novaColsulta = await db.query("INSERT INTO consultas VALUES (DEFAULT, ?, ?, ?, ?)", [status, datahora, id_paciente, id_medico]);
                res.send({
                    id: novaColsulta[0].insertId,
                    status: status,
                    datahora: datahora,
                    id_paciente: id_paciente,
                    id_medico: id_medico
                }).end();
            }
        }

    } catch (err) {
        console.log(err);
        res.status(500).send(err).end();
    }

};

const excluirConsulta = async (req, res) => {
    const id = req.params.id;

    const excluir = await db.query("DELETE FROM consultas WHERE id = ?", [id]);
    if(excluir[0].affectedRows === 1){
        res.send('excluido com sucesso').end();
    } else if(excluir[0].affectedRows === 0){
        res.send("Erro, não é possível atualizar").status(500).end();
    }
}

const listarPaciente = async (req,res) => {
    const id_medico = req.params.id_medico;

    const listar = await db.query("SELECT paciente.id as id, paciente.nome as nome, paciente.telefone as telefone from consultas INNER JOIN paciente ON consultas.id_paciente = paciente.id INNER JOIN usuario ON consultas.id_medico = usuario.id WHERE id_medico = ?", [id_medico]);

    res.send(listar[0]).end();
} 

const relatorio = async (req,res) => {
    const posts = await db.query("SELECT consultas.id, status, paciente.nome as nome_paciente, paciente.telefone as telefone, usuario.nome as nome_medico, usuario.especialidade as especialidade ,date(datahora), time(datahora) as hora FROM consultas INNER JOIN paciente ON consultas.id_paciente = paciente.id INNER JOIN usuario ON consultas.id_medico = usuario.id");

    const listar = await db.query ("SELECT especialidade, COUNT(consultas.id) as 'Total de Consultas' from consultas INNER JOIN usuario ON consultas.id_medico = usuario.id group by usuario.especialidade");

    const listar2 = await db.query("SELECT nome, COUNT(consultas.id) as 'Total de Consultas' from usuario INNER JOIN consultas ON  usuario.id = consultas.id_medico group by usuario.nome");

    res.send({
        consulta: posts[0],
        consultas_especialidade: listar[0],
        consultas_medico: listar2[0]}
    ).end();
}

module.exports = {
    listarconsultas,
    agendarConsulta,
    excluirConsulta,
    listarPaciente,
    relatorio
}