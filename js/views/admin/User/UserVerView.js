import * as User from "../../../models/UsersModel.js";

function userView() {
  User.init();

  const user = User.getCurrentUser();

  document.querySelector("#nome").value = user.nome;
  document.querySelector("#dataNascimento").value = user.dataNascimento;
  document.querySelector("#genero").value = user.genero;
  document.querySelector("#localidade").value = user.localidade;
  document.querySelector("#email").value = user.email;
  document.querySelector("#password").value = user.password;

  renderButtons(user.bloqueado, user.eliminado);
}

function renderButtons(bloqueado, eliminado) {
  const btnList = document.querySelector("#btnList");
  btnList.innerHTML = `
  <button class="btn btn-outline-primary">Atualizar</button>
            <button class="btn btn-outline-primary">${
              eliminado === "S" ? "Ativar" : "Desativar"
            }</button>
            <button class="btn btn-outline-primary">${
              bloqueado === "S" ? "Desbloquear" : "Bloquear"
            }</button>
  `;
}

userView();
