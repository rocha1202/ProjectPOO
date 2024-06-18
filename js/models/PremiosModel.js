let premios = [];
let users = []; // Added to hold user data

// Initialize the premios and users from local storage
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
          premio.tipo,
          premio.eliminado
        )
      );
    }
  } else {
    premios = [];
  }

  if (localStorage.users) {
    users = JSON.parse(localStorage.users);
  } else {
    users = [];
  }
}

// Get all premios
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

// Sort premios
export function sortPremios() {
  premios.sort((a, b) => a.title.localeCompare(b.titulo));
}

// Add a new premio
export function add(titulo, img_bloq, img_desbloq, progresso, tipo, eliminado) {
  if (premios.some((premio) => premio.titulo === titulo)) {
    throw Error(`Já existe um prémio com o titulo "${titulo}"!`);
  } else {
    const newPremio = new Premio(titulo, img_bloq, img_desbloq, progresso, tipo, eliminado);
    premios.push(newPremio);
    localStorage.setItem("premios", JSON.stringify(premios));
    
    // Add the new premio to each user
    for (let user of users) {
      user.premios.push({
        id: newPremio.id,
        progresso: 0,  // Initialize progresso to 0
        eliminado: "N",
        data_completo: ""
      });
    }
    localStorage.setItem("users", JSON.stringify(users));
  }
}

// Set the current premio
export function setCurrentPremio(id) {
  localStorage.setItem("premio", id);
}

// Get the current premio
export function getCurrentPremio() {
  return premios.find(
    (premio) => premio.id === JSON.parse(localStorage.getItem("premio"))
  );
}

function getNextId() {
  return premios.length > 0 ? premios.length + 1 : 1;
}

// Premio class definition
class Premio {
  id = null;
  titulo = "";
  img_bloq = "";
  img_desbloq = "";
  progresso = "";
  tipo = "";
  eliminado = "";

  constructor(titulo, img_bloq, img_desbloq, progresso, tipo, eliminado) {
    this.id = getNextId();
    this.titulo = titulo;
    this.img_bloq = img_bloq;
    this.img_desbloq = img_desbloq;
    this.progresso = progresso;
    this.tipo = tipo;
    this.eliminado = eliminado;
  }
}
