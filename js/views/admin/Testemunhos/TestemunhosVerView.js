import * as Testemunho from "../../../models/TestemunhosModel.js";

function testemunhoView() {
  Testemunho.init();

  const testemunho = Testemunho.getCurrentTestemunho();

  renderButtons(testemunho.eliminado);

  document.querySelector("#titulo").value = testemunho.titulo;
  document.querySelector("#subTitulo").value = testemunho.sub_titulo;
  document.querySelector("#descricao").value = testemunho.descricao;
  document.querySelector("#file").value = testemunho.img;
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
    .addEventListener("click", atualizarTestemunho);
  document
    .querySelector("#btnEliminado")
    .addEventListener("click", atualizarEliminado);
}

function atualizarTestemunho() {
  const testemunhoId = localStorage.getItem("testemunho");
  if (!testemunhoId) {
    console.error("No testemunho ID found in localStorage");
    return;
  }

  const currentTestemunho = Testemunho.getCurrentTestemunho();

  const updatedTestemunho = {
    id: testemunhoId,
    titulo: document.querySelector("#titulo").value,
    sub_titulo: document.querySelector("#subTitulo").value,
    descricao: document.querySelector("#descricao").value,
    img: document.querySelector("#file").filename,
    data_publicado: currentTestemunho.data_publicado,
    eliminado: currentTestemunho.eliminado,
  };

  const testemunhos = JSON.parse(localStorage.getItem("testemunhos")) || [];

  const testemunhoIndex = testemunhos.findIndex(
    (testemunho) => testemunho.id == testemunhoId
  );

  if (testemunhoIndex !== -1) {
    testemunhos[testemunhoIndex] = updatedTestemunho;
    localStorage.setItem("testemunhos", JSON.stringify(testemunhos));
    alert("Testemunho updated successfully!");
  } else {
    console.error("Testemunho not found in localStorage testemunhos array");
  }
}

function atualizarEliminado() {
  const testemunhoId = localStorage.getItem("testemunho");
  if (!testemunhoId) {
    console.error("No testemunho ID found in localStorage");
    return;
  }

  const testemunhos = JSON.parse(localStorage.getItem("testemunhos")) || [];

  const testemunhoIndex = testemunhos.findIndex(
    (testemunho) => testemunho.id == testemunhoId
  );

  if (testemunhoIndex !== -1) {
    const testemunho = testemunhos[testemunhoIndex];
    testemunho.eliminado = testemunho.eliminado === "S" ? "N" : "S";
    testemunhos[testemunhoIndex] = testemunho;
    localStorage.setItem("testemunhos", JSON.stringify(testemunhos));
    alert(
      `Testemunho ${
        testemunho.eliminado === "S" ? "desativado" : "ativado"
      } com sucesso!`
    );
    renderButtons(testemunho.eliminado);
  } else {
    console.error("Testemunho not found in localStorage testemunhos array");
  }
}

testemunhoView();
