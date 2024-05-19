let testemunhos = [];

//Carrega os testemunhos para o localStorage
export function init() {
  if (localStorage.testemunhos) {
    const tempTestemunhos = JSON.parse(localStorage.testemunhos);
    for (let testemunho of tempTestemunhos) {
      testemunhos.push(
        testemunho.titulo,
        testemunho.sub_titulo,
        testemunho.img,
        testemunho.descricao,
        testemunho.data_publicado,
        testemunho.eliminado
      );
    }
  } else {
    testemunhos = [];
  }
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
    throw Error(`Já existe um testemunho com o titulo "${titulo}" já existe!`);
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
  }
}

function getNextId() {
  return bands.length > 0 ? bands.length + 1 : 1;
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
