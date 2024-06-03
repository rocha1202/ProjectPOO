import * as Testemunho from "../../../models/TestemunhosModel.js";

function testemunhoView() {
  Testemunho.init();

  const testemunho = Testemunho.getCurrentTestemunho();

  document.querySelector("#titulo").value = testemunho.titulo;
  document.querySelector("#subTitulo").value = testemunho.sub_titulo;
  document.querySelector("#descricao").value = testemunho.descricao;
  document.querySelector("#file").value = testemunho.img;
}

testemunhoView();
