import * as Premio from "../../../models/PremiosModel.js";

function premioNovo() {
  Premio.init();
  document.querySelector("#formGamificacao").addEventListener("submit", (event) => {
    event.preventDefault();

    const titulo = document.querySelector("#titulo").value.trim();
    const img_bloq = document.querySelector("#img_bloq").value.trim();
    const img_desbloq = document.querySelector("#img_desbloq").value.trim();
    const progresso = document.querySelector("#progresso").value.trim();
    const tipo = document.querySelector("#tipoJogo").value;

    if (!titulo || !img_bloq || !img_desbloq || !progresso || !tipo) {
      displayMessage("Todos os campos devem ser preenchidos!", "danger");
      return;
    }

    try {
      Premio.add(titulo, img_bloq, img_desbloq, progresso, tipo, "N");
      displayMessage("Prémio adicionado com sucesso!", "success");
      setTimeout(() => {
        window.location.href = "/html/admin/gamificacao/gamificacao.html";
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

premioNovo();
