import * as User from "./models/UsersModel.js";
/* import * as Publicacao from "./models/NoticiasEventosModel";
import * as Testemunho from "./models/TestemunhosModel";
import * as Premio from "./models/PremiosModel";
import * as Media from "./models/GaleriaModel"; */

initdata();

function initdata() {
  const users = [
    {
      id: 1,
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
      bloqueado: "N",
      eliminado: "N",
    },
  ];

  /* const publicacoes = {
    id: 1,
    titulo: "Apresentação do HaHaArt Film Festival",
    sub_titulo:
      "A Escola Superior de Media Artes e Design recebe a apresentação do Festival Internacional de Cinema de Comédia do Pombal",
    img: "https://scontent.fopo6-1.fna.fbcdn.net/v/t39.30808-6/298399205_107384335413837_2366432611953888391_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HbSt_gH4pekQ7kNvgESiGzA&_nc_ht=scontent.fopo6-1.fna&oh=00_AYDsK-JkLsm0aMOm1U7WQSORbPvLRZGXzxH0Ofzb6skptQ&oe=664FB590",
    descricao: `No dia 20 de maio de 2024, pelas 14h30, a Escola Superior de Media Artes e Design recebe Manuel Oliveira, Diretor do HaHaArt Film Festival Para uma apresentação do festival, bem como exibição do filme Nada nas Mãos, de Paolo Marinou-Blanco.<br>O HaHaArt Film Festival, festival internacional de cinema de comédia, é uma mostra de projetos artísticos emergentes do cinema de comédia. Neste sentido, o festival pretende desafiar a normativa de colocar o cinema de comédia num patamar que diverge do aplicado aos outros géneros e de o esquecer no discurso da arte e qualidade cinematográficas.<br>Realizado na cidade de Pombal, no Centro de Portugal, durante três dias, o HaHaArt Film Festival apresenta uma seleção de curtas-metragens nacionais e internacionaisdo género de comédia, cuidadosamente curadas e selecionadas. Apresenta ainda um espaço para o debate de assuntos relevantes para o panorama do cinema e, em particular, da comédia, através da realização de mesas redondas e masterclasses integradas no programa.<br>A terceira edição do festival decorre de 24 a 28 de outubro de 2024 e as submissões estão a decorrer até dia 31 de julho.`,
    data_publicado: "17-05-2024",
    tipo: "evento",
    eliminado: "N",
  }; */

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
      user.eliminado
    );
  });

  /* publicacoes.forEach((publicacao) => {
    Publicacao.add(
      publicacao.titulo,
      publicacao.sub_titulo,
      publicacao.img,
      publicacao.descricao,
      publicacao.data_publicado,
      publicacao.tipo,
      publicacao.eliminado
    );
  }); */
}
