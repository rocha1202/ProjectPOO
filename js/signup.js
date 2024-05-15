function saveData() {
    var nome = document.getElementById("nome").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var sexo = document.getElementById("sexo").value;
    var localidade = document.getElementById("localidade").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userDataArray = JSON.parse(localStorage.getItem("userData")) || [];

    // Verificar se o email já existe
    var existingUser = userDataArray.find(function (user) {
        return user.email === email;
    });

    if (existingUser) {
        alert("O e-mail já está em uso. Por favor, escolha outro e-mail.");
        return;
    }
    if (nome === "" || dataNascimento === "" || sexo === "" || localidade === "" || email === "" || password === "") {
        alert("Os campos têm que estar todos preenchidos")
    }
    else {
        var userData = {
            nome: nome,
            dataNascimento: dataNascimento,
            sexo: sexo,
            localidade: localidade,
            email: email,
            password: password,
            pontos: 0,
            avatar: ""
        };
        userDataArray.push(userData);
        localStorage.setItem("userData", JSON.stringify(userDataArray));
        alert("Dados salvos com sucesso!");
    }

}


function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userDataArray = JSON.parse(localStorage.getItem("userData")) || [];

    var user = userDataArray.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        alert("Login bem sucedido!");
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "/html/perfil.html"
    } else {
        alert("E-mail ou senha incorretos. Por favor, tente novamente.");
    }
}

