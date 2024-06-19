import * as User from "../models/UsersModel.js";

function registerView() {
  User.init();

  document
    .querySelector("#formRegister")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = document.querySelector("#nome").value;
      const dataNascimento = document.querySelector("#dataNascimento").value;
      const genero = document.querySelector("#genero").value;
      const localidade = document.querySelector("#localidade").value;
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;
      let avatar = "";

      //Verifica se todos os campos estão preenchidos
      if (
        !nome ||
        !dataNascimento ||
        !genero ||
        !localidade ||
        !email ||
        !password
      ) {
        displayMessage("Por favor, preencha todos os campos.", "danger");
        return;
      }

      try {
        const premiosLocal = JSON.parse(localStorage.getItem("premios")) || [];

        if (genero === "F") {
          avatar = "F1.svg";
        } else {
          avatar = "M1.svg";
        }

        // Função para criar lista de prêmios
        const listaPremios = createPremiosList(premiosLocal);

        // Adicionar o utilizador com os dados e a lista de prêmios
        User.add(
          nome,
          dataNascimento,
          genero,
          localidade,
          email,
          password,
          0,
          avatar,
          listaPremios,
          "N",
          "N",
          "user"
        );

        displayMessage("Registo executado com sucesso!", "success");
        setTimeout(() => {
          window.location.href = "/html/login.html";
        }, 1000);
      } catch (e) {
        displayMessage(e.message, "danger");
      }
    });
}

function createPremiosList(premiosLocal) {
  // Criar uma lista de prêmios com os campos adicionais
  const listaPremios = premiosLocal.map((premio) => ({
    id: premio.id,
    tipo: premio.tipo,
    eliminado: premio.eliminado,
    completo: "N",
    data_completo: "",
    progresso: 0,
  }));

  return listaPremios;
}

function displayMessage(message, type) {
  const divMessage = document.querySelector("#msg");
  divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  setTimeout(() => {
    divMessage.innerHTML = "";
  }, 2000);
}

registerView();
