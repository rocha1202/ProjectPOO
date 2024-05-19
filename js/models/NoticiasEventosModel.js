let publicacoes = [];

//Carrega as publicações para o localStorage
export function init() {
  if (localStorage.publicacoes) {
    const tempPublicacoes = JSON.parse(localStorage.publicacoes);
    for (let publicacao of tempPublicacoes) {
      publicacoes.push(
        new Publicacao(
          publicacao.titulo,
          publicacao.sub_titulo,
          publicacao.img,
          publicacao.descricao,
          publicacao.data_publicado,
          publicacao.tipo,
          publicacao.eliminado
        )
      );
    }
  } else {
    publicacoes = [];
  }
}

//Adiciona as publicacoes
export function add(
  titulo,
  sub_titulo,
  img,
  descricao,
  data_publicado,
  tipo,
  eliminado
) {
  if (publicacoes.some((publicacao) => publicacao.titulo === titulo)) {
    throw Error(`Já existe uma publicação com o titulo "${titulo}" já existe!`);
  } else {
    publicacoes.push(
      new Publicacao(
        titulo,
        sub_titulo,
        img,
        descricao,
        data_publicado,
        tipo,
        eliminado
      )
    );
    localStorage.setItem("publicacoes", JSON.stringify(publicacoes));
  }
}

function getNextId() {
  return bands.length > 0 ? bands.length + 1 : 1;
}

//Class de noticias e eventos
class Publicacao {
  id = null;
  titulo = "";
  sub_titulo = "";
  img = "";
  descricao = "";
  data_publicado = "";
  tipo = "";
  eliminado = "";

  constructor(
    titulo,
    sub_titulo,
    img,
    descricao,
    data_publicado,
    tipo,
    eliminado
  ) {
    this.id = getNextId();
    this.titulo = titulo;
    this.sub_titulo = sub_titulo;
    this.img = img;
    this.descricao = descricao;
    this.data_publicado = data_publicado;
    this.tipo = tipo;
    this.eliminado = eliminado;
  }
}
