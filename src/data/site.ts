/**
 * Metadados e dados autorais de Pedro Rocha.
 * Manter o conteúdo separado da UI permite que um estudante altere textos
 * facilmente sem tocar na lógica dos componentes React.
 */
export const siteConfig = {
  name: 'Pedro Rocha',
  monogram: 'PR.',
  role: 'Estudante de Engenharia de Software',
  headline: 'Pedro Rocha. Estudante de Engenharia de Software focado em engenharia de interface, sistemas de design e front-end de produção.',
  bioParagraph1:
    'Estudante de Engenharia de Software com foco prático no desenvolvimento de interfaces digitais, sistemas de componentes e aplicações web modernas. Concentro meus estudos na intersecção entre arquitetura de software, rigor técnico de front-end e direção visual.',
  bioParagraph2:
    'Desenvolvo projetos explorando React, TypeScript, Next.js e Tailwind CSS, sempre priorizando acessibilidade (WCAG AA), performance medida em Web Vitals e semântica estrita de código.',

  // Fatos rápidos factuais
  quickFacts: [
    { label: 'Formação', value: 'Bacharelado em Engenharia de Software' },
    { label: 'Foco técnico', value: 'Engenharia de interface, React, TypeScript e Design Systems' },
    { label: 'Localização', value: 'Brasil' },
    { label: 'Status atual', value: 'Disponível para estágios e projetos' },
  ],

  // Links sociais verificados
  links: {
    github: 'https://github.com/PedroRochaMoreira',
    linkedin: 'https://www.linkedin.com/in/pedropaulorochadev',
    email: 'pedropaulorm9@gmail.com',
  },

  // SEO e metadados
  meta: {
    url: 'https://portifolio-nine-plum-63.vercel.app',
    title: 'Pedro Rocha — Engenharia de Software & Design de Interface',
    description:
      'Portfólio de Pedro Rocha. Estudante de Engenharia de Software focado em interfaces digitais, sistemas de design, TypeScript e front-end de alta performance.',
    themeColor: '#0A0A0B',
    locale: 'pt-BR',
  },
};
