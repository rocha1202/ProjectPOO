import * as User from "../models/UsersModel.js";

function loginView() {
  User.init();

  //Clicar no botão de Login
  document.querySelector("#formLogin").addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      User.login(
        document.getElementById("email").value,
        document.getElementById("password").value
      );
      displayMessage("Login efetuado com sucesso", "success");
      let userLogged = User.getUserLogged();
      setTimeout(() => {
        if (userLogged.tipo === "admin") {
          window.location.href = "/html/admin/user/user.html";
        } else {
          window.location.href = "/html/users/perfil.html";
        }
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

loginView();
