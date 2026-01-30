let count = 0;

const valor = document.querySelector("#valor");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("menos")){
            count -= 5;
        } 
        else if(styles.contains("mais")){
            count+= 5;
        }
        else{
            count = 0;
        }

        if(count > 0){
            valor.style.color = "lightgreen";
        } 
        else if(count < 0){
            valor.style.color = "pink";
        } 
        else{
            valor.style.color = '#222';
        }

        document.body.style.backgroundColor = 'rgb('+count+',100,200)';

        // if(count == 0){
        //     document.body.style.backgroundColor = '#f1f5f8'
        // }
        // if(count > 0 && count <= 10){
        //     document.body.style.backgroundColor = "green";
        // }
        // else if(count > 10 && count <=20){
        //     document.body.style.backgroundColor = "pink";
        // }
        // else if(count > 20 && count <=30){
        //     document.body.style.backgroundColor = "blue";
        // }
        // else if(count > 30 && count <=40){
        //     document.body.style.backgroundColor = "red";
        // }
        // else if(count > 40 && count <=50){
        //     document.body.style.backgroundColor = "aliceblue";
        // }
        valor.textContent = count;
    });

});