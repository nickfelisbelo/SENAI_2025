const db = require("../data/connection");

const listarAlunos = async (req, res) => {
    const lista = await db.query("SELECT * FROM alunos");
    res.json(lista[0]).end();
};

const cadastrarAluno = async (req, res) => {
    const {nome, turma} = req.body;
    if(nome === "" || turma === ""){
        res.send("Informações em branco").end();
    } else {
        const novoAluno = await db.query("INSERT INTO alunos VALUES (DEFAULT, ?, ?)", [nome, turma]);
        
        const aluno = {
            id: novoAluno[0].insertId,
            nome: nome,
            turma: turma
        };

        res.json(aluno).status(201).end();
    }
};

const excluirAluno = async (req, res) => {
    const idAluno = req.params.id;

    try{
        const delAluno = await db.query("DELETE FROM alunos WHERE id = ?", [idAluno]);

        const info = {msg:""};

        if(delAluno[0].affectedRows === 1){
            info.msg = "Excluido com Sucesso";
        } else if(delAluno[0].affectedRows === 0){
            info.msg = "Aluno não encontrado";
        }

        res.status(200).json(info).end();
    }catch(error){
        if(error.errno === 1451){
            res.send("Aluno está cadastrado em alguma oficina").status(500).end();
        }

        console.log(error);
    }
};

const atualizarAluno = async (req, res) => {
    const { nome, turma} = req.body;
    const id = req.params.id;
    
    try{
        const atualiza = await db.query("UPDATE alunos SET nome = ?, turma = ? WHERE id = ?", [nome, turma, id]);

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
    cadastrarAluno,
    excluirAluno,
    atualizarAluno
};