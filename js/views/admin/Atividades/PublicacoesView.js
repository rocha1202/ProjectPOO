import * as Publicacao from "../../../models/NoticiasEventosModel.js";

function atividadesCatalog() {
  Publicacao.init();

  renderCatalog(Publicacao.getPublicacoes());

  //Clicar no botão filtrar
  document.querySelector("#btnFilter").addEventListener("click", () => {
    const text = document.querySelector("#text").value;
    const dataPublicado = document.querySelector("#dataPublicado").value;
    const eliminado = document.querySelector("#eliminado").value;
    const tipo = document.querySelector("#tipo").value;
    renderCatalog(
      Publicacao.getPublicacoes(text, dataPublicado, eliminado, tipo)
    );
  });

  //Clicar no botão de ordenar
  document.querySelector("#btnSort").addEventListener("click", () => {
    Publicacao.sortPublicacoes();
    renderCatalog(Publicacao.getPublicacoes());
  });
}

function renderCatalog(publicacoes = []) {
  let render = "";
  publicacoes.map((publicacao) => (render += generateListItem(publicacao)));
  // Atribuição de todos os cards gerados ao elemento com id atividadesCatalog
  document.querySelector("#atividadesCatalog").innerHTML = render;

  //Clicar no botão Ver
  const btnVer = document.getElementsByClassName("view");
  for (const btn of btnVer) {
    btn.addEventListener("click", () => {
      Publicacao.setCurrentPublicacao(btn.id);
      location.href = "/html/admin/atividades/atividadeVer.html";
    });
  }
}

function generateListItem(publicacao) {
  let render = `
        <div class='d-flex border rounded mb-3 justify-content-between px-3 py-1'>
            <p>${publicacao.titulo}</p>
            <p>${publicacao.data_publicado}</p>
            <button id='${publicacao.id}' class='view'>Ver</button>
        </div>
    `;
  return render;
}

atividadesCatalog();
