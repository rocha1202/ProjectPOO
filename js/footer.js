const footer = document.querySelector(".footer");
const footerDetail = document.querySelector(".footerDetail");

const renderFooter = () => {
  footer.innerHTML = `
    <div class="d-flex justify-content-between footer_container">
    <div class="logos col-3">
      <img src=${
        !footerDetail ? "/img/Logotipo.svg" : "../img/Logotipo.svg"
      } alt="Logo TSIW" class="logo_footer"
      />
      <br />
      <img
          src=${
            !footerDetail ? "/img/PPORTO_Cor.svg" : "../img/PPORTO_Cor.svg"
          }
          alt="Logo TSIW"
          class="logo_footer"
      />
    </div>
    <div class="col-3">
      <p class="info_uni">
        Escola Superior de Media Artes e Design <br />Rua D. Sancho I, n.º
        981
        <br />
        4480-876 Vila do Conde <br />Portugal <br />
        <br />
        T. +351 252 291 700 <br />E. geral@esmad.ipp.pt
      </p>
    </div>
    <div class="col-3 link_sociais">
      <p>Vê as nossas redes sociais!</p>
      <div class="d-flex icons">
        <a href="https://www.instagram.com/_tsiw.esmad_/">
          <i class="ph ph-instagram-logo"></i>
        </a>
        <a href="https://www.facebook.com/LTSIW">
          <i class="ph ph-facebook-logo"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCA1uYDftSXjN1Lx5E9-ByIg">
          <i class="ph ph-youtube-logo"></i>
        </a>
        <a href="">
          <i class="ph ph-envelope"></i>
        </a>
      </div>
    </div>
  </div>
    `;
};

renderFooter();
