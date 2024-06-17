import * as Testemunho from "../../../models/TestemunhosModel.js";

function testemunhoNovo() {
  Testemunho.init();

  document
    .querySelector("#formTestemunho")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const titulo = document.querySelector("#titulo").value;
      const sub_titulo = document.querySelector("#subTitulo").value;
      const descricao = document.querySelector("#descricao").value;
      const fileInput = document.querySelector("#file");

      const date = new Date();
      const data = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

      if (fileInput.files.length === 0) {
        displayMessage("No file selected", "danger");
        return;
      }

      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
        const filePath = event.target.result; // Base64 string of the file content

        // Assuming Testemunho.add() can handle base64 strings for images
        try {
          Testemunho.add(titulo, sub_titulo, filePath, descricao, data, "N");
          displayMessage("Testemunho adicionado com sucesso!", "success");
          setTimeout(() => {
            window.location.href = "/html/admin/testemunhos/testemunhos.html";
          }, 1000);
        } catch (e) {
          displayMessage(e.message, "danger");
        }
      };

      reader.readAsDataURL(file); // Convert file to base64 string
    });
}

function displayMessage(message, type) {
  const divMessage = document.querySelector("#msg");
  divMessage.innerHTML = `
        <div class='alert alert-${type}' role='alert'>${message}</div>
    `;
  setTimeout(() => {
    divMessage.innerHTML = "";
  }, 2000);
}

testemunhoNovo();
  