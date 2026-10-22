const U = "https://images.unsplash.com";
const Q = "?w=1600&q=75&auto=format&fit=crop";
export const fotos = {
  festival: `${U}/photo-1501281668745-f7f57925c3b4${Q}`,
  publico: `${U}/photo-1429962714451-bb934ecdc4ec${Q}`,
  convencao: `${U}/photo-1540575467063-178a50c2df87${Q}`,
  palco: `${U}/photo-1505373877841-8d25f7d46678${Q}`,
  festa: `${U}/photo-1492684223066-81342ee5ff30${Q}`,
};

export const solucoes = [
  {
    titulo: "Ativações em festivais",
    descricao: "Presença de marca em festivais e grandes eventos, com espaço, experiência e operação em todos os dias.",
  },
  {
    titulo: "Convenções e eventos corporativos",
    descricao: "Convenções de vendas, encontros de liderança e premiações, com palco, conteúdo e direção técnica.",
  },
  {
    titulo: "Lançamentos de produto",
    descricao: "Eventos para apresentar um produto ao mercado, à imprensa ou à rede de vendas.",
  },
  {
    titulo: "Eventos esportivos",
    descricao: "Estrutura, comunicação visual e operação para competições, corridas e torneios.",
  },
  {
    titulo: "Experiências de marca",
    descricao: "Pop-ups, ambientações e instalações que colocam o público dentro do universo da marca.",
  },
  {
    titulo: "Festivais próprios e estandes",
    descricao: "Festivais autorais e estandes para marcas que querem um espaço todo seu.",
  },
  {
    titulo: "Oficinas e eventos infantis",
    descricao: "Atividades lúdicas, seguras e educativas para crianças e suas famílias.",
  },
  {
    titulo: "Feiras, eventos e shopping centers",
    descricao: "Ações promocionais e eventos sazonais para feiras e centros comerciais.",
  },
];

export const pilares = [
  {
    titulo: "Uma liderança, do começo ao fim",
    texto: "Quem ouve o briefing é quem acompanha o evento. Você conversa com um time só.",
  },
  {
    titulo: "Estrutura para entregar",
    texto: "Criação, produção e operação trabalham juntas para a ideia sair do papel como foi aprovada.",
  },
  {
    titulo: "Sem intermediários",
    texto: "Menos etapas entre a ideia e o evento, com mais controle de prazo e de custo.",
  },
];

export const porQue = [
  { titulo: "Excelência", texto: "Cuidado com a qualidade em cada entrega, sempre buscando soluções criativas." },
  { titulo: "Transparência", texto: "Proposta com escopo claro e preço justo, para você saber onde cada valor foi investido." },
  { titulo: "Dedicação", texto: "Escutamos de verdade para criar propostas alinhadas à sua marca e ao seu público." },
];

// CASES DE EXEMPLO: troque pelos projetos reais da cliente
export const cases = [
  {
    titulo: "Nome do case 01",
    tipo: "Festival de música, Cidade",
    tags: ["Cenografia", "Montagem", "Direção técnica"],
    desafio: "Texto de exemplo: descreva em uma ou duas frases o problema que o cliente trouxe.",
    ideia: "Texto de exemplo: explique a ideia criativa que resolveu o desafio.",
    entrega: "Texto de exemplo: liste o que a agência produziu e operou no evento.",
    foto: fotos.festival,
  },
  {
    titulo: "Nome do case 02",
    tipo: "Evento esportivo, Cidade",
    tags: ["Comunicação visual", "Estrutura", "Operação"],
    desafio: "Texto de exemplo: descreva em uma ou duas frases o problema que o cliente trouxe.",
    ideia: "Texto de exemplo: explique a ideia criativa que resolveu o desafio.",
    entrega: "Texto de exemplo: liste o que a agência produziu e operou no evento.",
    foto: fotos.publico,
  },
  {
    titulo: "Nome do case 03",
    tipo: "Convenção corporativa, Cidade",
    tags: ["Cenografia", "Iluminação", "Direção técnica"],
    desafio: "Texto de exemplo: descreva em uma ou duas frases o problema que o cliente trouxe.",
    ideia: "Texto de exemplo: explique a ideia criativa que resolveu o desafio.",
    entrega: "Texto de exemplo: liste o que a agência produziu e operou no evento.",
    foto: fotos.convencao,
  },
  {
    titulo: "Nome do case 04",
    tipo: "Lançamento de produto, Cidade",
    tags: ["Experiência de marca", "Estrutura", "Operação"],
    desafio: "Texto de exemplo: descreva em uma ou duas frases o problema que o cliente trouxe.",
    ideia: "Texto de exemplo: explique a ideia criativa que resolveu o desafio.",
    entrega: "Texto de exemplo: liste o que a agência produziu e operou no evento.",
    foto: fotos.palco,
  },
];

export const bastidores = [
  { legenda: "Legenda da foto 1", foto: fotos.festa },
  { legenda: "Legenda da foto 2", foto: fotos.palco },
  { legenda: "Legenda da foto 3", foto: fotos.convencao },
];

