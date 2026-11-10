/**
 * Todo o conteúdo da página mora aqui.
 *
 * ATENÇÃO: a pessoa, as empresas, os projetos, os números, os depoimentos e
 * até a cidade são 100% fictícios. Troque pelos seus dados reais para usar
 * a página de verdade.
 */

export type CoverVariant = "girassol" | "mares" | "aurora" | "feira";

export const profile = {
  name: "Lia Monteval",
  initials: "LM",
  role: "Designer de produto & engenheira de front-end",
  location: "São Bento das Marés, Brasil",
  availability: "Agenda aberta para projetos a partir de março de 2027",
  headline: {
    before: "Interfaces",
    highlight: "calmas",
    after: "para produtos complicados.",
  },
  intro:
    "Há nove anos ajudo times de fintech, saúde e dados a transformar fluxos emaranhados em produtos que as pessoas entendem de primeira — do rascunho à produção.",
  // O TLD .example é reservado para documentação: este endereço não existe.
  email: "ola@liamonteval.example",
  about: {
    lead: "Comecei desenhando cartazes para bandas que nunca saíram da garagem e acabei me apaixonando pelo instante em que um desenho vira algo clicável.",
    body: [
      "Hoje trabalho na fronteira entre design e código: pesquiso, prototipo e entrego em produção — de preferência com menos telas do que me pediram. Acredito que uma boa interface é aquela que ninguém precisa elogiar, porque ninguém precisou pensar nela.",
      "Fora do trabalho, cultivo samambaias teimosas, coleciono mapas antigos e escrevo a Margem de Erro, uma newsletter mensal sobre interfaces e outras coisas que quase dão certo.",
    ],
  },
} as const;

export const stats = [
  { value: "9", label: "anos desenhando e programando" },
  { value: "43", label: "produtos lançados" },
  { value: "12", label: "palestras em eventos de design e front-end" },
  { value: "1", label: "gata chamada Kerning" },
] as const;

export const clients = [
  "Banco Girassol",
  "Clínica Aurora",
  "Instituto Costa Viva",
  "Cooperativa Vale Verde",
  "Nuvem Clara",
  "Agência Andorinha",
] as const;

export const projects: ReadonlyArray<{
  title: string;
  client: string;
  year: string;
  description: string;
  result: string;
  tags: readonly string[];
  cover: CoverVariant;
}> = [
  {
    title: "Girassol Pay",
    client: "Banco Girassol",
    year: "2025",
    description:
      "Redesenho do app de pagamentos: um cadastro de onze telas virou três, e o Pix deixou de precisar de tutorial.",
    result: "+38% de cadastros concluídos",
    tags: ["Pesquisa", "Design system", "React Native"],
    cover: "girassol",
  },
  {
    title: "Atlas de Marés",
    client: "Instituto Costa Viva",
    year: "2024",
    description:
      "Visualização interativa de dados oceanográficos, pensada para ser lida tanto por pesquisadoras quanto por quem pesca.",
    result: "120 mil visitas no primeiro mês",
    tags: ["Data viz", "Next.js", "D3"],
    cover: "mares",
  },
  {
    title: "Prontuário Aurora",
    client: "Clínica Aurora",
    year: "2023",
    description:
      "Um prontuário eletrônico que cabe em uma consulta de quinze minutos — e devolve o olhar da médica para o paciente.",
    result: "−42% de tempo preenchendo formulários",
    tags: ["UX para saúde", "Acessibilidade", "React"],
    cover: "aurora",
  },
  {
    title: "Feira Livre",
    client: "Cooperativa Vale Verde",
    year: "2022",
    description:
      "Marketplace para pequenos produtores venderem direto ao bairro, feito para funcionar em celular antigo e sinal fraco.",
    result: "310 produtores ativos em um ano",
    tags: ["Produto do zero", "PWA", "Performance"],
    cover: "feira",
  },
];

export const services = [
  {
    title: "Design de produto",
    description:
      "Pesquisa, fluxos, protótipos e testes com gente de verdade. Do problema nebuloso à tela que se explica sozinha.",
  },
  {
    title: "Engenharia de front-end",
    description:
      "React, Next.js e TypeScript com atenção obsessiva a acessibilidade, performance e estados vazios.",
  },
  {
    title: "Design systems",
    description:
      "Tokens, componentes e documentação que o time realmente usa — e que sobrevivem à primeira reorganização.",
  },
] as const;

export const toolbox = [
  "Figma",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Storybook",
  "D3",
  "Testes de usabilidade",
  "WCAG 2.2",
] as const;

export const experience = [
  {
    period: "2023 — hoje",
    role: "Designer-engenheira independente",
    company: "Estúdio Monteval",
    description:
      "Parceira de times pequenos que precisam ir do rascunho à produção sem perder o fio. Pesquisa, protótipo e código no mesmo par de mãos.",
  },
  {
    period: "2020 — 2023",
    role: "Líder de design de produto",
    company: "Banco Girassol",
    description:
      "Liderei oito designers no redesenho do app e criei o Pétala, design system adotado por 14 squads.",
  },
  {
    period: "2018 — 2020",
    role: "Engenheira de front-end",
    company: "Nuvem Clara",
    description:
      "Construí o painel de monitoramento em React e derrubei o carregamento inicial de 6,1 s para 1,8 s.",
  },
  {
    period: "2016 — 2018",
    role: "Designer de interfaces",
    company: "Agência Andorinha",
    description:
      "Sites e identidades digitais para marcas locais. Foi onde aprendi a ouvir cliente e a nomear camadas.",
  },
  {
    period: "2012 — 2015",
    role: "Bacharelado em Design Digital",
    company: "Universidade do Litoral Sereno",
    description:
      "TCC sobre legibilidade de formulários em telas pequenas — assunto do qual ainda não me recuperei.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "A Lia pegou um cadastro de onze telas e devolveu três. Ninguém sentiu falta das outras oito — muito menos os nossos clientes.",
    name: "Otávio Serralha",
    role: "Diretor de Produto · Banco Girassol",
    initials: "OS",
    tone: "mustard",
  },
  {
    quote:
      "É raro encontrar alguém que conduz a pesquisa de manhã e abre o pull request à tarde. Com ela, a distância entre ideia e produção encolheu.",
    name: "Bianca Noronha",
    role: "CTO · Clínica Aurora",
    initials: "BN",
    tone: "forest",
  },
  {
    quote:
      "Nossos dados de maré sempre foram precisos. Com o Atlas, pela primeira vez ficaram bonitos — e compreensíveis para quem vive do mar.",
    name: "Inês Carvalhal",
    role: "Coordenadora de Pesquisa · Instituto Costa Viva",
    initials: "IC",
    tone: "tide",
  },
] as const;

// example.com é um domínio reservado para exemplos — nenhum perfil real é apontado.
export const socials = [
  { label: "LinkedIn", handle: "/in/liamonteval", href: "https://example.com/" },
  { label: "GitHub", handle: "@liamonteval", href: "https://example.com/" },
  { label: "Newsletter", handle: "Margem de Erro", href: "https://example.com/" },
] as const;

export const nav = [
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Depoimentos", href: "#depoimentos" },
] as const;
