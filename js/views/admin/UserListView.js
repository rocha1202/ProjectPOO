import * as User from "../../models/UsersModel.js";

function userCatalog() {
  User.init();

  renderCatalog(User.getUsers());

  //Clicar no botão filtrar
  document.querySelector("#btnFilter").addEventListener("click", () => {
    const text = document.querySelector("#text").value;
    const genero = document.querySelector("#genero").value;
    const bloqueado = document.querySelector("#bloqueado").value;
    const eliminado = document.querySelector("#eliminado").value;
    const tipo = document.querySelector("#tipo").value;
    console.log(text, genero, bloqueado, eliminado, tipo);
    renderCatalog(User.getUsers(text, genero, bloqueado, eliminado, tipo));
  });

  //Clicar no botão de ordenar
  document.querySelector("#btnSort").addEventListener("click", () => {
    User.sortUsers();
    renderCatalog(User.getUsers());
  });
}

function renderCatalog(users = []) {
  let render = "";
  users.map((user) => (render += generateListItem(user)));
  // Atribuição de todos os cards gerados ao elemento com id userCatalog
  document.querySelector("#userCatalog").innerHTML = render;
}

function generateListItem(user) {
  let render = `
        <div class='d-flex border rounded mb-3 justify-content-between px-3 py-1'>
            <p>${user.nome}</p>
            <p>${user.email}</p>
            <button id='${user.id}'>Ver</button>
        </div>
    `;
  return render;
}

userCatalog();
