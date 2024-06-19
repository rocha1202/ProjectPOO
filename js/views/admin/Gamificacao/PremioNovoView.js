import * as Premio from "../../../models/PremiosModel.js";

let users = JSON.parse(localStorage.users);

function premioNovo() {
  Premio.init();
  document
    .querySelector("#formGamificacao")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      // Captura os valores dos campos
      const titulo = document.querySelector("#titulo").value;
      const img_bloq = document.querySelector("#img_bloq").value;
      const img_desbloq = document.querySelector("#img_desbloq").value;
      const progresso = document.querySelector("#progresso").value;
      const tipo = document.querySelector("#tipoJogo").value;

      // Verifica se todos os campos estão preenchidos
      if (!titulo || !img_bloq || !img_desbloq || !progresso || !tipo) {
        displayMessage("Por favor, preencha todos os campos.", "danger");
        return;
      }

      try {
        const novoPremio = Premio.add(
          titulo,
          img_bloq,
          img_desbloq,
          progresso,
          tipo,
          "N"
        );
        // Atualiza o campo `premios` de todos os utilizadores
        users.forEach((user) => {
          user.premios.push({
            id: novoPremio.id, // Adiciona o ID do prêmio recém-criado
            completo: "N",
            data_completo: "",
            progresso: 0,
            tipo: novoPremio.tipo,
          });
        });

        // Atualiza o localStorage dos utilizadores
        localStorage.setItem("users", JSON.stringify(users));

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
