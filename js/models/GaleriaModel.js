let medias = [];

//Carrega as fotos/videos para o localStorage
export function init() {
  if (localStorage.medias) {
    const tempMedias = JSON.parse(localStorage.medias);
    for (let media of tempMedias) {
      medias.push(new Media(media.ficheiro, media.tipo, media.eliminado));
    }
  } else {
    medias = [];
  }
}

//Adiciona na galeria
export function add(ficheiro, tipo, eliminado = "N") {
  if (medias.some((media) => media.ficheiro === ficheiro)) {
    throw Error(
      `Já existe esta imagem ou video na galeria! Por favor insira outra.`
    );
  } else {
    medias.push(new Media(ficheiro, tipo, (eliminado = "N")));
    localStorage.setItem("medias", JSON.stringify(medias));
  }
}

function getNextId() {
  return bands.length > 0 ? bands.length + 1 : 1;
}

//Classe de Galeria
class Media {
  id = null;
  ficheiro = "";
  tipo = "";
  eliminado = "";

  constructor(ficheiro, tipo, eliminado) {
    this.id = getNextId();
    this.ficheiro = ficheiro;
    this.tipo = tipo;
    this.eliminado = eliminado;
  }
}
