let users = [];

// Carrega os utilizadores para o localStorage
export function init() {
  if (localStorage.users) {
    const tempUsers = JSON.parse(localStorage.users);
    for (let user of tempUsers) {
      users.push(
        new User(
          user.nome,
          user.dataNascimento,
          user.genero,
          user.localidade,
          user.email,
          user.password,
          user.pontos,
          user.avatar,
          user.premios,
          user.bloqueado,
          user.eliminado
        )
      );
    }
  } else {
    users = [];
  }
}

// Login do utilizador
export function login(email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  } else {
    throw Error("Invalid login!");
  }
}

// Logout do utilizador
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// Verifica existência de alguém autenticado
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// Devolve utilizador autenticado
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}

export function findUser(userId) {
  console.log(users, userId);
  return users.find((user) => user.id == userId);
}

// Adiciona os utilizadores
export function add(
  nome,
  dataNascimento,
  genero,
  localidade,
  email,
  password,
  pontos,
  avatar,
  premios,
  bloqueado,
  eliminado
) {
  if (users.some((user) => user.email === email)) {
    throw Error(
      `Este email "${email}" já existe! Por favor escolha outro nome.`
    );
  } else {
    users.push(
      new User(
        nome,
        dataNascimento,
        genero,
        localidade,
        email,
        password,
        pontos,
        avatar,
        premios,
        bloqueado,
        eliminado
      )
    );
    localStorage.setItem("users", JSON.stringify(users));
  }

  console.log(users);
}

function getNextId() {
  return bands.length > 0 ? bands.length + 1 : 1;
}

//Classe de utilizadores
class User {
  id = null;
  nome = "";
  dataNascimento = "";
  genero = "";
  localidade = "";
  email = "";
  password = "";
  pontos = 0;
  avatar = "";
  premios = [];
  bloqueado = "";
  eliminado = "";

  constructor(
    nome,
    dataNascimento,
    genero,
    localidade,
    email,
    password,
    pontos,
    avatar,
    premios,
    bloqueado,
    eliminado
  ) {
    this.id = getNextId();
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.genero = genero;
    this.localidade = localidade;
    this.email = email;
    this.password = password;
    this.pontos = pontos;
    this.avatar = avatar;
    this.premios = premios;
    this.bloqueado = bloqueado;
    this.eliminado = eliminado;
  }
}
