import * as Premio from "../../../models/PremiosModel.js";

function premioNovo() {
  Premio.init();
  document
    .querySelector("#formGamificacao")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const titulo = document.querySelector("#titulo").value;
      const img_bloq = document.querySelector("#img_bloq").value;
      const img_desbloq = document.querySelector("#img_desbloq").value;
      const progresso = document.querySelector("#progresso").value;

      try {
        Premio.add(titulo, img_bloq, img_desbloq, progresso, "N");
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
