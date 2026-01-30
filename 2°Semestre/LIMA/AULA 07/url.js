const imagem = ["https://blog.polipet.com.br/wp-content/uploads/2024/01/pato-445x445.jpeg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeef8p_4V2w_LzC5QV0yu0wQ7q_UHK_O__SINXDgmzR0J3qL6V-iXZfDwx9oL8_P4OFD-_MRjVaCp9gar4Llmc-wuL8qvoaz6glqRiaQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeU_EiwdmB4FgBp6D7nOWkaWtThVmY4BdzgA&s"]
const desc = ["pato", "coelho", "Vagabond"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    let url = "url('" + imagem[randomNumber]  + "')";
    document.body.style.backgroundImage = url;
    color.textContent = desc[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * imagem.length);
}
