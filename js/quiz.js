import { perguntasSala1, perguntasSala2 } from './escape/perguntas.js';

const allQuestions = [...perguntasSala1, ...perguntasSala2];
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 1;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function selectRandomQuestions(array, numQuestions) {
    shuffle(array);
    return array.slice(0, numQuestions);
}

function updateScore() {
    document.getElementById('score').innerText = `${score}/10`;
}

function loadQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        updateUserPoints()
        alert("Concluiste o quiz. \n Recebeste 10 pontos");
        window.location.href = "../menuQuiz.html";
        return;
    }
    const questionObj = selectedQuestions[currentQuestionIndex];
    document.getElementById('question').innerText = questionObj.pergunta;

    const options = document.querySelectorAll('.option');
    const indexedOptions = questionObj.opcoes.map((option, index) => ({ option, index }));
    shuffle(indexedOptions);

    options.forEach((optionElement, index) => {
        const { option, index: originalIndex } = indexedOptions[index];
        optionElement.innerText = option;
        optionElement.onclick = () => {
            if (originalIndex === questionObj.respostaCorreta) {
                score++;
                updateScore();
                currentQuestionIndex++;
                loadQuestion();
            } else {
                alert(`Perdeste.\nConseguiste responder a ${score-1} perguntas.`);
                window.location.href = "../menuQuiz.html";
            }
        };
    });
}

selectedQuestions = selectRandomQuestions(allQuestions, 10);
loadQuestion();
updateScore();



function updateUserPoints() {
    let currentUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    if (currentUser) {
        currentUser.pontos = (currentUser.pontos || 0) + (score-1); // Adiciona os pontos ao total do usuário
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