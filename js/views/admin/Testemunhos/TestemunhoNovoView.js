import * as Testemunho from "../../../models/TestemunhosModel.js";

function testemunhoNovo() {
  Testemunho.init();

  document
    .querySelector("#formTestemunho")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const titulo = document.querySelector("#titulo").value;
      const sub_titulo = document.querySelector("#subTitulo").value;
      const descricao = document.querySelector("#descricao").value;
      const file = document.querySelector("#file").value;
      const data = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
      try {
        Testemunho.add(titulo, sub_titulo, file, descricao, data, "N");
        displayMessage("Testemunho adicionado com sucesso!", "success");
        setTimeout(() => {
          window.location.href = "/html/admin/testemunhos/testemunhos.html";
        }, 1000);
      } catch (e) {
        displayMessage(e.message, "danger");
      }
    });
}

function displayMessage(message, type) {
  const divMessage = document.querySelector("#msg");
  divMessage.innerHTML = `
        <div class='alert alert-${type}' role='alert'>${message}</div>
    `;
  setTimeout(() => {
    divMessage.innerHTML = "";
  }, 2000);
}

testemunhoNovo();
