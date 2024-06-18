import * as Premio from "../../../models/PremiosModel.js";

function premioView() {
  Premio.init();

  const premio = Premio.getCurrentPremio();

  renderButtons(premio.eliminado);

  document.querySelector("#titulo").value = premio.titulo;
  document.querySelector("#img_bloq").value = premio.img_bloq;
  document.querySelector("#img_desbloq").value = premio.img_desbloq;
  document.querySelector("#progresso").value = premio.progresso;
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

  const currentPremio = Premio.getCurrentPremio();

  const updatedPremio = {
    id: premioId,
    titulo: document.querySelector("#titulo").value,
    img_bloq: document.querySelector("#img_bloq").value,
    img_desbloq: document.querySelector("#img_desbloq").value,
    progresso: document.querySelector("#progresso").value,
    eliminado: currentPremio.eliminado,
  };

  const premios = JSON.parse(localStorage.getItem("premios")) || [];

  const premioIndex = premios.findIndex((premio) => premio.id == premioId);

  if (premioIndex !== -1) {
    premios[premioIndex] = updatedPremio;
    localStorage.setItem("premios", JSON.stringify(premios));
    alert("Premio updated successfully!");
  } else {
    console.error("Premio not found in localStorage premios array");
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
    alert(
      `Premio ${
        premio.eliminado === "S" ? "desativado" : "ativado"
      } com sucesso!`
    );
    renderButtons(premio.eliminado);
  } else {
    console.error("Premio not found in localStorage premios array");
  }
}

premioView();
