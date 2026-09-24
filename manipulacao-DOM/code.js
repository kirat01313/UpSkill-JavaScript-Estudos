const idPrincipal = document.getElementById("nome-condutor");
const statusPrimeiro = document.querySelector(".status-veiculo");
const infracoesTodas = document.querySelectorAll("li")

console.log(idPrincipal);
console.log(statusPrimeiro);
console.log(infracoesTodas);

console.log(infracoesTodas[2].textContent);


const corpo = document.body;

function changeTeme () {

    corpo.classList.toggle('dark') ? document.getElementById("button1").textContent = "Tema Claro" : document.getElementById("button1").textContent = "Tema Escuro"

    
}

function addMulta() {
  document.getElementById("button2").textContent = "Multa enviada";
  const alterarBG = document.getElementById("cartao-veiculo");
  alterarBG.classList.add("bg-danger");
}


