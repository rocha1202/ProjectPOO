// logged.js
import * as User from "../models/UsersModel.js";

// Verifica se há um usuário autenticado
if (!User.isLogged()) {
    // Se não estiver autenticado, redireciona para outra página
    window.location.href = "/html/login.html"; // Substitua com a página desejada
} else {
    // Se estiver autenticado, continua o código
    User.init();
    let userLogged = User.getUserLogged();
    alert("autenc")
}
