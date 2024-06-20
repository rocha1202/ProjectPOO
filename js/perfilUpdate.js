// Carrega os dados do utilizador e exibe no perfil
var currentUser = JSON.parse(sessionStorage.getItem("loggedUser"));
if (currentUser) {
  document.getElementById("pontos").textContent = currentUser.pontos;
  document.getElementById("profileName1").textContent = currentUser.nome;
  document.getElementById("avatarImage").src =
    "/img/avatares/" + currentUser.avatar;
  document.getElementsByName("nome")[0].value = currentUser.nome;
  document.getElementsByName("dataNascimento")[0].value =
    currentUser.dataNascimento;

  const sexoField = document.getElementsByName("profileSex")[0];
  if (currentUser.genero == "F") {
    sexoField.value = "F";
  } else if (currentUser.genero == "M") {
    sexoField.value = "M";
  } else if (currentUser.genero == "O") {
    sexoField.value = "O";
  }

  document.getElementsByName("localidade")[0].value = currentUser.localidade;
  document.getElementById("profileEmail").textContent = currentUser.email;
  document.getElementsByName("password")[0].value = currentUser.password;
}

function alterar() {
  var nome = document.getElementsByName("nome")[0].value;
  var dataNascimento = document.getElementsByName("dataNascimento")[0].value;
  var sexo = document.getElementsByName("profileSex")[0].value;
  var localidade = document.getElementsByName("localidade")[0].value;
  var email = document.getElementById("profileEmail").textContent;
  var password = document.getElementsByName("password")[0].value;

  var users = JSON.parse(localStorage.getItem("users")) || [];
  var currentUserEmail = JSON.parse(sessionStorage.getItem("loggedUser")).email;
  var userIndex = users.findIndex((user) => user.email === currentUserEmail);

  if (userIndex !== -1) {
    users[userIndex].nome = nome;
    users[userIndex].dataNascimento = dataNascimento;
    users[userIndex].genero = sexo;
    users[userIndex].localidade = localidade;
    users[userIndex].email = email;
    users[userIndex].password = password;
    localStorage.setItem("users", JSON.stringify(users));

    // Atualiza o currentUser
    sessionStorage.setItem("loggedUser", JSON.stringify(users[userIndex]));

    displayMessage("Perfil atualizado com sucesso", "success");
  } else {
    console.error("User not found in users list.");
  }
}
function displayMessage(message, type) {
  const divMessage = document.querySelector("#msg");
  divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  setTimeout(() => {
    divMessage.innerHTML = "";
    window.location.href = "./perfil.html";
  }, 2000);
}
