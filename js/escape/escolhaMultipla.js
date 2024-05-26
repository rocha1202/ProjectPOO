

import { iniciarQuiz, showQuestionModal } from './perguntas.js';


document.addEventListener('DOMContentLoaded', function () {
    imageMapResize();

    // Shuffle questions array
    iniciarQuiz();

    document.querySelectorAll('area').forEach(area => {
        area.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            showQuestionModal(index);
        });
    });


});
