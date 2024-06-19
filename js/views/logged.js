import * as User from "../models/UsersModel.js";

// Verifica se há um utilizador autenticado
if (!User.isLogged()) {
  // Se não estiver autenticado, redireciona para outra página
  window.location.href = "/html/login.html";
} else {
  // Se estiver autenticado
  User.init();
  let userLogged = User.getUserLogged();
}
