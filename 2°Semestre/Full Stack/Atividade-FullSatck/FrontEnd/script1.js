const btnFiltrar = document.querySelector("#filtrar");

const consultas = [
  {
    "id": 1,
    "paciente_nome": "Ana Costa",
    "telefone": "(11) 99999-1234",
    "medico_nome": "Dra. Camila",
    "especialidade": "Cardiologia",
    "data": "2024-09-25",
    "hora": "14:00",
    "status": "agendada"
  },
  {
    "id": 2,
    "paciente_nome": "Jose Silva",
    "telefone": "(11) 98888-5678",
    "medico_nome": "Dr. Rodrigo",
    "especialidade": "Clinico Geral",
    "data": "2024-09-26",
    "hora": "09:30",
    "status": "finalizada"
  },
  {
    "id": 3,
    "paciente_nome": "Maria Lima",
    "telefone": "(11) 97777-4321",
    "medico_nome": "Dra. Camila",
    "especialidade": "Cardiologia",
    "data": "2024-09-27",
    "hora": "10:15",
    "status": "em andamento"
  },
  {
    "id": 4,
    "paciente_nome": "Carlos Pereira",
    "telefone": "(11) 96666-1111",
    "medico_nome": "Dr. Rodrigo",
    "especialidade": "Clinico Geral",
    "data": "2024-09-28",
    "hora": "15:00",
    "status": "agendada"
  },
  {
    "id": 5,
    "paciente_nome": "Julia Souza",
    "telefone": "(11) 95555-8888",
    "medico_nome": "Dr. Bruno",
    "especialidade": "Ortopedia",
    "data": "2024-09-29",
    "hora": "13:45",
    "status": "agendada"
  }
];

const card = document.querySelector(".box");
const main = document.querySelector("main");

consultas.forEach((consulta) =>{
    let novoCard = card.cloneNode(true);

    novoCard.querySelector(".id").innerHTML = consulta.id;
    novoCard.querySelector(".paciente").innerHTML = consulta.paciente_nome;
    novoCard.querySelector(".telefone").innerHTML = consulta.telefone;
    novoCard.querySelector(".medico").innerHTML = consulta.medico_nome;
    novoCard.querySelector(".especialidade").innerHTML = consulta.especialidade;
    novoCard.querySelector(".data").innerHTML = consulta.data;
    novoCard.querySelector(".hora").innerHTML = consulta.hora;
    novoCard.querySelector(".status").innerHTML = consulta.status;

    main.appendChild(novoCard);
});


btnFiltrar.addEventListener("click", (event) => {
    event.preventDefault();

    main.childNodes.forEach(box => {
        if(box.innerHTML){
            const boxCat = box.querySelector(".especialidade").innerHTML;
            if(boxCat !== boxCat){
              
            }
          }
    });
});
