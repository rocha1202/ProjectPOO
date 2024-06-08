import * as Testemunho from "../../../models/TestemunhosModel.js";

function testemunhoView() {
  Testemunho.init();

  const testemunho = Testemunho.getCurrentTestemunho();

  document.querySelector("#titulo").value = testemunho.titulo;
  document.querySelector("#subTitulo").value = testemunho.sub_titulo;
  document.querySelector("#descricao").value = testemunho.descricao;
  document.querySelector("#file").value = testemunho.img;

  renderButtons(testemunho.eliminado);
}

function renderButtons(eliminado) {
  const btnList = document.querySelector("#btnList");
  btnList.innerHTML = `
  <button class="btn btn-outline-primary">Atualizar</button>
  <button class="btn btn-outline-primary">${
    eliminado === "S" ? "Ativar" : "Desativar"
  }</button>
  `;
}

testemunhoView();
