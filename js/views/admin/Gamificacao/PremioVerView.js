import * as Premio from "../../../models/PremiosModel.js";

function premioView() {
  Premio.init();

  const premio = Premio.getCurrentPremio();

  renderButtons(premio.eliminado);

  document.querySelector("#titulo").value = premio.titulo;
  document.querySelector("#img_bloq").value = premio.img_bloq;
  document.querySelector("#img_desbloq").value = premio.img_desbloq;
  document.querySelector("#progresso").value = premio.progresso;
  document.querySelector("#tipoJogo").value = premio.tipo;
}

function renderButtons(eliminado) {
  const btnList = document.querySelector("#btnList");
  btnList.innerHTML = `
        <button class="btn btn-outline-primary" id="btnAtualizar">Atualizar</button>
    <button class="btn btn-outline-primary" id="btnEliminado">${
      eliminado === "S" ? "Ativar" : "Desativar"
    }</button>
    `;

  document
    .querySelector("#btnAtualizar")
    .addEventListener("click", atualizarPremio);
  document
    .querySelector("#btnEliminado")
    .addEventListener("click", atualizarEliminado);
}

function atualizarPremio() {
  const premioId = localStorage.getItem("premio");
  if (!premioId) {
    console.error("No premio Id found in localStorage");
    return;
  }

  // Verifica se todos os campos estão preenchidos
  const titulo = document.querySelector("#titulo").value;
  const imgBloq = document.querySelector("#img_bloq").value;
  const imgDesbloq = document.querySelector("#img_desbloq").value;
  const progresso = document.querySelector("#progresso").value;
  const tipoJogo = document.querySelector('#tipoJogo').value;

  if (!titulo || !imgBloq || !imgDesbloq || !progresso || !tipoJogo) {
    displayMessage("Por favor, preencha todos os campos antes de atualizar o prêmio.!", "danger");
    return;
  }

  const currentPremio = Premio.getCurrentPremio();

  const updatedPremio = {
    id: premioId,
    titulo: titulo,
    img_bloq: imgBloq,
    img_desbloq: imgDesbloq,
    progresso: progresso,
    tipo: tipoJogo,
    eliminado: currentPremio.eliminado,
  };

  const premios = JSON.parse(localStorage.getItem("premios")) || [];

  const premioIndex = premios.findIndex((premio) => premio.id == premioId);

  if (premioIndex !== -1) {
    premios[premioIndex] = updatedPremio;
    localStorage.setItem("premios", JSON.stringify(premios));
    updateUsersPremio(updatedPremio);
    displayMessage("Prêmio atualizado com sucesso", "success");

  } else {
    console.error("Prêmio não encontrado no array 'premios' do localStorage");
  }
}

function atualizarEliminado() {
  const premioId = localStorage.getItem("premio");
  if (!premioId) {
    console.error("No premio ID found in localStorage");
    return;
  }

  const premios = JSON.parse(localStorage.getItem("premios")) || [];

  const premioIndex = premios.findIndex((premio) => premio.id == premioId);

  if (premioIndex !== -1) {
    const premio = premios[premioIndex];
    premio.eliminado = premio.eliminado === "S" ? "N" : "S";
    premios[premioIndex] = premio;
    localStorage.setItem("premios", JSON.stringify(premios));
    updateUsersPremio(premio);
    displayMessage(`Prêmio ${premio.eliminado === "S" ? "desativado" : "ativado"} com sucesso!`, "danger");
    
    renderButtons(premio.eliminado);
  } else {
    console.error("Prêmio não encontrado no array 'premios' do localStorage");
  }
}
function updateUsersPremio(updatedPremio) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.forEach(user => {
    user.premios.forEach(premio => {
      if (premio.id_premio == updatedPremio.id) {
        premio.tipo = updatedPremio.tipo;
        premio.eliminado = updatedPremio.eliminado;
      }
    });
  });
  localStorage.setItem("users", JSON.stringify(users));
}
function displayMessage(message, type) {
  const divMessage = document.querySelector("#msg");
  divMessage.innerHTML = `
        <div class='alert alert-${type}' role='alert'>${message}</div>
    `;
  setTimeout(() => {
    divMessage.innerHTML = "";
  }, 2000);
}

premioView();
