document.addEventListener("DOMContentLoaded", function () {
  const eventsContainer = document.querySelector(".eventos_noticias_container");

  function getTestemunhos() {
    const events = JSON.parse(localStorage.getItem("publicacoes")) || [];
    return events
      .filter((t) => t.eliminado === "N")
      .slice(-3)
      .reverse();
  }

  function updateTestemunhos() {
    const events = getTestemunhos();
    eventsContainer.innerHTML = "";

    events.forEach((t) => {
      const column = document.createElement("div");
      column.classList.add("col-3", "column");

      const eventsLink = document.createElement("a");
      eventsLink.addEventListener("click", () => {
        const currentObject = { id: t.id };

        localStorage.setItem("current", JSON.stringify(currentObject));
        location.href = "./html/noticia_evento_detalhe.html";
      });

      const eventsImg = document.createElement("div");
      eventsImg.classList.add("testemunho_img");

      const img = document.createElement("img");
      img.src = t.img;
      img.alt = `Imagem ${t.titulo}`;

      const overlay = document.createElement("div");
      overlay.classList.add("column_cat_overlay");

      eventsImg.appendChild(img);
      eventsImg.appendChild(overlay);
      eventsLink.appendChild(eventsImg);

      const title = document.createElement("h5");
      title.classList.add("column_cat_title");
      title.textContent = t.titulo;

      column.appendChild(eventsLink);
      column.appendChild(title);

      eventsContainer.appendChild(column);
    });
  }

  updateTestemunhos();
});
