const nav = document.querySelector(".navbar");
const navDetail = document.querySelector("#navDetail");

const renderNavInicio = () => {
  nav.innerHTML = `<div class="container-fluid">
    <a href=${navDetail ? "../index.html" : "index.html"} class="navbar-brand"
      ><img src=${
        navDetail ? "../img/Logotipo.svg" : "./img/Logotipo.svg"
      } alt="Logo TSIW" class="logo"
    /></a>
    <i class="ph ph-list" id="menu" onclick="openNav()"></i>
  </div>`;
};
renderNavInicio();
