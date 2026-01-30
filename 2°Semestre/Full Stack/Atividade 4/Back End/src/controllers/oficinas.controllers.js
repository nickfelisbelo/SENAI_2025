const db = require("../data/connection");

const listarOficinas = async (req, res) => {
    const lista = await db.query("SELECT * FROM oficinas");
    res.json(lista[0]).end();
};

const cadastrarOficina = async (req, res) => {
    const {nome, categoria, vagas} = req.body;

    if(nome === "" || categoria === "" || vagas === ""){
        res.send("Insformações faltando").end();
    }
    else{
        if(vagas < 1){
            res.send("Para cadastrar uma oficina é necessario ao menos 1 vaga").status(500).end();
        } else{
            const novaOficina = await db.query("INSERT INTO oficinas VALUES (DEFAULT, ?, ?, ?)", [nome, categoria, vagas]);
            const oficina = {
                id: novaOficina[0].insertId,
                nome: nome,
                categoria: categoria,
                vagas: vagas
            };

            res.json(oficina).status(201).end();
        }
    }
};

const excluirOficina = async (req, res) => {
    const idOficina = req.params.id;

    try{
        const delOficina = await db.query("DELETE FROM oficinas WHERE id = ?", [idOficina]);

        const info = {msg:""};

        if(delOficina[0].affectedRows === 1){
            info.msg = "Excluido com Sucesso";
        } else if(delAluno[0].affectedRows === 0){
            info.msg = "Aluno não encontrado";
        }

        res.status(200).json(info).end();
    }catch(error){
        if(error.errno === 1451){
            res.status(500).send("Não é possível excluir esta Oficina, pois há um aluno cadastrado nela").end();
        }

        console.log(error);
    }
};

const atualizarOficina = async (req, res) => {
    const {nome, categoria, vagas} = req.body;
    const id = req.params.id;
    
    try{
        const atualiza = await db.query("UPDATE oficinas SET nome = ?, categoria = ?, vagas = ? WHERE id = ?", [nome, categoria, vagas, id]);

        const info = {msg:""};

        if(atualiza[0].affectedRows === 0){
            info.msg = "Nenhuma oficina encontrada";
        }else if(atualiza[0].affectedRows === 1){
            info.msg = "Oficina atualizada com sucesso";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
        
        res.status(500).end();
    }
};

module.exports = {
    listarOficinas,
    cadastrarOficina,
    excluirOficina,
    atualizarOficina
};