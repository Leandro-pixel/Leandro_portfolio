import { createSlice } from "@reduxjs/toolkit";
import { 
    SiAxios, 
    SiReact, 
    SiCss3, 
    SiHtml5, 
    SiJavascript, 
    SiRedux, 
    SiMui, 
    SiTypescript, 
    SiTailwindcss 
} from "react-icons/si";




const commentTitles = [
    {
      text: 'Album of Photos',
      link: 'https://github.com/Leandro-pixel',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact], 
    },
    {
      text: 'Blog Management',
      link: 'https://github.com/Leandro-pixel/Blog_react',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact, SiAxios], 
    },
    {
      text: 'Carrossel',
      link: 'https://github.com/Leandro-pixel/Carousel',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact], 
    },
    {
      text: 'Conversor de Moedas',
      link: 'https://github.com/Leandro-pixel',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact, SiAxios], 
    },
    {
      text: 'Cronomêtro',
      link: 'https://github.com/Leandro-pixel/Stopwatch',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact], 
    },
    {
      text: 'GitHub Finder',
      link: 'https://github.com/Leandro-pixel/GitHub_finder',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact, SiTypescript, SiAxios], 
    },
    {
      text: 'Calculadora de IMC',
      link: 'https://github.com/Leandro-pixel/BMI_Calc',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact], 
    },
    {
      text: 'MarkDown',
      link: 'https://github.com/Leandro-pixel',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact], 
    },
    {
      text: 'Jogo da Memória',
      link: 'https://github.com/Leandro-pixel',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact], 
    },
    {
      text: 'Formulário MultStep',
      link: 'https://github.com/Leandro-pixel/Multistep_form',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact, SiMui], 
    },
    {
      text: 'Pomodoro',
      link: 'https://github.com/Leandro-pixel/Pomodoro',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact], 
    },
    {
      text: 'React-hook-form',
      link: 'https://github.com/Leandro-pixel/React_form',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact, SiTypescript], 
    },
    {
      text: 'Newsletter Subscription',
      link: 'https://github.com/Leandro-pixel/Newsletter_form',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact, SiTypescript, SiTailwindcss], 
    },
    {
      text: 'Tip Calculator',
      link: 'https://github.com/Leandro-pixel/Tip-Calculator',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact], 
    },
    {
      text: 'Lista de afazeres',
      link: 'https://github.com/Leandro-pixel/To_do_list',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux], 
    },
    {
      text: 'Tabela de usuários',
      link: 'https://github.com/Leandro-pixel/Sortable_table',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact], 
    },
    {
      text: 'Condições climáticas',
      link: 'https://github.com/Leandro-pixel/Weather_conditions',
      icons: [SiCss3, SiHtml5, SiJavascript, SiReact], 
    },
  ];

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    profilePhoto: "https://scontent.fsod2-1.fna.fbcdn.net/v/t51.2885-15/417958423_195848176888003_1387595097732865218_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7d201b&_nc_eui2=AeHoc8MeZw-uBYlCNof62jdlHKDy43TcuvkcoPLjdNy6-U5wKM3IhIZzK9GlaWb_fqm9g3OccJ38IcPyjB08ePp-&_nc_ohc=PjmqXVB4FZUAX9pwQeh&_nc_ht=scontent.fsod2-1.fna&edm=AL-3X8kEAAAA&oh=00_AfC8ax_TGFkTqZ3ulPPNkFspXax95V2JGCsAVFgTJi0sFw&oe=65DDAC24",
    titles: [...commentTitles],
    items: [
      'Usuários podem filtrar a imagens desejada tanto por categoria quando por pesquisa, as imagens são resgatadas de uma API.',
      'Usuários podem Acessar postagens na página inicial, em new post você pode criar uma nova postagem e em management você pode editar ou excluir uma postagem.',
      'Um carrossel de imagens automático e manual com clicks.',
      'Usuários podem converter de uma moeda para outra qualquer, calculando quanto cada uma vale. ',
      'treinar o pensamento lógico fazendo todas as funções de um cronomêtro.',
      'Usuário pode pesquisar qualquer perfil do GitHub digitando seu nickname podendo visualizar suas informações e seus melhores repositórios.',
      'Usuário pode calcular seu IMC e através de uma tabela ao final do resultado pode comparar seu resultado com os padrões de saudável ou grave.',
      'Usuário pode gerar um texto com opções de mudar fonte, estilização da letra, entre outras opções.',
      'Treinar o pensamento lógico contruindo um jogo da memória com muito uso de funções e lógica.',
      'usuário pode preencher seus dados e toda vez que avançar ou regredir de um step para outro suas informações estarão salvas, e no step final é mostrado todas as suas informações para poder fazer um review.',
      'Usuário pode estabelecer um tempo para suas atividades e descanso usando a técnica de pomodoro.',
      'Usuário só consegue preencher o formulário se a validação dos dados estiverem corretas e ao dar submit seus dados são enviados para o backend, criando assim o registro da conta.',
      'Um formulário de inscrição para receber notificações em seu e-mail, aplicação toda tipada através do typescript.',
      'Usuário pode calcular a conta dividindo com seus amigos/familiares incluindo ja a gorjeta do garçom.',
      'Usuário pode criar, editar e remover suas tarefas além de poder marcar se ja estão concluídas ou não, é um projeto aplicando CRUD.',
      'Usuário pode puxar uma tabela com dados e ordenala por nome, idade, titulo ou até mesmo pelas letras contidas nos dados.',
      'Usuário pode conferir a condição climática tanto da sua cidade quanto de qualquer outro lugar e consegue ver as condições nas próximas horas.',
    ]
    },
  reducers: {
    setTitle: (state, action) => {
        const { index, text, icons } = action.payload;
        state.titles[index] = {
          text,
          icons: icons || [], 
        };
      },
    setProfilePhoto: (state, action) => {
        state.profilePhoto = action.payload;
      },
  },
});

export const { setTitle, setProfilePhoto } = commentsSlice.actions;

export default commentsSlice.reducer;