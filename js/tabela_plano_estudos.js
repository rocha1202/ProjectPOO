/* TABELAS */
const tabela1 = document.getElementById("tabela1");
const tabela2 = document.getElementById("tabela2");
const tabela3 = document.getElementById("tabela3");

/* VARIÁVEIS */
const tabela1_data = [
  {
    uc: "Algoritmia e Estruturas de Dados",
    semestre: "1º Semestre",
    ects: "7.0",
  },
  {
    uc: "Fundamentos de Design",
    semestre: "1º Semestre",
    ects: "6.0",
  },
  {
    uc: "Fundamentos de Design",
    semestre: "1º Semestre",
    ects: "6.0",
  },
  {
    uc: "Matemática",
    semestre: "1º Semestre",
    ects: "5.0",
  },
  {
    uc: "Sistemas Computacionais",
    semestre: "1º Semestre",
    ects: "5.0",
  },
  {
    uc: "Tecnologias Web",
    semestre: "1º Semestre",
    ects: "7.0",
  },
  {
    uc: "Conceção e Produção Multimédia",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Interfaces e Design para Aplicações",
    semestre: "2º Semestre",
    ects: "6.0",
  },
  {
    uc: "Matemática II",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Programação Orientada a Objetos",
    semestre: "2º Semestre",
    ects: "7.0",
  },
  {
    uc: "Projeto I",
    semestre: "2º Semestre",
    ects: "7.0",
  },
];

const tabela2_data = [
  {
    uc: "Bases de Dados",
    semestre: "1º Semestre",
    ects: "5.0",
  },
  {
    uc: "Computação Gráfica",
    semestre: "1º Semestre",
    ects: "7.0",
  },
  {
    uc: "Engenharia de Software",
    semestre: "1º Semestre",
    ects: "6.0",
  },
  {
    uc: "Ergonomia Cognitiva e Design de Interação",
    semestre: "1º Semestre",
    ects: "5.0",
  },
  {
    uc: "Programação Web I",
    semestre: "1º Semestre",
    ects: "7.0",
  },
  {
    uc: "Inteligência Artificial",
    semestre: "2º Semestre",
    ects: "6.0",
  },
  {
    uc: "Programação Web II",
    semestre: "2º Semestre",
    ects: "7.0",
  },
  {
    uc: "Projeto II",
    semestre: "2º Semestre",
    ects: "6.0",
  },
  {
    uc: "Testes e Performance Web",
    semestre: "2º Semestre",
    ects: "6.0",
  },
  {
    uc: "Análise de Filmes (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Cultura Digital (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Laboratório I (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Laboratório II (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Programação I (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Programação III (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Publicação e Divulgação em Media Digitais (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Som (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Som e Imagem (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Som I (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Teoria e Análise da Imagem (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Teorias e Práticas da Comunicação (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Vídeo (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Vídeo I (opcional)",
    semestre: "2º Semestre",
    ects: "5.0",
  },
  {
    uc: "Vídeo I (opcional)</",
    semestre: "2º Semestre",
    ects: "5.0",
  },
];

const tabela3_data = [
  {
    uc: "Computação Móvel e Ubíqua",
    semestre: "1º Semestre",
    ects: "6.0",
  },
  {
    uc: "Inovação e Empreendedorismo",
    semestre: "1º Semestre",
    ects: "5.0",
  },
  {
    uc: "Negócio Eletrónico e Segurança",
    semestre: "1º Semestre",
    ects: "6.0",
  },
  {
    uc: "Prototipagem Avançada em Plataformas Digitais",
    semestre: "1º Semestre",
    ects: "6.0",
  },
  {
    uc: "Serviços e Interfaces para a Cloud",
    semestre: "1º Semestre",
    ects: "7.0",
  },
  {
    uc: "Marketing Digital",
    semestre: "2º Semestre",
    ects: "3.0",
  },
  {
    uc: "Projeto Final / Estágio",
    semestre: "2º Semestre",
    ects: "23.0",
  },
  {
    uc: "Usabilidade e User Experience",
    semestre: "2º Semestre",
    ects: "4.0",
  },
];

const renderTable1 = () => {
  tabela1.innerHTML = `
    <tr>
        <th colspan='3'>1º ano</th>
    </tr>
    <tr class='table_header'>
        <td class='uc_width'>Unidade Curricular</td>
        <td class='info'>Período</td>
        <td class='info'>ECTS</td>
    </tr>
    `;

  tabela1_data.map((data, index) => {
    tabela1.innerHTML += `
        <tr class='table_data' key=${index}>
            <td class='uc_width table_uc'>${data.uc}</td>
            <td class='info'>${data.semestre}</td>
            <td class='info'>${data.ects}</td>
        </tr>
        `;
  });
};

const renderTabela2 = () => {
  tabela2.innerHTML = `
    <tr>
        <th colspan='3'>2º ano</th>
    </tr>
    <tr class='table_header'>
        <td class='uc_width'>Unidade Curricular</td>
        <td class='info'>Período</td>
        <td class='info'>ECTS</td>
    </tr>
    `;

  tabela2_data.map((data, index) => {
    tabela2.innerHTML += `
            <tr class='table_data' key=${index}>
                <td class='uc_width table_uc'>${data.uc}</td>
                <td class='info'>${data.semestre}</td>
                <td class='info'>${data.ects}</td>
            </tr>
            `;
  });
};

const renderTabela3 = () => {
  tabela3.innerHTML = `
      <tr>
          <th colspan='3'>3º ano</th>
      </tr>
      <tr class='table_header'>
          <td class='uc_width'>Unidade Curricular</td>
          <td class='info'>Período</td>
          <td class='info'>ECTS</td>
      </tr>
      `;

  tabela3_data.map((data, index) => {
    tabela3.innerHTML += `
              <tr class='table_data' key=${index}>
                  <td class='uc_width table_uc'>${data.uc}</td>
                  <td class='info'>${data.semestre}</td>
                  <td class='info'>${data.ects}</td>
              </tr>
              `;
  });
};

renderTable1();
renderTabela2();
renderTabela3();
