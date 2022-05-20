//slider
const inicio = document.querySelector("#inicio");
const final = document.querySelector("#final");
const passo = document.querySelector("#passo");
const valor = document.querySelector(".valor");
const valor2 = document.querySelector(".valor2");
const valor3 = document.querySelector(".valor3");
valor.textContent = inicio.value
valor2.textContent = final.value
valor3.textContent = passo.value

inicio.oninput = function () {
    valor.textContent = this.value
}
final.oninput = function () {
    valor2.textContent = this.value
}
passo.oninput = function () {
    valor3.textContent = this.value
}
//buttons
const texto = document.querySelector('textarea');
// crescente
function btnCresc() {
    const texto = document.querySelector("#texto");
   
    if (inicio.value.length <= final.value.length) {
        for (let i = Number(inicio.value); i <= Number(final.value); i += Number(passo.value)){
        
            texto.innerHTML +=`${i} `
        }      
    } else{
        alert("[ERRO] Inicio não pode ser maior que o final");  
    }
}
// decrescente
function btnDesc() {
    const texto = document.querySelector("#texto");
    
    if (final.value.length <= inicio.value.length) {
        for (let i = Number(inicio.value); i >= Number(final.value); i-= Number(passo.value)){
           texto.innerHTML += `${i} `
       }
    } else {
        alert("[ERRO] Final não pode ser maior que o inicio");
    }
}
//apagar
function apagar() {
    const texto = document.querySelector("#texto");
    texto.innerHTML = ""
}

