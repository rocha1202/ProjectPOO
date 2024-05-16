import * as User from "./models/UsersModel";

initdata();

function initdata() {
  const users = {
    nome: "User1",
    dataNascimento: "02-03-2000",
    genero: "F",
    localidade: "Vila de Conde",
    email: "user1@gmail.com",
    password: "pass1",
    pontos: 120,
    avatar: "",
    premios: [
      {
        nome: "Consiga 100 pontos",
        completo: "S",
        data_completo: "01-04-2024",
      },
      {
        nome: "Consiga 1000 pontos",
        completo: "N",
        data_completo: "",
      },
    ],
  };

  users.forEach((user) => {
    User.add(
      user.nome,
      user.dataNascimento,
      user.genero,
      user.localidade,
      user.email,
      user.password,
      user.pontos,
      user.avatar,
      user.premios
    );
  });
}
