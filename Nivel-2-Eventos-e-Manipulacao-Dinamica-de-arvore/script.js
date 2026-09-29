/* function addCarro() {
    const x = document.getElementById("myText").value;

    // Create an "li" node:
    const node = document.createElement("li");

    // Create a text node:
    const textnode = document.createTextNode(x);

    // Append the text node to the "li" node:
    node.appendChild(textnode);

    // Append the "li" node to the list:
    document.getElementById("listaCarros").appendChild(node);

    document.getElementById("myText").value = "";

} */


const campoVeiculo = document.getElementById("myText");
const botaoCadastrar = document.getElementById("btn-cadastrar");
const listaCarros = document.getElementById("listaCarros");

botaoCadastrar.addEventListener("click", function () {
  const matricula = campoVeiculo.value.trim();

  if (!matricula) return;

  const novoItem = document.createElement("li");
  novoItem.textContent = matricula;

  const botaoRemover = document.createElement("button");
  botaoRemover.type = "button";
  botaoRemover.textContent = "X";

  botaoRemover.addEventListener("click", function () {
    novoItem.remove();
  });

  novoItem.appendChild(botaoRemover);
  listaCarros.appendChild(novoItem);

  campoVeiculo.value = "";
  campoVeiculo.focus();
});