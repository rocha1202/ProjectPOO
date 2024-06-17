const nav = document.querySelector(".navbar");
const navDetail = document.querySelector("#navDetail");

const renderNavInicio = () => {

  nav.innerHTML = `<div class="container-fluid">
    <a href=${navDetail ? "/index.html" : "../index.html"} class="navbar-brand">
      <img src="/img/Logotipo.svg" alt="Logo TSIW" class="logo">
    </a>
        <a href=${navDetail ? "/index.html" : "../index.html"}>
      <i><img src="/img/icons/User/home.svg" alt="Logo TSIW" class="logo"></i>
    </a>

  </div>`;
};

renderNavInicio();
