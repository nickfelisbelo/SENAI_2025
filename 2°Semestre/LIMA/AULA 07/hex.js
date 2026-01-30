const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d","e","f"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let colorRandom = "#";
    for(let i = 0; i < 6; i++){
        colorRandom += hex[getRandomDigito()];
    }
    document.body.style.backgroundColor = colorRandom;
    color.textContent = colorRandom;
})

function getRandomDigito(){
    return Math.floor(Math.random() * hex.length);
}