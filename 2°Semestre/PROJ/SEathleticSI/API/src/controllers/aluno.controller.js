const db = require("../data/connection");

const listarAlunos = async (req, res) => {
    const lista = await db.query("SELECT * FROM aluno");
    res.json(lista[0]).end();
};

const buscarAluno = async (req, res) => {
    const idAluno = req.params.id;
    const aluno = await db.query("SELECT * FROM aluno WHERE id = " + idAluno);
    res.json(aluno[0][0]).end();
};

const cadastrarAluno = async (req, res) => {
    const {turma_id, nome, datanasc, serie, telefone} = req.body;
    const novoAluno = await db.query("INSERT INTO aluno VALUES (DEFAULT, ?, ?, ?, ?, ?)", [turma_id, nome, datanasc, serie, telefone]);

    const aluno = {
        id: novoAluno[0].insertId,
        nome: nome
    };

    res.json(aluno).status(201).end();
};

const excluirAluno = async (req, res) => {
    const idAluno = req.params.id;

    try{
        const delAluno = await db.query("DELETE FROM aluno WHERE id = ?", [idAluno]);

        const info = {msg:""};

        if(delAluno[0].affectedRows === 1){
            info.msg = "Excluido com Sucesso";
        } else if(delAluno[0].affectedRows === 0){
            info.msg = "Aluno não encontrado";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
    }
};

const atualizarAluno = async (req, res) => {
    const {id, turma_id, nome, datanasc, serie, telefone} = req.body;
    
    try{
        const atualiza = await db.query("UPDATE aluno SET turma_id = ?, nome = ?, datanasc = ?, serie = ?, telefone = ? WHERE id = ?", [turma_id, nome, datanasc, serie, telefone, id]);

        const info = {msg:""};

        if(atualiza[0].affectedRows === 0){
            info.msg = "Nenhum aluno encontrado";
        }else if(atualiza[0].affectedRows === 1){
            info.msg = "Aluno atualizado com sucesso";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
        
        res.status(500).end();
    }
};


module.exports = {
    listarAlunos,
    buscarAluno,
    cadastrarAluno,
    excluirAluno,
    atualizarAluno
};