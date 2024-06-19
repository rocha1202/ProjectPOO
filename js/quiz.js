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
const getFormattedDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
  };
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
                alert(`Perdeste.\nConseguiste responder a ${score - 1} perguntas.`);
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
        currentUser.pontos = (currentUser.pontos || 0) + (score - 1); // Adiciona os pontos ao total do usuário
        sessionStorage.setItem("loggedUser", JSON.stringify(currentUser));

        // Atualiza o usuário no localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let userIndex = users.findIndex(user => user.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex].pontos = currentUser.pontos;
            localStorage.setItem("users", JSON.stringify(users));
        }


        var premiosList = JSON.parse(localStorage.getItem("premios"));

        if (premiosList) {
            currentUser.premios.forEach(function (premio, index) {
                if (premio.id) {
                    var premioLocal = premiosList.find(p => p.id === premio.id);
                    console.log(`premio_${premio.id}:`, premioLocal); // Log de depuração

                    if (premioLocal) {
                        // Verificar se o prêmio corresponde ao tipo e não está completo
                        if (premio.tipo === "quiz" && premio.completo !== "S") {
                            premio.progresso += 1;

                            // Atualizar sessionStorage com os novos dados de currentUser
                            sessionStorage.setItem("loggedUser", JSON.stringify(currentUser));

                            // Atualizar users.premios na localStorage
                            if (userIndex !== -1) {
                                users[userIndex].premios = currentUser.premios;
                                localStorage.setItem("users", JSON.stringify(users));
                            }

                            console.log(`Progresso atualizado para ${premio.progresso}`);

                            // Verificar se o progresso do usuário alcançou o progresso do prêmio
                            if (premio.progresso == premioLocal.progresso) {
                                premio.data_completo = getFormattedDate();
                                premio.completo = "S";

                                // Atualizar sessionStorage com os novos dados de currentUser
                                sessionStorage.setItem("loggedUser", JSON.stringify(currentUser));

                                // Atualizar users.premios na localStorage
                                if (userIndex !== -1) {
                                    users[userIndex].premios = currentUser.premios;
                                    localStorage.setItem("users", JSON.stringify(users));
                                }

                                console.log(`Prêmio ${premio.id} completo!`);
                            }
                        }
                    } else {
                        console.error(`Prêmio com id ${premio.id} não encontrado em localStorage`);
                    }
                } else {
                    console.error(`Prêmio no índice ${index} não possui um ID válido`, premio);
                }
            });
        } else {
            console.error('Lista de prêmios não encontrada em localStorage');
        }


    } else {
        console.error('Premios list not found in localStorage');
    }
}
