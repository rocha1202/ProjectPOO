import * as Premio from "../../../models/PremiosModel.js";

function premiosCatalog() {
  Premio.init();

  renderCatalog(Premio.getPremios());

  document.querySelector(
    "#header"
  ).innerHTML += `<h2 class="text-orange mr-2">Gamificação</h2>
            <a href="./gamificacaoNovo.html">
              <button class="btn btn-primary">Novo</button></a>`;

  //Clicar no botão filtrar
  document.querySelector("#btnFilter").addEventListener("click", () => {
    const text = document.querySelector("#text").value;
    const eliminado = document.querySelector("#eliminado").value;
    renderCatalog(Premio.getPremios(text, eliminado));
  });

  //Clicar no botão de ordenar
  document.querySelector("#btnSort").addEventListener("click", () => {
    Premio.sortPremios();
    renderCatalog(Premio.getPremios());
  });
}

function renderCatalog(premios = []) {
  let render = "";
  premios.map((premio) => (render += generateListItem(premio)));
  document.querySelector("#premiosCatalog").innerHTML = render;

  const btnVer = document.getElementsByClassName("view");
  for (const btn of btnVer) {
    btn.addEventListener("click", () => {
      Premio.setCurrentPremio(btn.id);
      location.href = "/html/admin/gamificacao/gamificacaoVer.html";
    });
  }
}

function generateListItem(premio) {
  let render = `
    <div class='d-flex border rounded mb-3 justify-content-between px-3 py-1'>
            <img src=${premio.img_desbloq} style='width: 10%; height: 10%'>
            <p>${premio.titulo}</p>
            <button id='${premio.id}' class='view'>Ver</button>
        </div>
  `;
  return render;
}

premiosCatalog();
