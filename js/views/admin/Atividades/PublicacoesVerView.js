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
    <button class="btn btn-outline-primary" id='btnAtualizar'>Atualizar</button>
    <button class="btn btn-outline-primary" id='btnEliminado'>${
      eliminado === "S" ? "Ativar" : "Desativar"
    }</button>
  `;

  document
    .querySelector("#btnAtualizar")
    .addEventListener("click", atualizarPublicacao);
  document
    .querySelector("#btnEliminado")
    .addEventListener("click", atualizarEliminado);
}

function atualizarPublicacao() {
  const publicacaoId = localStorage.getItem("publicacao");
  if (!publicacaoId) {
    console.error("No publicação ID found in localStorage");
    return;
  }

  const currentPublicacao = Publicacao.getCurrentPublicacao();

  const updatedPublicacao = {
    id: publicacaoId,
    titulo: document.querySelector("#titulo").value,
    sub_titulo: document.querySelector("#subTitulo").value,
    descricao: document.querySelector("#descricao").value,
    img: document.querySelector("#file").filename,
    data_publicado: currentPublicacao.data_publicado,
    tipo: document.querySelector("#tipo").value,
    eliminado: currentPublicacao.eliminado,
  };

  const publicacoes = JSON.parse(localStorage.getItem("publicacoes")) || [];

  const publicacaoIndex = publicacoes.findIndex(
    (publicacao) => publicacao.id == publicacaoId
  );
  if (publicacaoIndex !== -1) {
    publicacoes[publicacaoIndex] = updatedPublicacao;
    localStorage.setItem("publicacoes", JSON.stringify(publicacoes));
    alert("Publicação updated successfully!");
  } else {
    console.error("Testemunho not found in localStorage publicacoes array");
  }
}

function atualizarEliminado() {
  const publicacaoId = localStorage.getItem("publicacao");
  if (!publicacaoId) {
    console.error("No publicação ID found in localStorage");
    return;
  }

  const publicacoes = JSON.parse(localStorage.getItem("publicacoes")) || [];

  const publicacaoIndex = publicacoes.findIndex(
    (publicacao) => publicacao.id == publicacaoId
  );

  if (publicacaoIndex !== -1) {
    const publicacao = publicacoes[publicacaoIndex];
    publicacao.eliminado = publicacao.eliminado === "S" ? "N" : "S";
    publicacoes[publicacaoIndex] = publicacao;
    localStorage.setItem("publicacoes", JSON.stringify(publicacoes));
    alert(
      `Publicação ${
        publicacao.eliminado === "S" ? "desativada" : "ativada"
      } com sucesso!`
    );
    renderButtons(publicacao.eliminado);
  } else {
    console.error("Publicação not found in localStorage publicacoes array");
  }
}

publicacaoView();
