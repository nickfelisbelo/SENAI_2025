const selectCategoria = document.querySelector("#categoria");
const inputValor = document.querySelector("#valor");
const btnFiltrar = document.querySelector("#filtrar");

const btnMenu = document.querySelector('#btn-menu');
const menuLateral = document.querySelector('#menu-lateral');

btnMenu.addEventListener("click", () => {
    if(menuLateral.style.left === "" || menuLateral.style.left === "-200px"){
        menuLateral.style.left = "0";
    }
    else{
        menuLateral.style.left = "-200px";
    }
});



const produtos = [
    {
        imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQcgXs8wQhrA7hUAZcCUWvwrun5LtqGq_4EnxUXi848luvgrUyHZDTbz--CNU0RMS6x65bZZsuFEv1XahlM0fJN0Q_hHhihzz1anGsOkQ",
        nome: "tarantula",
        valor: 500,
        categoria: "Peluda"
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Me6vunQpuWsKVnIPt5RkUtBlNpZ0GKgqgCQVkW3hjlttHKaawUpet8J8W4x1iYkL_fjw6IjHBHLqJJ74sWKO7dwL4uwZItgeyEwmykI",
        nome: "viuva negra",
        valor: 600,
        categoria: "Normal"
    },
    {
        imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5dxhTSvGH1Xw26e_G3rUQGhlKQGRvv8JSVX0tpMa7byDi-0r2PGqzI83pPZ6YfzK3qGtZuNUBDSrBdA-Sb1S7PWaq5ASVZ6gTuhj63g",
        nome: "aranha armadeira",
        valor: 700,
        categoria: "Peluda"
    }
];

const card = document.querySelector(".box");
const main = document.querySelector("main");

var valormaximo = 0;
produtos.forEach((produto) =>{
    let novoCard = card.cloneNode(true);

    novoCard.querySelector("img").src = produto.imagem;
    novoCard.querySelector("p").innerHTML = produto.nome;
    novoCard.querySelector(".valor").innerHTML = "R$ " + produto.valor;
    novoCard.querySelector(".categoria").innerHTML = produto.categoria

    main.appendChild(novoCard);

    if(produto.valor > valormaximo){
        valormaximo = Math.round(produto.valor);
    }
});
inputValor.max = valormaximo;

const busca = document.querySelector("#busca");

busca.addEventListener("keyup", (element) => {
    main.childNodes.forEach((box) => {
        const conteudo = box.innerHTML;
        if(conteudo) {
            const nome = box.querySelector(".nome").innerHTML;
            if(nome.toLowerCase().includes(busca.value.toLowerCase())){
                box.style.display = "block";
            } else {
                box.style.display = "none";
            };
        };
    })
});


btnFiltrar.addEventListener("click", (event) => {
    event.preventDefault();

    const catSel = selectCategoria.value;
    const valSel = inputValor.value;

    main.childNodes.forEach(box => {
        if(box.innerHTML){
            const boxCat = box.querySelector(".categoria").innerHTML;
            const valBox = Number(box.querySelector(".valor").innerHTML.split(" ")[1]);
            //boxVal -> ["R$", "400"];

                if((catSel == 0 || boxCat === catSel) && (valSel == 0 || valBox <= valSel)){
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
        }
    })
});


inputValor.addEventListener("change", () => {
    document.querySelector("#spVal").innerHTML = "R$" + inputValor.value;
})