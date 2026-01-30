const alunos = [
    {
        "nome": "Aluno 2",
        "turma": "Turma 1",
        "disciplina": "Disciplina 1",
        "media": 5
    },
    {
        "nome": "Aluno 3",
        "turma": "Turma 2",
        "disciplina": "Disciplina 2",
        "media": 7
    },
    {
        "nome": "Aluno 4",
        "turma": "Turma 3",
        "disciplina": "Disciplina 3",
        "media": 9
    }
];

const card = document.querySelector(".aluno");
const main = document.querySelector("main");

alunos.forEach((aluno) =>{
    let novoCard = card.cloneNode(true);
    
    novoCard.querySelector("#nome").innerHTML = aluno.nome;
    novoCard.querySelector("#turma").innerHTML = aluno.turma;
    novoCard.querySelector("#disciplina").innerHTML = aluno.disciplina;
    novoCard.querySelector("#media").innerHTML = aluno.media;

    
    if(aluno.media >= 7){
        novoCard.style.backgroundColor = "greenyellow";
    } else {
        novoCard.style.backgroundColor = "red";
    }

    main.appendChild(novoCard);
});