import * as Publicacao from "../../../models/NoticiasEventosModel.js";

function atividadeNovo() {
  Publicacao.init();

  document
    .querySelector("#formAtividade")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const titulo = document.querySelector("#titulo").value;
      const sub_titulo = document.querySelector("#subTitulo").value;
      const descricao = document.querySelector("#descricao").value;
      const tipo = document.querySelector("#tipo").value;
      const file = document.querySelector("#file").value;
      const date = new Date();
      const data = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      try {
        Publicacao.add(titulo, sub_titulo, file, descricao, data, tipo, "N");
        displayMessage("Atividade adicionada com sucesso!", "success");
        setTimeout(() => {
          window.location.href = "/html/admin/atividades/atividades.html";
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

atividadeNovo();
