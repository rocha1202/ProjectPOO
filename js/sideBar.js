const sideBar = document.querySelector(".sideBar");
const sideBarDetail = document.querySelector(".sideBarDetail");

const renderSideBar = () => {
  sideBar.innerHTML += `<a onclick="closeNav()"><i class="ph ph-x closeBtn"></i></a>
  <div class="nav_options d-flex flex-column">
  <a href=${
    !sideBarDetail
      ? "#saidas_profissionais"
      : "../index.html#saidas_profissionais"
  } onclick="closeNav()"
    >Saídas Profissionais</a
  >
  <a href=${
    !sideBarDetail ? "#eventos_noticias" : "../index.html#eventos_noticias"
  } onclick="closeNav()">Eventos/Notícias</a>
  <a href="">Galeria</a>
  <a href=${
    !sideBarDetail ? "#sobre" : "../index.html#sobre"
  } onclick="closeNav()">Sobre</a>
  <a href=${
    !sideBarDetail ? "#testemunhos" : "../index.html#testemunhos"
  } onclick="closeNav()">Testemunhos</a>
  <a href=${
    !sideBarDetail ? "#contactos" : "../index.html#contactos"
  } onclick="closeNav()">Contactos</a>
  <a href=${!sideBarDetail ? "./html/login.html" : "./login.html"}>Login</a>
</div>
<div class="d-flex linguas"><a href="">EN</a> | <a href="">PT</a></div>`;
};

renderSideBar();

function openNav() {
  document.getElementById("sideBar").style.width = "250px";
  document.getElementById("menu").style.opacity = 0;
}

function closeNav() {
  document.getElementById("sideBar").style.width = 0;
  document.getElementById("menu").style.opacity = "100%";
}
