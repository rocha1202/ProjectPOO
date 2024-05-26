const perguntas = [
    {
        pergunta: "O que significa a sigla 'CPU' em informática?",
        opcoes: [
            "Central Processing Unit",
            "Central Programming Unit",
            "Central Power Unit",
            "Central Performance Unit"
        ],
        respostaCorreta: 0 // Índice da resposta correta no array de opções
    },
    {
        pergunta: "Qual dos seguintes é um sistema operacional?",
        opcoes: [
            "Microsoft Word",
            "Linux",
            "Google Chrome",
            "Python"
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual é a função principal da RAM em um computador?",
        opcoes: [
            "Armazenar dados permanentemente",
            "Executar operações aritméticas",
            "Armazenar dados temporariamente para acesso rápido",
            "Controlar os dispositivos de entrada e saída"
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual linguagem de programação é principalmente usada para desenvolvimento web?",
        opcoes: [
            "Java",
            "HTML",
            "C++",
            "COBOL"
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "O que é um 'firewall' em termos de segurança de rede?",
        opcoes: [
            "Um tipo de malware",
            "Um software ou hardware que bloqueia acessos não autorizados",
            "Um programa de antivírus",
            "Um protocolo de comunicação"
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual é a finalidade do protocolo HTTP?",
        opcoes: [
            "Transferir e-mails entre servidores",
            "Proteger redes com criptografia",
            "Transferir páginas web pela Internet",
            "Conectar dispositivos Bluetooth"
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "O que é 'phishing'?",
        opcoes: [
            "Um tipo de ataque cibernético que tenta obter informações pessoais disfarçando-se como uma entidade confiável",
            "Um método de compactação de arquivos",
            "Um tipo de criptografia de dados",
            "Um protocolo de comunicação de rede"
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual é a diferença entre software livre e software proprietário?",
        opcoes: [
            "Software livre é gratuito e software proprietário é pago",
            "Software livre pode ser modificado e redistribuído, enquanto software proprietário tem restrições de uso, modificação e distribuição",
            "Software livre só funciona em sistemas operacionais Linux e software proprietário só funciona em Windows",
            "Não há diferença significativa entre os dois"
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "O que é uma 'rede de área local' (LAN)?",
        opcoes: [
            "Uma rede que cobre uma área geográfica extensa, como uma cidade ou país",
            "Uma rede que conecta dispositivos dentro de uma área geográfica limitada, como uma casa ou escritório",
            "Uma rede que utiliza satélites para comunicação",
            "Uma rede exclusiva para comunicação entre dispositivos móveis"
        ],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual das seguintes opções é um exemplo de um dispositivo de entrada?",
        opcoes: [
            "Impressora",
            "Monitor",
            "Teclado",
            "Alto-falante"
        ],
        respostaCorreta: 2
    }
];
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function iniciarQuiz() {
    shuffle(perguntas); // Embaralha as perguntas ao iniciar o quiz
}

function showQuestionModal(index) {
    const pergunta = perguntas[index];
    const modalTitle = pergunta.pergunta;
    let modalContent = '';

    pergunta.opcoes.forEach((opcao, i) => {
        modalContent += `<div class="form-check">
        <input class="form-check-input" type="radio" name="opcao" id="opcao${i}" value="${i}">
        <label class="form-check-label" for="opcao${i}">
          ${opcao}
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
            } else {
                alert('Resposta incorreta. Tente novamente.');
            }
        } else {
            alert('Por favor, selecione uma resposta.');
        }
    };
    $('#infoModal').modal('show');
}

export { iniciarQuiz, showQuestionModal };