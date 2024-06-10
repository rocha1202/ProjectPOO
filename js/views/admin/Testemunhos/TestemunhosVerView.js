import * as Testemunho from "../../../models/TestemunhosModel.js";

function testemunhoView() {
  Testemunho.init();

  const testemunho = Testemunho.getCurrentTestemunho();

  renderButtons(testemunho.eliminado);

  document.querySelector("#titulo").value = testemunho.titulo;
  document.querySelector("#subTitulo").value = testemunho.sub_titulo;
  document.querySelector("#descricao").value = testemunho.descricao;
  document.querySelector("#file").filename = testemunho.img;
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
