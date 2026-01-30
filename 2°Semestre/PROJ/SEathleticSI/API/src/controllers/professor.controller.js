const db = require("../data/connection");

const listarProfessores = async (req, res) => {
    const lista = await db.query("SELECT * FROM professor");
    res.json(lista[0]).end();
};

const buscarProfessor = async (req, res) => {
    const idProfessor = req.params.id;
    const professor = await db.query("SELECT * FROM professor WHERE id = " + idProfessor);
    res.json(professor[0][0]).end();
};

const cadastrarProfessor = async (req, res) => {
    const { nome, especialidade, telefone } = req.body;
    const novoProfessor = await db.query("INSERT INTO professor VALUES (DEFAULT, ?, ?, ?)", [nome, especialidade, telefone]);

    const professor = {
        id: novoProfessor[0].insertId,
        nome: nome
    };

    res.json(professor).status(201).end();
};

const excluirProfessor = async (req, res) => {
    const idProfessor = req.params.id;

    try{
        const delAluno = await db.query("DELETE FROM professor WHERE id = ?", [idProfessor]);

        const info = {msg:""};

        if(delAluno[0].affectedRows === 1){
            info.msg = "Excluido com Sucesso";
        } else if(delAluno[0].affectedRows === 0){
            info.msg = "Professor não encontrado";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
    }
};

const atualizarProfessor = async (req, res) => {
    const { nome, especialidade, telefone } = req.body;
    const id = req.params.id;
    
    try{
        const atualiza = await db.query("UPDATE professor SET nome = ?, especialidade = ?, telefone = ? WHERE id = ?", [ nome, especialidade, telefone, id]);

        const info = {msg:""};

        if(atualiza[0].affectedRows === 0){
            info.msg = "Nenhum professor encontrado";
        }else if(atualiza[0].affectedRows === 1){
            info.msg = "Professor atualizado com sucesso";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
        
        res.status(500).end();
    }
};


module.exports = {
    listarProfessores,
    buscarProfessor,
    cadastrarProfessor,
    excluirProfessor,
    atualizarProfessor
};