const db = require("../data/connection");

const listarposts = async (req, res) => {
    const posts = await db.query("SELECT * FROM posts");
    res.status(200).send(posts[0]).end();
}

const cadastrarpost = async (req, res) => {
    const { titulo, conteudo } = req.body;
    const id_usuario = req.headers['user'].id;

    const novopost = await db.query("INSERT INTO posts VALUES (DEFAULT, ?, ?, ?)", [titulo, conteudo, id_usuario]);

    res.send({
        id: novopost[0].insertId,
        titulo: titulo,
        conteudo: conteudo
    }).end();
};

const excluirPost = async (req, res) => {
    const id = req.params.id

    const excluir = await db.query("DELETE FROM posts WHERE id = ?", id);
    res.send("Excluido com Sucesso").end();
}

const atualizarPost = async (req, res) => {
    const id = req.params.id;
    const { titulo, conteudo, id_usuario } = req.body;

    try {
        const atualizar = await db.query("UPDATE posts SET titulo = ?, conteudo = ?, id_usuario = ? WHERE id = ?", [titulo, conteudo, id_usuario, id]);

        res.send({
            titulo: titulo,
            conteudo: conteudo
        }).end();
    } catch (err) {
        console.log(err);
        res.status(500).send(err).end();
    }

};

module.exports = {
    listarposts,
    cadastrarpost,
    excluirPost,
    atualizarPost
}