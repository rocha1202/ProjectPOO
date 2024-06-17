document.addEventListener('DOMContentLoaded', () => {
    const eventosNoticiasContainer = document.getElementById('eventos_noticias_container');
    
    // Get publicações from localStorage
    const publicacoes = JSON.parse(localStorage.getItem('publicacoes')) || [];

    // Filter out the eliminated publicações and sort by date
    const validPublicacoes = publicacoes.filter(pub => pub.eliminado === 'N')
                                       .sort((a, b) => new Date(b.data_publicado) - new Date(a.data_publicado))
                                       .slice(0, 3); // Get the last 3 publicações

    // Generate HTML for the valid publicações
    validPublicacoes.forEach(pub => {
      const div = document.createElement('div');
      div.className = 'col-3 column';
      div.innerHTML = `
        <div class="evento_noticia_img">
          <img src="${pub.img}" alt="${pub.titulo}" />
          <div class="column_cat_overlay"></div>
        </div>
        <h5 class="column_cat_title">${pub.titulo}</h5>
      `;
      eventosNoticiasContainer.appendChild(div);
    });
  });