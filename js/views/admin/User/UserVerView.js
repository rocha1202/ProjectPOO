import * as User from "../../../models/UsersModel.js";

function userView() {
  User.init();

  const user = User.getCurrentUser();

  renderButtons(user.bloqueado, user.eliminado);

  document.querySelector("#nome").value = user.nome;
  document.querySelector("#dataNascimento").value = user.dataNascimento;
  document.querySelector("#genero").value = user.genero;
  document.querySelector("#localidade").value = user.localidade;
  document.querySelector("#email").value = user.email;
  document.querySelector("#password").value = user.password;
  document.querySelector("#tipo").value = user.tipo;
  document.querySelector("#file").value = user.avatar;
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
