import * as Publicacao from "../../../models/NoticiasEventosModel.js";

function publicacaoView() {
  Publicacao.init();

  const publicacao = Publicacao.getCurrentPublicacao();

  document.querySelector("#titulo").value = publicacao.titulo;
  document.querySelector("#subTitulo").value = publicacao.sub_titulo;
  document.querySelector("#descricao").value = publicacao.descricao;
  document.querySelector("#file").value = publicacao.img;
}

publicacaoView();
