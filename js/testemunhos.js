const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const events= JSON.parse(localStorage.getItem("testemunhos"));

if (currentUser && currentUser.id) {

    const testemunhoEncontrado = events.find(testemunho => testemunho.id === currentUser.id);
    if (testemunhoEncontrado) {

        document.querySelector(".titulo").innerText = testemunhoEncontrado.titulo;
        document.querySelector(".sub-titulo").innerText = testemunhoEncontrado.sub_titulo;
        document.querySelector(".descricao").innerText = testemunhoEncontrado.descricao;
        document.querySelector(".avatar-image img").src = testemunhoEncontrado.img;
    } 
}

