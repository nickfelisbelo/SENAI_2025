const validaGerente = (req, res, next) => {
    const cargo = req.headers['user'].cargo;

    if(cargo === "GERENTE"){
        next();
    } else{
        res.status(201).send("Sem nível de acesso").end();
    }
};

const validaSupervisor = (req, res, next) => {
    const cargo = req.headers['user'].cargo;

    if(cargo === "SUPERVISOR"){
        next();
    } else{
        res.status(201).send("Sem nivel de acesso").end();
    }
};

module.exports = {
    validaGerente,
    validaSupervisor
};