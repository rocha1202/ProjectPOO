let premios = [];

//Carrega os premios para o localStorage
export function init() {
  if (localStorage.premios) {
    const tempPremios = JSON.parse(localStorage.premios);
    for (let premio of tempPremios) {
      premios.push(
        new Premio(
          premio.titulo,
          premio.img_bloq,
          premio.img_desbloq,
          premio.progresso,
          premio.eliminado
        )
      );
    }
  } else {
    premios = [];
  }
}

//Adiciona os premios
export function add(titulo, img_bloq, img_desbloq, progresso, eliminado = "N") {
  if (premios.some((premio) => premio.titulo === titulo)) {
    throw Error(`Já existe um prémio com o titulo "${titulo}"!`);
  } else {
    premios.push(
      new Premio(titulo, img_bloq, img_desbloq, progresso, eliminado)
    );
    localStorage.setItem("premios", JSON.stringify(premios));
  }
}

function getNextId() {
  return bands.length > 0 ? bands.length + 1 : 1;
}

//Classe de Premios
class Premio {
  id = null;
  titulo = "";
  img_bloq = "";
  img_desbloq = "";
  progresso = "";
  eliminado = "";

  constructor(titulo, img_bloq, img_desbloq, progresso, eliminado) {
    this.id = getNextId();
    this.titulo = titulo;
    this.img_bloq = img_bloq;
    this.img_desbloq = img_desbloq;
    this.progresso = progresso;
    this.eliminado = eliminado;
  }
}
