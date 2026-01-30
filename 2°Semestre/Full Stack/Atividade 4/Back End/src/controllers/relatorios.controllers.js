const db = require("../data/connection");

const primeiroRelatorio = async (req, res) => {
    const relatorio = await db.query("SELECT nome as oficina, count(inscricoes.id) as total_inscricoes from oficinas INNER JOIN inscricoes ON oficinas.id = inscricoes.id_oficina GROUP BY nome");

    res.send(relatorio[0]).status(200).end();
}

const segundoRelatorio = async (req, res) => {
    const relatorio = await db.query("SELECT categoria, count(inscricoes.id) as total_inscricoes from oficinas INNER JOIN inscricoes ON oficinas.id = inscricoes.id_oficina GROUP BY categoria");

    res.send(relatorio[0]).status(200).end();
}

module.exports = {
    primeiroRelatorio,
    segundoRelatorio
};