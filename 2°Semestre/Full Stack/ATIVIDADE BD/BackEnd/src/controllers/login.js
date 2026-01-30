const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const cadastrarVeiculos = async (req, res) => {
    const {placa, modelo, localizacao} = req.body;

    try{
    const novaplaca = crypto.createHash("md5").update(placa).digest("hex").toString();

    const cadastrar = await db.query ("INSERT INTO veiculo VALUES(?, ?, ?)", [novaplaca, modelo, localizacao]);

    res.send({
        placa: placa,
        modelo: modelo,
        localizacao: localizacao
    }).end();
    } catch(error){
        console.log(error);
    }
}

const Login = async (req, res) => {
    const { modelo, placa } = req.body;
    
    try {
        const senhahash = crypto.createHash("MD5").update(placa).digest("hex").toString();

            const veiculo = await db.query("SELECT * FROM veiculo WHERE modelo = ? AND placa = ?", [modelo, senhahash]);

            if([0].length == 0) res.status(401).send({message:'Modelo ou Placa incorretos !'});

            const token = jsonwebtoken.sign(
                {
                    modelo: veiculo.modelo,
                    placa: veiculo.placa
                },
                process.env.SECRET_JWT,
                { expiresIn: "60min" }
            );


            res.status(200).json({ token : token }).end();
    }catch(error) {
        console.log(error);
        res.status(500).send(error).end();
    }
    
    res.status(200).end();
};

module.exports = {
    Login,
    cadastrarVeiculos
}