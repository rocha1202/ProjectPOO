// Carrega os dados do usuário da sessionStorage e exibe no perfil
var currentUser = JSON.parse(sessionStorage.getItem("loggedUser"));

if (currentUser) {
    document.getElementById("pontos").textContent = currentUser.pontos;
    document.getElementById("avatarImage").src = "/img/avatares/" + currentUser.avatar;

    // Cria a tabela de prêmios
    var achievementContainer = document.getElementById("achievementContainer");

    var table = document.createElement("table");
    table.className = "table table-striped";

    // Cria o corpo da tabela
    var tbody = document.createElement("tbody");

    // Obter a lista de prêmios da localStorage
    var premiosList = JSON.parse(localStorage.getItem("premios"));
    
    if (premiosList) {
        currentUser.premios.forEach(function(premio, index) {
            if (premio.id) {
                // Encontra o prêmio correspondente na lista de prêmios
                var premioLocal = premiosList.find(p => p.id === premio.id);

                if (premioLocal) {
                    var row = document.createElement("tr");

                    // Cria a célula de imagem
                    var imgCell = document.createElement("td");
                    var img = document.createElement("img");

                    // Calcula a porcentagem de progresso
                    var percent = (premio.progresso / premioLocal.progresso) * 100;

                    // Verifica se o prêmio está completo e atualiza a imagem correspondente
                    if (percent >= 100) {
                        img.src = premioLocal.img_desbloq;
                    } else {
                        img.src = premioLocal.img_bloq;
                    }

                    img.width = 64;
                    img.height = 64;
                    imgCell.appendChild(img);
                    row.appendChild(imgCell);

                    // Cria a célula de detalhes
                    var detailsCell = document.createElement("td");
                    var titulo = document.createElement("h5");
                    titulo.textContent = premioLocal.titulo;
                    detailsCell.appendChild(titulo);

                    var progressDiv = document.createElement("div");
                    progressDiv.className = "progress";
                    var progressBar = document.createElement("div");
                    progressBar.className = "progress-bar";
                    progressBar.style.width = percent + "%";
                    progressBar.textContent = percent.toFixed(0) + "%";
                    progressDiv.appendChild(progressBar);
                    detailsCell.appendChild(progressDiv);

                    var completionInfo = document.createElement("p");
                    if (premio.completo === "S") {
                        completionInfo.textContent = `Completado em: ${premio.data_completo}`;
                    }
                    detailsCell.appendChild(completionInfo);

                    var progressInfo = document.createElement("p");
                    progressInfo.textContent = `Progresso: ${premio.progresso}/${premioLocal.progresso}`;
                    detailsCell.appendChild(progressInfo);

                    row.appendChild(detailsCell);

                    tbody.appendChild(row);
                } else {
                    console.error(`Premio with id ${premio.id} not found in localStorage`);
                }
            } else {
                console.error(`Premio at index ${index} does not have a valid id`, premio);
            }
        });

        table.appendChild(tbody);
        achievementContainer.appendChild(table);
    } else {
        console.error('Premios list not found in localStorage');
    }
} else {
    // Se não houver dados de usuário na sessionStorage, redireciona para a página de login
    window.location.href = "./login.html";
}
