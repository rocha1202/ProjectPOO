
// Carrega os dados do usuário da sessionStorage e exibe no perfil
var currentUser = JSON.parse(sessionStorage.getItem("loggedUser"));
if (currentUser) {
    document.getElementById("pontos").textContent = currentUser.pontos;
    document.getElementById("avatarImage").src = "/img/avatares/" + currentUser.avatar;

} else {
    // Se não houver dados de usuário na sessionStorage, redireciona para a página de login
    window.location.href = "./login.html";
}