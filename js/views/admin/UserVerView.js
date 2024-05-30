import * as User from "../../models/UsersModel.js";

function userView() {
  User.init();

  const user = User.getCurrentUser();

  document.querySelector("#nome").innerHTML = user.nome;
  document.querySelector("#dataNascimento").innerHTML = user.dataNascimento;
  document.querySelector("#genero").innerHTML = user.henero;
  document.querySelector("#localidade").innerHTML = user.localidade;
  document.querySelector("#email").innerHTML = user.email;
  document.querySelector("#password").innerHTML = user.password;
}

userView();
