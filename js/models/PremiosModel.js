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

//Vai buscar todos os premios
export function getPremios(
  filterTxt = "",
  filterEliminado = "",
  isSorted = false
) {
  let filteredPremios = premios.filter(
    (premio) =>
      (premio.titulo.toLowerCase().includes(filterTxt.toLowerCase()) ||
        filterTxt === "") &&
      (premio.eliminado === filterEliminado || filterEliminado === "")
  );

  filteredPremios = isSorted
    ? filteredPremios.sort((a, b) => a.titulo.localeCompare(b.titulo))
    : filteredPremios;

  return filteredPremios;
}

//Ordenar Premios
export function sortPremios() {
  premios.sort((a, b) => a.title.localeCompare(b.titulo));
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

//Definir o premio atual(Aquela que será vista no detalhe na publicação)
export function setCurrentPremio(id) {
  localStorage.setItem("premio", id);
}

//Obter o premio atual (Todo o objeto)
export function getCurrentPremio() {
  return premios.find(
    (premio) => premio.id === JSON.parse(localStorage.getItem("premio"))
  );
}

function getNextId() {
  return premios.length > 0 ? premios.length + 1 : 1;
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
