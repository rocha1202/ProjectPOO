import * as User from "./models/UsersModel.js";
import * as Publicacao from "./models/NoticiasEventosModel.js";
import * as Testemunho from "./models/TestemunhosModel.js";
import * as Premio from "./models/PremiosModel.js";

/* 
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
            id_premio: 1,
            completo: "N",
            data_completo: "",
            progresso: 0,
            tipo: "escapeRoom",
            eliminado: "N",

          }, {
            id_premio: 2,
            completo: "S",
            data_completo: "2024-04-20",
            progresso: 3,
            tipo: "quiz",
            eliminado: "N",

          }],
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
            id_premio: 1,
            completo: "S",
            data_completo: "2024-05-29",
            progresso: 5,
            tipo: "escaRoom",
            eliminado: "N",

          }, {
            id_premio: 2,
            completo: "N",
            data_completo: "",
            progresso: 1,
            tipo: "quiz",
            eliminado: "N",

          }],
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
        bloqueado: "N",
        premios: [
          {
            id_premio: 1,
            completo: "N",
            data_completo: "",
            progresso: 0,
            tipo: "escapeRoom",
            eliminado: "N",

          }, {
            id_premio: 2,
            completo: "N",
            data_completo: "",
            progresso: 0,
            tipo: "quiz",
            eliminado: "N",
          }],
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
        titulo: "Regulamento greal sobre proteção de dados",
        sub_titulo:
          "A Licenciatura em Tecnologias e Sistemas de Informação para a Web recebe Jorge Pinto Leite para um seminário sobre proteção de dados.",
        img: "https://www.esmad.ipp.pt/noticias/regulamento-geral-sobre-protecao-de-dados/image",
        descricao: `No dia 8 de abril de 2024, pelas 11h00, realiza-se o seminário "Regulamento Geral sobre Proteção de Dados", com o orador convidado Jorge Pinto Leite, Professor do Instituto Superior de Engenharia do Porto (ISEP) e Encarregado de Proteção de Dados do P.PORTO. Neste seminário pretende-se sensibilizar os estudantes para a correta utilização e armazenamento de dados no desenvolvimento de aplicações, sobretudo os de natureza pessoal e institucional. A sessão decorre no anfiteatro B301, no âmbito da UC de Projeto II da Licenciatura em Tecnologias e Sistemas de Informação para a Web.`,
        data_publicado: "2024-03-26",
        tipo: "evento",
        eliminado: "N",
      }, {
        id: 2,
        titulo: "Apresentação do HaHaArt Film Festival",
        sub_titulo:
          "A Escola Superior de Media Artes e Design recebe a apresentação do Festival Internacional de Cinema de Comédia do Pombal",
        img: "https://www.esmad.ipp.pt/noticias/apresentacao-do-hahaart-film-festival/image",
        descricao: `No dia 20 de maio de 2024, pelas 14h30, a Escola Superior de Media Artes e Design recebe Manuel Oliveira, Diretor do HaHaArt Film Festival Para uma apresentação do festival, bem como exibição do filme Nada nas Mãos, de Paolo Marinou-Blanco.<br>O HaHaArt Film Festival, festival internacional de cinema de comédia, é uma mostra de projetos artísticos emergentes do cinema de comédia. Neste sentido, o festival pretende desafiar a normativa de colocar o cinema de comédia num patamar que diverge do aplicado aos outros géneros e de o esquecer no discurso da arte e qualidade cinematográficas.<br>Realizado na cidade de Pombal, no Centro de Portugal, durante três dias, o HaHaArt Film Festival apresenta uma seleção de curtas-metragens nacionais e internacionaisdo género de comédia, cuidadosamente curadas e selecionadas. Apresenta ainda um espaço para o debate de assuntos relevantes para o panorama do cinema e, em particular, da comédia, através da realização de mesas redondas e masterclasses integradas no programa.<br>A terceira edição do festival decorre de 24 a 28 de outubro de 2024 e as submissões estão a decorrer até dia 31 de julho.`,
        data_publicado: "2024-05-17",
        tipo: "evento",
        eliminado: "N",
      }, {
        id: 3,
        titulo: "Dia da ESMAD",
        sub_titulo:
          "A Escola Superior de Media Artes e Design do Politécnico do Porto celebra o oitavo aniversário.",
        img: "https://www.esmad.ipp.pt/noticias/dia-da-esmad-4/image",
        descricao: `No dia 27 de maio de 2024 celebra-se o aniversário da Escola Superior de Media Artes e Design do Politécnico do Porto 14h30 | Receção dos Convidados 14h45 | Off Limits Orchestra interpreta Cinema, Rodrigo Leão (arranjo de Estela Alexandre), Haja o que houver, Madredeus (arranjo de Estela Alexandre), Porto Sentido, Rui Veloso (arranjo de Clara Lacerda)  15h15 | Sessão de Abertura Presidente da ESMAD | Olívia Marques da Silva Presidente da AE ESMAD | Luís Silva Vice-Presidente da Câmara Municipal da Póvoa de Varzim | Luís Diamantino Vereador da Câmara Municipal de Vila do Conde | Paulo Vasques Vice-Presidente do Politécnico do Porto | António Marques 16h00 | Entrega de Diploma do Mérito Académico 16h05 | Apresentações Virtuais de Media Artes e Design  16h45 | Encerramento da Sessão`,
        data_publicado: "2024-05-24",
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
        titulo: "Espaço Alumni | Nuno Costa",
        sub_titulo:
          "Nuno Costa, alumnus da Licenciatura em Tecnologias e Sistemas de Informação para a Web, trabalha atualmente na MOG Technologies.",
        img: "https://www.esmad.ipp.pt/noticias/espaco-alumni-nuno-costa/image",
        descricao: `Nuno Costa, alumnus da Licenciatura em Tecnologias e Sistemas de Informação para a Web, trabalha atualmente como Assistente Convidado na Escola Superior de Media Artes e Design e como Software Developer na MOG Technologies. Durante a frequência do curso, em conjunto com dois colegas, conquistou o 1.º lugar no concurso internacional de programação I Juezlti Contest of EU Code Week. A jornada do Nuno na MOG teve início num evento organizado pela ESMAD, o Plug-in, que tem como objetivo promover uma ligação mais estreita entre os estudantes e as empresas. Durante o seu estágio na empresa, desenvolveu um projeto no ramo da educação, colaborando com parceiros de diferentes países europeus. Após a conclusão do estágio, Nuno foi convidado a integrar uma equipa de desenvolvimento da empresa onde estagiou. “Ingressar em TSIW preparou-me para os desafios do mundo profissional. Os diferentes projetos de grupo e o foco nas tecnologias mais recentes proporcionaram-me uma base sólida de conhecimentos e habilidades práticas, como o trabalho de equipa e resolução de problemas.” Como Assistente Convidado, compartilha o seu conhecimento na mesma instituição onde se formou, contribuindo para a formação de futuros profissionais na área.`,
        data_publicado: "2024-04-04",
        eliminado: "N",
      },

      {
        id: 2,
        titulo: "Espaço Alumni | Inês Reis",
        sub_titulo:
          "Inês Reis, alumnus da Licenciatura em Tecnologias e Sistemas de Informação para a Web, frequenta atualmente o Mestrado em Sistemas e Media Interativos.",
        img: "https://www.esmad.ipp.pt/noticias/espaco-alumni-ines-reis/image",
        descricao: `Inês Reis, alumnus da Licenciatura em Tecnologias e Sistemas de Informação para a Web, frequenta atualmente, o Mestrado em Sistemas e Media Interativos da ESMAD. Citando a Inês "digo, de coração cheio, que os três anos na licenciatura foram transformadores". Inicialmente sem rumo, descobriu a sua paixão: o Design da Experiência do Utilizador e de Interfaces. "A licenciatura, elogiada por muitos conhecidos pelas suas competências abrangentes, proporcionou-me não apenas formação profissional, mas também experiências académicas que nunca vou esquecer". Inês fez o seu estágio na Kendir Studios, onde desempenhou o papel de Gestora de Projetos e UX Designer. Da altura do estágio, destaca a criação do recurso educativo digital Fibonacci e o Número de Ouro, premiado pela Direção-Geral de Educação. Realça, igualmente, as pilotagens em escolas de diversos concelhos, desde Vila Nova de Gaia a Sintra, para o Recurso Educativo Digital de "Sustentabilidade", onde teve a oportunidade de estudar várias turmas de diferentes anos, desde o 7.º ao 9.º ano. Finalizou o estágio com o que, segundo a própria, foi a sua maior conquista até aos dias de hoje: pela primeira vez, na história do curso, obteve 20 valores no estágio. Inês Reis integrará a equipa da MOG Technologies, como Gestora de Projetos de Inovação, o que dará seguimento ao seu percurso profissional.`,
        data_publicado: "2024-04-22",
        eliminado: "N",
      },
      {
        id: 3,
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

  if (!localStorage.premios) {
    const premios = [
      {
        id: 1,
        titulo: "Complete 5 Escape Rooms",
        img_bloq: "/img/premios/P1_blo.svg",
        img_desbloq: "/img/premios/P1_des.svg",
        progresso: 5,
        eliminado: "N",
        tipo: "escapeRoom"

      },
      {
        id: 2,
        titulo: "Termine 3 quizzes",
        img_bloq: "/img/premios/P2_blo.svg",
        img_desbloq: "/img/premios/P2_des.svg",
        progresso: 3,
        eliminado: "N",
        tipo: "quiz"
      },
    ];

    premios.forEach((premio) => {
      Premio.add(
        premio.titulo,
        premio.img_bloq,
        premio.img_desbloq,
        premio.progresso,
        premio.tipo,
        premio.eliminado
      );
    });
  }
}
