document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container_detalhes");

  function eventsType(events) {

    container.innerHTML = '';

    events.forEach(t => {
      const column = document.createElement('div');
      column.classList.add('col-3', 'column');

      const eventsLink = document.createElement('a');
      eventsLink.addEventListener("click", () => {
        // Directly set the current user in localStorage
        const currentObject = { id: t.id };

        // Armazenar no localStorage convertendo para JSON
        localStorage.setItem('current', JSON.stringify(currentObject));
        location.href = "/html/noticia_evento_detalhe.html";
      });

      const eventsImg = document.createElement('div');
      eventsImg.classList.add('testemunho_img');

      const img = document.createElement('img');
      img.src = t.img;
      img.alt = `Imagem ${t.titulo}`;

      const overlay = document.createElement('div');
      overlay.classList.add('column_cat_overlay');

      eventsImg.appendChild(img);
      eventsImg.appendChild(overlay);
      eventsLink.appendChild(eventsImg);

      const title = document.createElement('h5');
      title.classList.add('column_cat_title');
      title.textContent = t.titulo;

      column.appendChild(eventsLink);
      column.appendChild(title);

      container.appendChild(column);
    });
  }

  function testemunhosType(testemunhos) {
    const container = document.querySelector(".container_detalhes");

    container.innerHTML = '';

    testemunhos.forEach(t => {
        const column = document.createElement('div');
        column.classList.add('col-3', 'column');

        const testemunhoLink = document.createElement('a');
        testemunhoLink.addEventListener("click", () => {
            // Directly set the current user in localStorage
            const currentUserObject = { id: t.id };

            // Armazenar no localStorage convertendo para JSON
            localStorage.setItem('currentUser', JSON.stringify(currentUserObject));
            location.href = "/html/testemunhos.html";
        });

        const testemunhoImg = document.createElement('div');
        testemunhoImg.classList.add('testemunho_img');

        const img = document.createElement('img');
        img.src = t.img;
        img.alt = `Imagem ${t.titulo}`;

        const overlay = document.createElement('div');
        overlay.classList.add('column_cat_overlay');

        testemunhoImg.appendChild(img);
        testemunhoImg.appendChild(overlay);
        testemunhoLink.appendChild(testemunhoImg);

        const title = document.createElement('h5');
        title.classList.add('column_cat_title');
        title.textContent = t.titulo;

        column.appendChild(testemunhoLink);
        column.appendChild(title);

        container.appendChild(column);
    });
}

  const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  const type = getUrlParameter('type');

  if (type === 'testemunhos') {
    const testemunhos = JSON.parse(localStorage.getItem('testemunhos')) || [];
    const filteredTestemunhos = testemunhos.filter(t => t.eliminado === "N").reverse();
    testemunhosType(filteredTestemunhos)

  } else if (type === 'eventos') {
    const publicacoes = JSON.parse(localStorage.getItem('publicacoes')) || [];
    const filteredEventos = publicacoes.filter(t => t.eliminado === "N").reverse();
    eventsType(filteredEventos)

  }
});