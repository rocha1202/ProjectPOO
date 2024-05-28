import { perguntasSala1, perguntasSala2 } from './perguntas.js';

document.addEventListener('DOMContentLoaded', function () {
    let perguntas;

    if (window.location.pathname.includes('sala1.html')) {
        perguntas = perguntasSala1;
    } else if (window.location.pathname.includes('sala2.html')) {
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
                if (perguntasRespondidas === 3) {
                    $('#infoModal').modal('hide');
                    $('#key').css('display', 'block');
                    alert('Parabéns! Você conseguiu a chave.');

                    document.getElementById('porta').setAttribute('href', '#');

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