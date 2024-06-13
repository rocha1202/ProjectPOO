import { perguntasSala1, perguntasSala2 } from './perguntas.js';

let local = "";
let pontos = 0; // Pontos acumulados pelo jogador

document.addEventListener('DOMContentLoaded', function () {
    let perguntas;

    if (window.location.pathname.includes('sala1.html')) {
        local = "Sala1";
        perguntas = perguntasSala1;
    } else if (window.location.pathname.includes('sala2.html')) {
        local = "Sala2";
        perguntas = perguntasSala2;
    } else {
        console.error('Página desconhecida!');
        return;
    }

    iniciarQuiz(perguntas);
    document.querySelectorAll('area').forEach(area => {
        area.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'), 10);
            if (!isNaN(index) && index >= 0 && index < perguntas.length) {
                showQuestionModal(perguntas, index);
            } else {
                console.log("Erro por causa do video. Ignorar")
            }
        });
    });

    imageMapResize();
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function iniciarQuiz(perguntas) {
    shuffle(perguntas); // Embaralha as perguntas ao iniciar
}

let perguntasRespondidas = 0; // Variável para contar o número de perguntas respondidas corretamente

function showQuestionModal(perguntas, index) {
    const pergunta = perguntas[index];
    const modalTitle = pergunta.pergunta;
    let modalContent = '';

    pergunta.opcoes.forEach((opcao, i) => {
        modalContent += `<div class="form-check">
        <input class="form-check-input" type="radio" name="opcao" id="opcao${i}" value="${i}">
        <label class="form-check-label" for="opcao${i}"> ${opcao}
        </label>
      </div>`;
    });

    document.getElementById('infoModalLabel').textContent = modalTitle;
    document.querySelector('#infoModal .modal-body').innerHTML = modalContent;
    document.getElementById('verifyButton').onclick = function () {
        const selectedOption = document.querySelector('input[name="opcao"]:checked');
        if (selectedOption) {
            const userAnswer = parseInt(selectedOption.value, 10);
            if (userAnswer === pergunta.respostaCorreta) {
                alert('Resposta correta!');
                perguntas.splice(index, 1); // Remove a pergunta do array
                perguntasRespondidas++;
                pontos += 2; // Adiciona 2 pontos para cada resposta correta

                if (perguntasRespondidas === 3) {
                    $('#infoModal').modal('hide');
                    $('#key').css('display', 'block');
                    updateUserPoints();
                    document.getElementById('porta').setAttribute('href', '../menuES.html');
                    
                    // Display the key achievement modal
                    document.getElementById('totalPoints').textContent = pontos;
                    $('#keyModal').modal('show');
                } else {
                    $('#infoModal').modal('hide');
                }
                document.getElementById(`area${index}`).removeAttribute('data-index');  //Remove o atributo data-index da área correspondente

            } else {
                alert('Resposta incorreta. Tente novamente.');
            }
        } else {
            alert('Por favor, selecione uma resposta.');
        }
    };
    $('#infoModal').modal('show');
}

function updateUserPoints() {
    let currentUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    if (currentUser) {
        currentUser.pontos = (currentUser.pontos || 0) + pontos; // Adiciona os pontos ao total do usuário
        sessionStorage.setItem("loggedUser", JSON.stringify(currentUser));

        // Atualiza o usuário no localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let userIndex = users.findIndex(user => user.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex].pontos = currentUser.pontos;
            localStorage.setItem("users", JSON.stringify(users));
        }
    }
}
