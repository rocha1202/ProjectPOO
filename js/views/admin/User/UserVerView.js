import * as User from "../../../models/UsersModel.js";

function userView() {
  User.init();

  const user = User.getCurrentUser();
  console.log("Current User:", user); // Debugging statement

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
    <button class="btn btn-outline-primary" id="btnAtualizar">Atualizar</button>
    <button class="btn btn-outline-primary" id="btnEliminado">${eliminado === "S" ? "Ativar" : "Desativar"}</button>
    <button class="btn btn-outline-primary" id="btnBloqueado">${bloqueado === "S" ? "Desbloquear" : "Bloquear"}</button>
  `;

  document.querySelector("#btnAtualizar").addEventListener("click", atualizarUsuario);
  document.querySelector("#btnEliminado").addEventListener("click", atualizarEliminado);
  document.querySelector("#btnBloqueado").addEventListener("click", atualizarBloqueado);
}

function atualizarUsuario() {
  const userId = localStorage.getItem("user"); // Get the current user ID from localStorage
  if (!userId) {
    console.error("Sem ID na localStorage");
    return;
  }
  console.log("ID na localStorage:", userId); // Debugging statement

  const updatedUser = {
    id: userId,
    nome: document.querySelector("#nome").value,
    dataNascimento: document.querySelector("#dataNascimento").value,
    genero: document.querySelector("#genero").value,
    localidade: document.querySelector("#localidade").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    tipo: document.querySelector("#tipo").value,
    avatar: document.querySelector("#file").value,
    bloqueado: User.getCurrentUser().bloqueado, // Retain current values for bloqueado and eliminado
    eliminado: User.getCurrentUser().eliminado
  };

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Convert userId to the same type as the IDs in the users array
  const userIndex = users.findIndex((user) => user.id == userId); // Use loose equality for comparison

  if (userIndex !== -1) {
    users[userIndex] = updatedUser;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Utilizador atualizador com sucesso!");
  } else {
    console.error("O utilizador não foi encontrado na localStorage");
  }
}

function atualizarEliminado() {
  const userId = localStorage.getItem("user"); // Get the current user ID from localStorage
  if (!userId) {
    console.error("Sem ID na localStorage");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Convert userId to the same type as the IDs in the users array
  const userIndex = users.findIndex((user) => user.id == userId); // Use loose equality for comparison
  console.log("User Index:", userIndex); // Debugging statement

  if (userIndex !== -1) {
    const user = users[userIndex];
    user.eliminado = user.eliminado === "S" ? "N" : "S"; // Toggle eliminado status
    users[userIndex] = user;
    localStorage.setItem("users", JSON.stringify(users));
    alert(`Utilizador ${user.eliminado === "S" ? "desativado" : "ativado"} com sucesso!`);
    renderButtons(user.bloqueado, user.eliminado); // Re-render buttons to reflect the change
  } else {
    console.error("Não encontrou o user na localStorage");
  }
}

function atualizarBloqueado() {
  const userId = localStorage.getItem("user"); // Get the current user ID from localStorage
  if (!userId) {
    console.error("Sem ID na localStorage");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Convert userId to the same type as the IDs in the users array
  const userIndex = users.findIndex((user) => user.id == userId); // Use loose equality for comparison

  if (userIndex !== -1) {
    const user = users[userIndex];
    user.bloqueado = user.bloqueado === "S" ? "N" : "S"; // Toggle bloqueado status
    users[userIndex] = user;
    localStorage.setItem("users", JSON.stringify(users));
    alert(`Utilizador: ${user.bloqueado === "S" ? "bloqueado" : "desbloqueado"} com sucesso!`);
    renderButtons(user.bloqueado, user.eliminado); // Re-render buttons to reflect the change
  } else {
    console.error("Não encontrou o utilizador no array");
  }
}

userView();
