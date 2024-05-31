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

//Vai buscar todas as publicações
export function getPublicacoes(
  filterTxt = "",
  filterDataPublicado = "",
  filterEliminado = "",
  filterTipo = "",
  isSorted = false
) {
  let filteredPublicacoes = publicacoes.filter(
    (publicacao) =>
      (publicacao.titulo.toLowerCase().includes(filterTxt.toLowerCase()) ||
        filterTxt === "") &&
      (publicacao.data_publicado === filterDataPublicado ||
        filterDataPublicado === "") &&
      (publicacao.eliminado === filterEliminado || filterEliminado === "") &&
      (publicacao.tipo === filterTipo || filterTipo === "")
  );

  filteredPublicacoes = isSorted
    ? filteredPublicacoes.sort((a, b) => a.nome.localeCompare(b.nome))
    : filteredPublicacoes;

  return filteredPublicacoes;
}

//Ordenar publicacoes
export function sortPublicacoes() {
  publicacoes.sort((a, b) => a.titulo.localeCompare(b.titulo));
}

//Adiciona as publicacoes
export function add(
  titulo,
  sub_titulo,
  img,
  descricao,
  data_publicado,
  tipo,
  eliminado = "N"
) {
  if (publicacoes.some((publicacao) => publicacao.titulo === titulo)) {
    throw Error(`Já existe uma publicação com o titulo "${titulo}"!`);
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

// Definir a publicacao atual(Aquela que será vista no detalhe na publicacao)
export function setCurrentPublicacao(id) {
  localStorage.setItem("publicacao", id);
}

// Obter a publicacao atual(Todo o objeto)
export function getCurrentPublicacao() {
  return publicacoes.find(
    (publicacao) => publicacao.id === localStorage.getItem("publicacao")
  );
}

function getNextId() {
  return publicacoes.length > 0 ? publicacoes.length + 1 : 1;
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
