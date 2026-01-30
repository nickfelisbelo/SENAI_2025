const validaAmbos = (req, res, next) => {
    const cargo = req.headers['user'].cargo;

    if(cargo == "Atendente" || cargo == "Administrador"){
        next();
    } else{
        res.status(201).send("Sem nível de acesso").end();
    }
};

const validaAdministrador = (req, res, next) => {
    const cargo = req.headers['user'].cargo;

    if(cargo == "Administrador"){
        next();
    } else{
        res.status(201).send("Sem nivel de acesso").end();
    }
};

const validaAtendente = (req, res, next) => {
    const cargo = req.headers['user'].cargo;

    if(cargo == "Atendente"){
        next();
    } else{
        res.status(201).send("Sem nivel de acesso").end();
    }
};

const validaMedico = (req, res, next) => {
    const cargo = req.headers['user'].cargo;

    if(cargo == "Medico"){
        next();
    } else{
        res.status(201).send("Sem nivel de acesso").end();
    }
}

module.exports = {
    validaAmbos,
    validaAdministrador,
    validaAtendente,
    validaMedico
};