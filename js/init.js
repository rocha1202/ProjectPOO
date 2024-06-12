import * as User from "./models/UsersModel.js";
import * as Publicacao from "./models/NoticiasEventosModel.js";
import * as Testemunho from "./models/TestemunhosModel.js";
/* 
import * as Premio from "./models/PremiosModel";
import * as Media from "./models/GaleriaModel"; */

initdata();

function initdata() {
  if (!localStorage.users) {
    const users = [
      {
        id: 1,
        nome: "User1",
        dataNascimento: "200-03-02",
        genero: "F",
        localidade: "Vila de Conde",
        email: "user1@gmail.com",
        password: "pass1",
        pontos: 120,
        avatar: "F3.svg",
        premios: [
          {
            nome: "Consiga 100 pontos",
            completo: "S",
            data_completo: "2024-04-01",
          },
          {
            nome: "Consiga 1000 pontos",
            completo: "N",
            data_completo: "",
          },
        ],
        bloqueado: "N",
        eliminado: "N",
        tipo: "user",
      },
      {
        id: 2,
        nome: "User2",
        dataNascimento: "2002-09-12",
        genero: "M",
        localidade: "Gaia",
        email: "user2@gmail.com",
        password: "pass2",
        pontos: 100,
        avatar: "M2.svg",
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
        bloqueado: "N",
        eliminado: "S",
        tipo: "user",
      },
      {
        id: 3,
        nome: "Admin1",
        dataNascimento: "2001-05-09",
        genero: "M",
        localidade: "Braga",
        email: "admin1@gmail.com",
        password: "admin1",
        pontos: 0,
        avatar: "M1.svg",
        premios: [],
        bloqueado: "N",
        eliminado: "N",
        tipo: "admin",
      },
    ];

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
        user.premios,
        user.bloqueado,
        user.eliminado,
        user.tipo
      );
    });
  }

  if (!localStorage.publicacoes) {
    const publicacoes = [
      {
        id: 1,
        titulo: "Apresentação do HaHaArt Film Festival",
        sub_titulo:
          "A Escola Superior de Media Artes e Design recebe a apresentação do Festival Internacional de Cinema de Comédia do Pombal",
        img: "https://scontent.fopo6-1.fna.fbcdn.net/v/t39.30808-6/298399205_107384335413837_2366432611953888391_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HbSt_gH4pekQ7kNvgESiGzA&_nc_ht=scontent.fopo6-1.fna&oh=00_AYDsK-JkLsm0aMOm1U7WQSORbPvLRZGXzxH0Ofzb6skptQ&oe=664FB590",
        descricao: `No dia 20 de maio de 2024, pelas 14h30, a Escola Superior de Media Artes e Design recebe Manuel Oliveira, Diretor do HaHaArt Film Festival Para uma apresentação do festival, bem como exibição do filme Nada nas Mãos, de Paolo Marinou-Blanco.<br>O HaHaArt Film Festival, festival internacional de cinema de comédia, é uma mostra de projetos artísticos emergentes do cinema de comédia. Neste sentido, o festival pretende desafiar a normativa de colocar o cinema de comédia num patamar que diverge do aplicado aos outros géneros e de o esquecer no discurso da arte e qualidade cinematográficas.<br>Realizado na cidade de Pombal, no Centro de Portugal, durante três dias, o HaHaArt Film Festival apresenta uma seleção de curtas-metragens nacionais e internacionaisdo género de comédia, cuidadosamente curadas e selecionadas. Apresenta ainda um espaço para o debate de assuntos relevantes para o panorama do cinema e, em particular, da comédia, através da realização de mesas redondas e masterclasses integradas no programa.<br>A terceira edição do festival decorre de 24 a 28 de outubro de 2024 e as submissões estão a decorrer até dia 31 de julho.`,
        data_publicado: "2024-05-17",
        tipo: "evento",
        eliminado: "N",
      },
    ];

    publicacoes.forEach((publicacao) => {
      Publicacao.add(
        publicacao.titulo,
        publicacao.sub_titulo,
        publicacao.img,
        publicacao.descricao,
        publicacao.data_publicado,
        publicacao.tipo,
        publicacao.eliminado
      );
    });
  }

  if (!localStorage.testemunhos) {
    const testemunhos = [
      {
        id: 1,
        titulo: "Espaço Alumni | Gonçalo Ribeiro",
        sub_titulo:
          "Gonçalo Ribeiro, alumnus da Licenciatura em Tecnologias e Sistemas de Informação para a Web, trabalha atualmente na Natixis.",
        img: "https://www.esmad.ipp.pt/noticias/espaco-alumni-goncalo-ribeiro/image",
        descricao: `Gonçalo Ribeiro, alumnus da Licenciatura em Tecnologias e Sistemas de Informação para a Web, trabalha atualmente como Junior Developer, na Natixis. Como Junior Developer, na Natixis, dedica-se ao desenvolvimento full stack em múltiplos projetos na área de Seguros — do Ramo Não Vida — associados ao Grupo BPCE, o segundo maior grupo bancário de França. Paralelamente, frequenta o Mestrado em Engenharia Informática, no ISEP. Conheceu a Natixis durante o evento Plug-in da ESMAD, depois, em março de 2022, começou um estágio curricular em automação de testes de software, e mais tarde avançou para um estágio profissional como Developer Intern. Esta experiência culminou na sua atual posição de Junior Developer, assumida em novembro de 2023. Gonçalo define que "todo este percurso tem sido extremamente enriquecedor e desafiante, contribuindo significativamente para o meu crescimento pessoal e profissional". Segundo o próprio "a Licenciatura em Tecnologias e Sistemas de Informação para a Web revelou-se fundamental, proporcionando-me uma formação sólida e criativa no desenvolvimento de software, com ênfase especial em aplicações web e mobile. Os projetos práticos, e em particular o desafio de desenvolver aplicações com gamificação para o concurso GamifyIt, organizado pela ESMAD, permitiram-me não só aplicar conhecimentos teóricos em cenários reais, como também inovar e criar soluções criativas. A interação constante com um corpo docente experiente e dedicado, juntamente com o trabalho em equipa, enriqueceu enormemente a minha experiência.`,
        data_publicado: "2024-05-31",
        eliminado: "N",
      },
    ];

    testemunhos.forEach((testemunho) => {
      Testemunho.add(
        testemunho.titulo,
        testemunho.sub_titulo,
        testemunho.img,
        testemunho.descricao,
        testemunho.data_publicado,
        testemunho.eliminado
      );
    });
  }
}
