let testemunhos = [];

//Carrega os testemunhos para o localStorage
export function init() {
  if (localStorage.testemunhos) {
    const tempTestemunhos = JSON.parse(localStorage.testemunhos);
    for (let testemunho of tempTestemunhos) {
      testemunhos.push(
        new Testemunho(
          testemunho.titulo,
          testemunho.sub_titulo,
          testemunho.img,
          testemunho.descricao,
          testemunho.data_publicado,
          testemunho.eliminado
        )
      );
    }
  } else {
    testemunhos = [];
  }
}

//Vai bvuscar todos os testemunhos
export function getTestemunhos(
  filterTxt = "",
  filterDataPublicado = "",
  filterEliminado = "",
  isSorted = false
) {
  let filteredTestemunhos = testemunhos.filter(
    (testemunho) =>
      (testemunho.titulo.toLowerCase().includes(filterTxt.toLowerCase()) ||
        filterTxt === "") &&
      (testemunho.data_publicado === filterDataPublicado ||
        filterDataPublicado === "") &&
      (testemunho.eliminado === filterEliminado || filterEliminado === "")
  );

  filteredTestemunhos = isSorted
    ? filteredTestemunhos.sort((a, b) => a.titulo.localeCompare(b.titulo))
    : filteredTestemunhos;

  return filteredTestemunhos;
}

//Ordenar Testemunhos
export function sortTestemunhos() {
  testemunhos.sort((a, b) => a.title.localeCompare(b.titulo));
}

//Adiciona os testemunhos
export function add(
  titulo,
  sub_titulo,
  img,
  descricao,
  data_publicado,
  eliminado
) {
  if (testemunhos.some((testemunho) => testemunho.titulo === titulo)) {
    throw Error(`Já existe um testemunho com o titulo "${titulo}"!`);
  } else {
    testemunhos.push(
      new Testemunho(
        titulo,
        sub_titulo,
        img,
        descricao,
        data_publicado,
        eliminado
      )
    );
    localStorage.setItem("testemunhos", JSON.stringify(testemunhos));
  }
}

//Definir o testemunho atual(Aquela que será vista no detalhe na publicação)
export function setCurrentTestemunho(id) {
  localStorage.setItem("testemunho", id);
}

//Obter o testemunho atual (Todo o objeto)
export function getCurrentTestemunho() {
  return testemunhos.find(
    (testemunho) =>
      testemunho.id === JSON.parse(localStorage.getItem("testemunho"))
  );
}
function getNextId() {
  return testemunhos.length > 0 ? testemunhos.length + 1 : 1;
}

//Class de testemunhos
class Testemunho {
  id = null;
  titulo = "";
  sub_titulo = "";
  img = "";
  descricao = "";
  data_publicado = "";
  eliminado = "";

  constructor(titulo, sub_titulo, img, descricao, data_publicado, eliminado) {
    this.id = getNextId();
    this.titulo = titulo;
    this.sub_titulo = sub_titulo;
    this.img = img;
    this.descricao = descricao;
    this.data_publicado = data_publicado;
    this.eliminado = eliminado;
  }
}