export const etapas = [
  { titulo: "Briefing e imersão", texto: "Entendemos objetivo, público, marca, data, cidade e verba. Se preciso, fazemos visita técnica ao local." },
  { titulo: "Estratégia e conceito", texto: "Definimos o que o público vai viver e o que a marca precisa conquistar." },
  { titulo: "Projeto criativo", texto: "Direção de arte, 3D, roteiro, projeto técnico e proposta com escopo e preço claros." },
  { titulo: "Produção", texto: "Cenografia, comunicação visual, conteúdo e tecnologia preparados pelo nosso time." },
  { titulo: "Logística e montagem", texto: "Transporte, equipe e montagem nas cidades atendidas, com cronograma e segurança.." },
  { titulo: "Operação ao vivo", texto: "No dia, direção técnica e artística no comando de roteiro, equipe e atendimento." },
  { titulo: "Desmontagem e entrega", texto: "Desmontamos, devolvemos o espaço como recebemos e fechamos o projeto com você." },
];

export const tudoEmCasa = {
  pensamos: [
    { titulo: "Planejamento estratégico", texto: "Objetivos de negócio viram experiência, com foco no público e no resultado." },
    { titulo: "Direção artística", texto: "Curadoria criativa em toda a jornada, da concepção ao último detalhe." },
  ],
  fazemos: [
    { titulo: "Cenografia", texto: "Cenários sob medida, pensados para chamar atenção e durar o evento inteiro." },
    { titulo: "Comunicação visual", texto: "Sinalização, impressos e ambientação com acabamento sofisticado." },
    { titulo: "Direção técnica", texto: "Som, luz, imagem e estrutura planejados e operados por quem desenhou o projeto." },
    { titulo: "Operação", texto: "Equipe, logística e execução coordenadas do início ao fim." },
  ],
  tecnologia: [
    "Projeção mapeada",
    "Realidade aumentada",
    "Realidade virtual",
    "Iluminação automatizada",
    "Trilhas sonoras",
    "Efeitos especiais",
  ],
};

export const brasil = [
  { titulo: "Base em São Paulo", texto: "Atendemos a partir da capital paulista, com a logística planejada junto com o projeto." },
  { titulo: "Sete estados atendidos", texto: "São Paulo, Rio de Janeiro, Minas Gerais, Espírito Santo, Paraná, Santa Catarina e Rio Grande do Sul." },
  { titulo: "Equipe única do início ao fim", texto: "Quem recebe o briefing acompanha a montagem e a operação do evento." },
];

// Use só marcas reais atendidas, com autorização da cliente
export const marcas = [
  { nome: "Shopping ABC", logo: "/marcas/shoppingabc.png" },
  // { nome: "Nome da marca", logo: "/marcas/arquivo.png" },

  { nome: "Banco Sicoob", logo: "/marcas/sicoob.png" },
  // { nome: "Nome da marca", logo: "/marcas/arquivo.png" },

  { nome: "São Bernardo Plaza Shopping", logo: "/marcas/saobernardo.png" },
  // { nome: "Nome da marca", logo: "/marcas/arquivo.png" },

  { nome: "Shopping ABC", logo: "/marcas/shoppingabc.png" },
  // { nome: "Nome da marca", logo: "/marcas/arquivo.png" },

  { nome: "Shopping ABC", logo: "/marcas/shoppingabc.png" },
  // { nome: "Nome da marca", logo: "/marcas/arquivo.png" },

  { nome: "Shopping ABC", logo: "/marcas/shoppingabc.png" },
  // { nome: "Nome da marca", logo: "/marcas/arquivo.png" },

  { nome: "Shopping ABC", logo: "/marcas/shoppingabc.png" },
  // { nome: "Nome da marca", logo: "/marcas/arquivo.png" },
  
  { nome: "Shopping ABC", logo: "/marcas/shoppingabc.png" },
  // { nome: "Nome da marca", logo: "/marcas/arquivo.png" },




];

export const faq = [
  { p: "A Vicenza é agência ou produtora?", r: "Agência. Começamos no briefing, com estratégia e criação, e seguimos até a desmontagem." },
  { p: "Vocês atendem fora da cidade da agência?", r: "Sim. Atendemos os sete estados do Sul e do Sudeste, com equipe, cenografia e técnica viajando juntas e a logística coordenada por nós." },
  { p: "Que tipos de projeto vocês fazem?", r: "Ativações em festivais, convenções e eventos corporativos, lançamentos de produto, eventos esportivos, experiências de marca, festivais próprios, estandes, eventos infantis e ações em feiras e shoppings." },
  { p: "O que vocês produzem em casa?", r: "Texto de exemplo: descreva aqui o que a agência realmente produz internamente e o que faz com parceiros." },
  { p: "Como funciona o orçamento?", r: "Depois do briefing, você recebe uma proposta com escopo claro e preço transparente." },
  { p: "Com quanto tempo de antecedência devo procurar vocês?", r: "Quanto antes, mais opções de espaço, criação e produção. Se a data estiver próxima, conte o prazo e dizemos com franqueza o que dá para entregar." },
  { p: "Como começo um projeto?", r: "Mande uma mensagem pelo WhatsApp ou por e-mail com objetivo, data, cidade e público estimado. Retornamos para marcar o briefing." },
];