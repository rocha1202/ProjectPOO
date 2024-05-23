import * as User from "../models/UsersModel.js";

function registerView() {
  User.init();

  //Clicar no botão para registar
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
      const avatar = "";
      try {
        User.add(
          nome,
          dataNascimento,
          genero,
          localidade,
          email,
          password,
          0,
          avatar,
          [],
          "N",
          "N",
          "user"
        );
        displayMessage("Registo executado com sucesso!", "success");
        // Wait 1 second before reloading, so the user can see the login success message
        setTimeout(() => {
          window.location.href = "/html/login.html";
        }, 1000);
      } catch (e) {
        displayMessage(e.message, "danger");
      }
    });
}

function displayMessage(message, type) {
  const divMessage = document.querySelector("#msg");
  divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  setTimeout(() => {
    divMessage.innerHTML = "";
  }, 2000);
}

registerView();
