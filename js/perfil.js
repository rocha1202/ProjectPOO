// Carrega os dados do usuário da sessionStorage e exibe no perfil
var currentUser = JSON.parse(sessionStorage.getItem("loggedUser"));
if (currentUser) {
    document.getElementById("pontos").textContent = currentUser.pontos;
    document.getElementById("profileName1").textContent = currentUser.nome;
    document.getElementById("profileName2").textContent = currentUser.nome;
    document.getElementById("profileBirthDate").textContent = currentUser.dataNascimento;
    if (currentUser.genero == "F") {
        document.getElementById("profileSex").textContent = "Feminino";
    } if (currentUser.genero == "M") {
        document.getElementById("profileSex").textContent = "Masculino";
    } if (currentUser.genero == "O") {
        document.getElementById("profileSex").textContent = "Outro";
    }
    document.getElementById("profileLocation").textContent = currentUser.localidade;
    document.getElementById("profileEmail").textContent = currentUser.email;
    document.getElementById("avatarImage").src = "../img/avatares/" + currentUser.avatar;

} else {
    // Se não houver dados de usuário na sessionStorage, redireciona para a página de login
    window.location.href = "./login.html";
}
