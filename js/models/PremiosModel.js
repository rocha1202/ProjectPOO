let premios = [];

//Carrega os premios para o localStorage
export function init() {
  if (localStorage.premios) {
    const tempPremios = JSON.parse(localStorage.premios);
    for (let premio of tempPremios) {
      if (premio.eliminado === "N") {
        premios.push(
          new Premio(
            premio.titulo,
            premio.img,
            premio.progresso,
            premio.eliminado
          )
        );
      }
    }
  } else {
    premios = [];
  }
}

//Adiciona os premios
export function add(titulo, img, progresso, eliminado = "N") {
  if (premios.some((premio) => premio.titulo === titulo)) {
    throw Error(`Já existe um prémio com o titulo "${titulo}" já existe!`);
  } else {
    premios.push(new Premio(titulo, img, progresso, eliminado));
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
  img = "";
  progresso = "";
  eliminado = "";

  constructor(titulo, img, progresso, eliminado) {
    this.id = getNextId();
    this.titulo = titulo;
    this.img = img;
    this.progresso = progresso;
    this.eliminado = eliminado;
  }
}
