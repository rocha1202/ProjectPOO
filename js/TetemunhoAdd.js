let testemunhos = []; // Inicializa a matriz vazia

// Carrega os testemunhos para a matriz a partir do localStorage
function loadTestemunhosFromLocalStorage() {
  if (localStorage.testemunhos) {
    testemunhos = JSON.parse(localStorage.testemunhos);
  }
}

// Chama a função para carregar os testemunhos ao inicializar o módulo
loadTestemunhosFromLocalStorage();
console.log( testemunhos)
// Carrega os testemunhos para o localStorage
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

// Adiciona os testemunhos
export function add(titulo, sub_titulo, img, descricao, data_publicado, eliminado) {
    if (testemunhos.some((testemunho) => testemunho.titulo === titulo)) {
      throw Error(`Já existe um testemunho com o titulo "${titulo}"!`);
    } else {
      const newTestemunho = new Testemunho(
        titulo,
        sub_titulo,
        img,
        descricao,
        data_publicado,
        eliminado
      );
      testemunhos.push(newTestemunho);
      localStorage.setItem("testemunhos", JSON.stringify(testemunhos));
    }
  }
  

function getNextId() {
  return testemunhos.length > 0 ? testemunhos.length + 1 : 1;
}

// Classe de testemunhos
class Testemunho {
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
