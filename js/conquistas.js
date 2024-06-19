var currentUser = JSON.parse(sessionStorage.getItem("loggedUser"));

if (currentUser) {
    document.getElementById("pontos").textContent = currentUser.pontos;
    document.getElementById("avatarImage").src = "/img/avatares/" + currentUser.avatar;

    var achievementContainer = document.getElementById("achievementContainer");

    var table = document.createElement("table");
    table.className = "table table-striped";
    var tbody = document.createElement("tbody");

    var premiosList = JSON.parse(localStorage.getItem("premios"));

    if (premiosList) {
        currentUser.premios.forEach(function (premio, index) {
            if (premio.id) {
                var premioLocal = premiosList.find(p => p.id === premio.id);
                console.log(`premio_${premio.id}:`, premioLocal); // Log de depuração

                if (premioLocal) {
                    // Verificar se o prêmio não está eliminado
                    if (premioLocal.eliminado === "N") {
                        // premios se o tipo for pontos
                        if (premio.tipo === "pontos" && premio.completo !== "S") {
                            premio.progresso = currentUser.pontos; //igual os pontos

                            sessionStorage.setItem("loggedUser", JSON.stringify(currentUser));
                            console.log(`Progresso atualizado para ${premio.progresso}`);
                        }

                        var row = document.createElement("tr");

                        var imgCell = document.createElement("td");
                        var img = document.createElement("img");

                        var percent = (premio.progresso / premioLocal.progresso) * 100;

                        if (percent >= 100) {
                            img.src = premioLocal.img_desbloq;
                        } else {
                            img.src = premioLocal.img_bloq;
                        }

                        img.width = 64;
                        img.height = 64;
                        imgCell.appendChild(img);
                        row.appendChild(imgCell);

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
                        console.warn(`Premio with id ${premio.id} is marked as eliminated`);
                    }
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
    window.location.href = "./login.html";
}
