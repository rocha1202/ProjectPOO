function exibirRanking() {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.sort((a, b) => b.pontos - a.pontos);

    let rankingContainer = document.getElementById('rankingContainer');
    let userPositionContainer = document.getElementById('userPositionContainer');

    let rankingHTML = '<ol class="ranking-list">';

    users.forEach((user, index) => {
        if (user.tipo == "user") {
            if (index < 10) {

                rankingHTML += `<li class="ranking-item">
                                <span class="ranking-position">${index + 1}</span>
                                <span class="ranking-name">${user.nome}</span>
                                <span class="ranking-points">${user.pontos}</span>
                            </li>`;
            }
        }
    });

    rankingHTML += '</ol>';
    rankingContainer.innerHTML = rankingHTML;

    let currentUser = JSON.parse(sessionStorage.getItem('loggedUser')); // Convertendo para objeto JavaScript
    console.log(currentUser);

    if (currentUser) {
        let userIndex = users.findIndex(user => user.nome === currentUser.nome);
        let userPosition = userIndex + 1;
        userPositionContainer.innerHTML = `<div class="user-position">
                                                <span class="ranking-position">${userPosition}</span>
                                                <span class="ranking-name">${currentUser.nome}</span>
                                                <span class="ranking-points">${currentUser.pontos}</span>
                                            </div>`;
    }
}

exibirRanking();

