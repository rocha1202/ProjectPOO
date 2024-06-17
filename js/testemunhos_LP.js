document.addEventListener("DOMContentLoaded", function () {
    const testemunhosContainer = document.querySelector(".testemunhos_container");

    function getTestemunhos() {
        const testemunhos = JSON.parse(localStorage.getItem('testemunhos')) || [];
        return testemunhos.filter(t => t.eliminado === "N").slice(-3).reverse();
    }

    function updateTestemunhos() {
        const testemunhos = getTestemunhos();
        testemunhosContainer.innerHTML = '';

        testemunhos.forEach(t => {
            const column = document.createElement('div');
            column.classList.add('col-3', 'column');

            const testemunhoLink = document.createElement('a');
            testemunhoLink.href = './html/testemunhos.html';

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

            testemunhosContainer.appendChild(column);
        });
    }

    updateTestemunhos();
});

