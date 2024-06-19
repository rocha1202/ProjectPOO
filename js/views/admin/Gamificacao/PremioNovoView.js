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
        // Adiciona o prêmio ao sistema e obtém o prêmio criado
        const novoPremio = await Premio.add(titulo, img_bloq, img_desbloq, progresso, tipo, "N");

        // Verifica se novoPremio é válido e possui a propriedade id
        if (novoPremio && novoPremio.id !== undefined) {
          // Atualiza o campo `premios` de todos os usuários
          users.forEach((user) => {
            user.premios.push({
              id_premio: novoPremio.id,  // Adiciona o ID do prêmio recém-criado
              completo: "N",
              data_completo: "",
              progresso:0,
              tipo: novoPremio.tipo,
            });
          });

          // Atualiza o localStorage dos usuários
          localStorage.setItem("users", JSON.stringify(users));

          displayMessage("Prémio adicionado com sucesso!", "success");
          setTimeout(() => {
            window.location.href = "/html/admin/gamificacao/gamificacao.html";
          }, 1000);
        } else {
          throw new Error("Falha ao adicionar o prêmio. Dados do prêmio são inválidos.");
        }
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
