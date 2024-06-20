function exibirRanking() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.sort((a, b) => b.pontos - a.pontos);

  let rankingContainer = document.getElementById("rankingContainer");
  let userPositionContainer = document.getElementById("userPositionContainer");

  let rankingHTML = '<ol class="ranking-list">';
  let rankIndex = 0;

  users.forEach((user) => {
    if (user.tipo === "user" && user.eliminado === "N") {
      if (rankIndex < 10) {
        rankingHTML += `<li class="ranking-item">
                          <span class="ranking-position top10">${rankIndex + 1}</span>
                          <span class="ranking-name">${user.email}</span>
                          <span class="ranking-points">${user.pontos}</span>
                        </li>`;
      }
      rankIndex++;
    }
  });

  rankingHTML += "</ol>";
  rankingContainer.innerHTML = rankingHTML;

  let currentUser = JSON.parse(sessionStorage.getItem("loggedUser"));

  if (currentUser) {
    let userIndex = -1;
    rankIndex = 0;

    users.forEach((user) => {
      if (user.tipo === "user" && user.eliminado === "N") {
        rankIndex++;
        if (user.nome === currentUser.nome) {
          userIndex = rankIndex;
        }
      }
    });

    if (userIndex !== -1) {
      userPositionContainer.innerHTML = `<div class="user-position">
                                          <span class="ranking-position user-top">${userIndex}</span>
                                          <span class="ranking-name">${currentUser.email}</span>
                                          <span class="ranking-points">${currentUser.pontos}</span>
                                        </div>`;
    }
  }
}

exibirRanking();

// Carrega os dados do utilizador e exibe no perfil
var currentUser = JSON.parse(sessionStorage.getItem("loggedUser"));
if (currentUser) {
  document.getElementById("profileName1").textContent = currentUser.nome;
  document.getElementById("pontos").textContent = currentUser.pontos;
  document.getElementById("avatarImage").src =
    "/img/avatares/" + currentUser.avatar;
} else {
  // Se não houver dados de utilizador, redireciona para a página de login
  window.location.href = "./login.html";
}
