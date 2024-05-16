 // Carrega os dados do usuário da sessionStorage e exibe no perfil
 var currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
 if (currentUser) {
     document.getElementById("pontos").textContent = currentUser.pontos;
     document.getElementById("profileName1").textContent = currentUser.nome;
     document.getElementById("profileName2").textContent = currentUser.nome;
     document.getElementById("profileBirthDate").textContent = currentUser.dataNascimento;
     document.getElementById("profileSex").textContent = currentUser.sexo;
     document.getElementById("profileLocation").textContent = currentUser.localidade;
     document.getElementById("profileEmail").textContent = currentUser.email;
     document.getElementById("profilePassword").textContent = currentUser.password;
     document.getElementById("avatarImage").src = "../img/avatares/" + currentUser.avatar;

     } else {
     // Se não houver dados de usuário na sessionStorage, redireciona para a página de login
     window.location.href = "./login.html";
 }
