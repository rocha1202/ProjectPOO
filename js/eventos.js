const currentUser = JSON.parse(localStorage.getItem("current"));
const testemunhos= JSON.parse(localStorage.getItem("publicacoes"));

if (currentUser && currentUser.id) {

    const eventsEncontrado = testemunhos.find(testemunho => testemunho.id === currentUser.id);
    if (eventsEncontrado) {

        document.querySelector(".titulo").innerText = eventsEncontrado.titulo;
        document.querySelector(".sub-titulo").innerText = eventsEncontrado.sub_titulo;
        document.querySelector(".descricao").innerText = eventsEncontrado.descricao;
        document.querySelector(".publicacao-imagem img").src = eventsEncontrado.img;
    } 
}

