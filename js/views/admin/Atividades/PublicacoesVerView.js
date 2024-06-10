import * as Publicacao from "../../../models/NoticiasEventosModel.js";

function publicacaoView() {
  Publicacao.init();

  const publicacao = Publicacao.getCurrentPublicacao();

  renderButtons(publicacao.eliminado);

  document.querySelector("#titulo").value = publicacao.titulo;
  document.querySelector("#subTitulo").value = publicacao.sub_titulo;
  document.querySelector("#descricao").value = publicacao.descricao;
  document.querySelector("#tipo").value = publicacao.tipo;
  document.querySelector("#file").value = publicacao.img;
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

publicacaoView();
