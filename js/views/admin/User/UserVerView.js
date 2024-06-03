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
}

userView();
