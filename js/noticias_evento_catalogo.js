const noticias_eventos = [
  {
    img: "../img/eventos_noticias/img2.jpeg",
    title: "OPEN DAY’S",
  },
  {
    img: "../img/eventos_noticias/img3.jpeg",
    title: "MAD GAME JAM",
  },
  {
    img: "../img/eventos_noticias/img4.jpeg",
    title: "PLUG-IN",
  },
];

const container_noticias = document.querySelector(".container_noticias");

const renderNotícias = () => {
  noticias_eventos.map((data) => {
    container_noticias.innerHTML += `
    <div class='col-3 column'>
        <div class='evento_noticia_img_detail'>
            <img src=${data.img} alt=${data.title}/>
            <div class="column_cat_overlay"></div>
        </div>
        <h5 class='column_cat_title'>${data.title}</h5>
    </div>
    `;
  });
};

renderNotícias();
