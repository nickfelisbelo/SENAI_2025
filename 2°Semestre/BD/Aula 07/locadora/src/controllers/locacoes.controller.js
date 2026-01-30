const db = require("../data/connection");

const listarLocacoes = async (req, res) => {
    const lista = await db.query("SELECT * FROM locacoes");
    res.json(lista[0]).end();
};

const buscarLocacao = async (req, res) => {
    const idLocacao = req.params.id;
    const locacao = await db.query("SELECT * FROM locacoes WHERE id = " + idLocacao);
    res.json(locacao[0][0]).end();
};

const cadastrarLocacao = async (req, res) => {
    const {cliente_id, filme_id, data_locacao, status, preco} = req.body;

    try{
        const novaLocacao = await db.query("INSERT INTO locacoes VALUES (DEFAULT, ?, ?, ?, ?, ?)", [cliente_id, filme_id, data_locacao, status, preco]);

        const locacao = {
            cliente : cliente_id,
            filme : filme_id,
            preco: preco
        };

        res.json(locacao).status(201).end();
    }catch(error){
        const info = {msg:""};

        if(error.errno === 1452){
            info.msg = "Usuario ou Filme não está cadastrado";
        }
        res.status(500).json(info).end();
    }
};

const excluirLocacao = async (req, res) => {
    const idLocacao = req.params.id;

    try{
        const delLocacao = await db.query("DELETE FROM locacoes WHERE id = ?", [idLocacao]);

        const info = {msg:""};

        if(delLocacao[0].affectedRows === 1){
            info.msg = "Excluido com Sucesso";
        } else if(delLocacao[0].affectedRows === 0){
            info.msg = "Locacão não encontrada";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
    }
};

const atualizarLocacao = async (req, res) => {
    const {id, cliente_id, filme_id, data_locacao, status, preco} = req.body;
    
    try{
        const atualiza = await db.query("UPDATE locacoes SET cliente_id = ?, filme_id = ?, data_locacao = ?, status = ?, preco = ? WHERE id = ?", [cliente_id, filme_id, data_locacao, status, preco, id]);

        const info = {msg:""};

        if(atualiza[0].affectedRows === 0){
            info.msg = "Nenhuma locacao encontrada";
        }else if(atualiza[0].affectedRows === 1){
            info.msg = "Locacao atualizada com sucesso";
        }

        res.status(200).json(info).end();
    }catch(error){
        // console.log(error);

        // if(errno === 1064){

        // }
        
        res.status(500).end();
    }
};

const listarId = async (req, res) => {
    try{
        const idCliente = req.params.cliente_id;
        const locacoes = await db.query("SELECT * FROM locacoes WHERE cliente_id = " + idCliente);
        res.json(locacoes[0]).end();
    }
    catch(error){
        console.log(error);
        const info = {msg: ""};
        if(error.errno === 1054){
            info.msg = "Erro na minha syntax, sorry";
        }
        res.status(500).end();
    }
}

const listarStatus = async (req, res) => {
    try{
        const statusLocacao = req.params.status;
        const locacoes = await db.query("SELECT * FROM locacoes WHERE status = ?", [statusLocacao]);
        res.json(locacoes[0]).end();
    } catch(error){
        console.log(error);
        const info = {msg: ""};
        if(error.errno === 1054){
            info.msg = "ERRO";
        } 
        res.json(info).end();
    }
}

const faturamentoLocacoes = async (req, res) => {
    try{
        const faturar = await db.query("SELECT SUM(filmes.preco) AS faturamento FROM locacoes INNER JOIN filmes ON locacoes.filme_id = filmes.id");
        res.json(faturar[0]).end();
    } catch(error){
        console.log(error);
    }
} 

const faturamentoLocacoesStatus = async (req, res) => {
    try{
        const locacoes = await db.query("SELECT status ,SUM(filmes.preco) AS faturamento_status FROM locacoes INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY status");
        res.json(locacoes[0]).end();
    } catch(error){
        console.log(error);
        const info = {msg: ""};
        if(error.errno === 1054){
            info.msg = "ERRO";
        } 
        res.json(info).end();
    }
}

const faturamentoLocacoesMes = async (req, res) => {
    try{
        const dataLocacao = req.params.data_locacao;
        const locacoes = await db.query("SELECT SUM(filmes.preco) AS faturamento_mes FROM locacoes INNER JOIN filmes ON locacoes.filme_id = filmes.id WHERE MONTH(data_locacao) = ?", [dataLocacao]);
        res.json(locacoes[0]).end();
    } catch(error){
        console.log(error);
        const info = {msg: ""};
        if(error.errno === 1054){
            info.msg = "ERRO";
        } 
        res.json(info).end();
    }
}

const faturamentoLocacoesMeses = async (req, res) => {
    try{
        const locacoes = await db.query("SELECT MONTH(data_locacao) AS 'Mês',SUM(filmes.preco) AS faturamento_mes FROM locacoes INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY MONTH(data_locacao)");
        res.json(locacoes[0]).end();
    } catch(error){
        console.log(error);
        const info = {msg: ""};
        if(error.errno === 1054){
            info.msg = "ERRO";
        } 
        res.json(info).end();
    }
}

module.exports = {
    listarLocacoes,
    buscarLocacao,
    cadastrarLocacao,
    excluirLocacao,
    atualizarLocacao,
    listarId,
    listarStatus,
    faturamentoLocacoes,
    faturamentoLocacoesStatus,
    faturamentoLocacoesMes,
    faturamentoLocacoesMeses
};