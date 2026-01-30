const selectStatus = document.querySelector("#status");
const btnBuscar = document.querySelector("#buscar");

const chamados = [
    {
        "id": 1,
        "titulo": "Erro ao gerar relatório financeiro",
        "solicitante": "Ana Souza",
        "prioridade": "Alta",
        "status": "Aberto",
        "data": "2025-10-20"
    },
    {
        "id": 2,
        "titulo": "Computador não liga após atualização",
        "solicitante": "Carlos Lima",
        "prioridade": "Média",
        "status": "Em andamento",
        "data": "2025-10-18"
    },
    {
        "id": 3,
        "titulo": "Problema na conexão Wi-Fi do escritório",
        "solicitante": "Marina Dias",
        "prioridade": "Baixa",
        "status": "Resolvido",
        "data": "2025-10-15"
    },
    {
        "id": 4,
        "titulo": "Sistema trava ao fazer login",
        "solicitante": "Rafael Santos",
        "prioridade": "Alta",
        "status": "Aberto",
        "data": "2025-10-22"
    },
    {
        "id": 5,
        "titulo": "Solicitação de novo e-mail corporativo",
        "solicitante": "Beatriz Melo",
        "prioridade": "Baixa",
        "status": "Em andamento",
        "data": "2025-10-19"
    },
    {
        "id": 6,
        "titulo": "Erro 404 ao acessar portal interno",
        "solicitante": "João Ferreira",
        "prioridade": "Média",
        "status": "Resolvido",
        "data": "2025-10-17"
    },
    {
        "id": 7,
        "titulo": "Impressora não aparece na rede",
        "solicitante": "Larissa Costa",
        "prioridade": "Média",
        "status": "Aberto",
        "data": "2025-10-23"
    },
    {
        "id": 8,
        "titulo": "Reset de senha de acesso ao sistema",
        "solicitante": "Felipe Nogueira",
        "prioridade": "Baixa",
        "status": "Resolvido",
        "data": "2025-10-14"
    }
];


const tr = document.querySelector("#lista");
const tbody = document.querySelector("tbody")

chamados.forEach((chamado) => {
    let novoCard = tr.cloneNode(true);

    novoCard.querySelector("#idChamado").innerHTML = chamado.id;
    novoCard.querySelector("#titulo").innerHTML = chamado.titulo;
    novoCard.querySelector("#solicitante").innerHTML = chamado.solicitante;
    novoCard.querySelector("#prioridade").innerHTML = chamado.prioridade;
    novoCard.querySelector("#status2").innerHTML = chamado.status;
    novoCard.querySelector("#data").innerHTML = chamado.data;

    tbody.appendChild(novoCard);
});

// const  = document.querySelector("main");

btnBuscar.addEventListener("click", (event) => {
    event.preventDefault();

    const statusSel = selectStatus.value;

    tbody.childNodes.forEach(line => {
        if (line.innerHTML) {
            const lineSta = line.querySelector("#status2").innerHTML;

            console.log(line);

            if (statusSel == 0 || statusSel === lineSta) {
                line.style.display = "table-row";
            } else {
                line.style.display = "none";
            }
        }
    })
});

const pesquisar = document.querySelector("#pesquisar");

pesquisar.addEventListener("keyup", (element) => {
    tbody.childNodes.forEach((line) => {
        const conteudo = line.innerHTML;
        if(conteudo) {
            const nome = line.querySelector("#titulo").innerHTML;
            if(nome.toLowerCase().includes(pesquisar.value.toLowerCase())){
                line.style.display = "table-row";
            } else {
                line.style.display = "none";
            };
        };
    })
});

const buscarData = document.querySelector("#buscarData");

pesquisar.addEventListener("click", (element) => {
    tbody.childNodes.forEach((line) => {
        const conteudo = line.innerHTML;
        if(conteudo) {
            const data = line.querySelector("#data").innerHTML;
            if(data.includes(pesquisar.value)){
                line.style.display = "table-row";
            } else {
                line.style.display = "none";
            };
        };
    })
});