import * as Testemunho from "../../../models/TestemunhosModel.js";

function testemunhosCatalog() {
  Testemunho.init();

  renderCatalog(Testemunho.getTestemunhos());

  //Clicar no botão filtrar
  document.querySelector("#btnFilter").addEventListener("click", () => {
    const text = document.querySelector("#text").value;
    const dataPublicado = document.querySelector("#dataPublicado").value;
    const eliminado = document.querySelector("#eliminado").value;
    renderCatalog(Testemunho.getTestemunhos(text, dataPublicado, eliminado));
  });

  //Clicar no botão de ordenar
  document.querySelector("#btnSort").addEventListener("click", () => {
    Testemunho.sortTestemunhos();
    renderCatalog(Testemunho.getTestemunhos());
  });
}

function renderCatalog(testemunhos = []) {
  let render = "";
  testemunhos.map((testemunho) => (render += generateListItem(testemunho)));
  //Atribuição de todos os cards gerados ao elemento com id testemunhosCatalog
  document.querySelector("#testemunhosCatalog").innerHTML = render;

  //Clicar no botão Ver
  const btnVer = document.getElementsByClassName("view");
  for (const btn of btnVer) {
    btn.addEventListener("click", () => {
      Testemunho.setCurrentTestemunho(btn.id);
      location.href = "/html/admin/testemunhoVer.html";
    });
  }
}

function generateListItem(testemunho) {
  let render = `
        <div class='d-flex border rounded mb-3 justify-content-between px-3 py-1'>
            <p>${testemunho.titulo}</p>
            <p>${testemunho.data_publicado}</p>
            <button id='${testemunho.id}' class='view'>Ver</button>
        </div>
    `;

  return render;
}

testemunhosCatalog();
