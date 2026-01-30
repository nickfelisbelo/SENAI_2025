/*
const - escopo global, valor não muda
let - escopo local, 
var - escopo global, pode ser reutilizada em qualquer parte do arquivo
typeof() - indica o tipo da variavel
*/
const numero = 100;
var nome = "Fulano";
var idade = 50;
var altura = 1.80;
var cnh = true;

console.log("Numero = "+ numero);
console.log("Nome - "+nome +" (" + typeof(nome) + ")");
console.log("Idade - "+idade + " (" + typeof(idade) + ")");
console.log("Altura - "+altura + " (" + typeof(altura) + ")");
console.log("CNH - "+ cnh + "("+typeof(cnh)+")")
/*
+soma
-subtração
/divisão
*multiplicação
%resto
*/
var a= 10;
var b = 10;

console.log(b**a);
for(let i = 0; i <= 10; i++){
    //console.log(i);
}
/*
==Igual
<Menor
>Maior
!=Diferente
<Menor ou Igual
>Maior ou Igual
=== estritamente igual
!== estritamente diferente
*/
if (a === b){
    console.log("São Iguais");
} else{
    console.log("São diferentes");
}

