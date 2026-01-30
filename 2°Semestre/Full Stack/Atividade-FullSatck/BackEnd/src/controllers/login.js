const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const cadastrarMedico = async (req,res) => {
    const { nome, senha, cargo, especialidade} = req.body;

    // Cria uma hash MD5 em hexadecimal
    const novasenha = crypto.createHash("md5").update(senha).digest("hex").toString();

    const novoUsuario = await db.query("INSERT INTO usuario VALUES (DEFAULT, ?, ?, 'Medico', ?)", [nome, especialidade, novasenha]);

    res.send({
        id: novoUsuario[0].insertId,
        nome: nome,
        especialidade: especialidade,
        cargo: cargo
    }).end();
}

const excluirMedico = async (req,res) => {
    const id = req.params.id;

    const excluir = await db.query("DELETE FROM usuario WHERE id = "+ id);

    if(excluir[0].affectedRows == 1){
        res.send("excluido com sucesso").end();
    }
    if(excluir[0].affectedRows == 0){
        res.send("Nada encontrado").end();
    }
};

const cadastrarPaciente = async (req, res) => {
    const { nome, telefone } = req.body;

    try{
        const novoPaciente = await db.query('INSERT INTO paciente VALUES (DEFAULT, ?, ?)', [nome, telefone]);

        res.send({
            id: novoPaciente[0].insertId,
            nome: nome,
            telefone: telefone
        }).end();
    } catch(error){
        console.log(error);
    }
}

const cadastrarLogin = async (req,res) => {
    const { nome, senha, cargo, especialidade} = req.body;

    // Cria uma hash MD5 em hexadecimal
    const novasenha = crypto.createHash("md5").update(senha).digest("hex").toString();

    const novoUsuario = await db.query("INSERT INTO usuario VALUES (DEFAULT, ?, ?, ?, ?)", [nome, especialidade, cargo, novasenha]);

    res.send({
        id: novoUsuario[0].insertId,
        nome: nome,
        especialidade: especialidade,
        cargo: cargo,
    }).end();
}


const Login = async (req, res) => {
    const { nome, senha } = req.body;
    
    try {
        const senhahash = crypto.createHash("md5").update(senha).digest("hex").toString();
        
        const usuario = await db.query("SELECT * FROM usuario WHERE nome = ? AND senha = ?", [nome, senhahash]);

        if(usuario[0].length == 0) res.status(401).send({message:'Name or Password incorrect !'});

        const token = jsonwebtoken.sign(
            {
                id: usuario[0][0].id,
                nome: usuario[0][0].nome,
                cargo: usuario[0][0].cargo
            },
            process.env.SECRET_JWT,
            { expiresIn: "60min" }
        );


        res.status(200).json({ token : token }).end();
    }catch(err) {
        console.log(err);
        res.status(500).send(err).end();
    }
    
    res.status(200).end();
};

const excluirPaciente = async (req,res) => {
    const id = req.params.id;

    const excluir = await db.query("DELETE FROM paciente WHERE id = "+ id);

    if(excluir[0].affectedRows == 1){
        res.send("excluido com sucesso").end();
    }
    if(excluir[0].affectedRows == 0){
        res.send("Nada encontrado").end();
    }
};

module.exports = {
    Login,
    cadastrarMedico,
    excluirMedico,
    cadastrarPaciente,
    excluirPaciente,
    cadastrarLogin
}