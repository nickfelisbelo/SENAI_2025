const db = require("../data/connection");

const listarInscricoes = async (req, res) => {
    const lista = await db.query("SELECT * FROM inscricoes");
    res.json(lista[0]).end();
};

const cadastrarInscricao = async (req, res) => {
    const {data_inscricao, id_aluno, id_oficina} = req.body;

    if(data_inscricao === "" || id_aluno === "" || id_oficina === ""){
        res.send("Alguma informação está em branco").end();
    } else{
        const novaInscricao = await db.query("INSERT INTO inscricoes VALUES (DEFAULT, ?, ?, ?)", [data_inscricao, id_aluno, id_oficina]);
        
        const inscricao = {
            id: novaInscricao[0].insertId,
            data: data_inscricao,
            id_aluno: id_aluno,
            id_oficina: id_oficina
        };

        res.json(inscricao).status(201).end();
    }
};

const excluirInscricao = async (req, res) => {
    const idInscricao = req.params.id;

    try{
        const delInscricao = await db.query("DELETE FROM inscricoes WHERE id = ?", [idInscricao]);

        const info = {msg:""};

        if(delInscricao[0].affectedRows === 1){
            info.msg = "Excluido com Sucesso";
        } else if(delInscricao[0].affectedRows === 0){
            info.msg = "Inscricao não encontrado";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
    }
};

const atualizarInscricao = async (req, res) => {
    const {data_incricao, id_aluno, id_oficina} = req.body;
    const id = req.params.id;
    
    try{
        const atualiza = await db.query("UPDATE inscricoes SET data_inscricao = ?, id_aluno = ?, id_oficina = ? WHERE id = ?", [data_incricao, id_aluno, id_oficina, id]);

        const info = {msg:""};

        if(atualiza[0].affectedRows === 0){
            info.msg = "Nenhuma inscricao encontrada";
        }else if(atualiza[0].affectedRows === 1){
            info.msg = "Inscricao atualizada com sucesso";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
        if(error.errno === 1452){
            res.status(500).send("Aluno ou Oficina não existem").end();
        }
    }
};

module.exports = {
    listarInscricoes,
    cadastrarInscricao,
    excluirInscricao,
    atualizarInscricao
};