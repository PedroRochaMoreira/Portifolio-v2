/**
 * Metadados e dados autorais de Pedro Rocha.
 * Manter o conteúdo separado da UI permite alterar textos
 * facilmente sem tocar na lógica dos componentes React.
 */
export const siteConfig = {
  name: 'Pedro Rocha',
  monogram: 'PR.',
  role: 'Engenheiro de Software',
  headline: 'Pedro Rocha. Engenheiro de Software focado em engenharia de interface, sistemas de design e front-end de produção.',
  bioParagraph1:
    'Engenheiro de Software com foco no desenvolvimento de interfaces digitais, sistemas de componentes e aplicações web modernas. Atuo na intersecção entre arquitetura de software, rigor técnico de front-end e direção visual.',
  bioParagraph2:
    'Desenvolvo projetos utilizando React, TypeScript, Next.js e Tailwind CSS, sempre priorizando acessibilidade (WCAG AA), performance medida em Web Vitals e semântica estrita de código.',

  // Fatos rápidos factuais
  quickFacts: [
    { label: 'Atuação', value: 'Engenharia de Software & Design de Interface' },
    { label: 'Foco técnico', value: 'React, TypeScript, Next.js e Design Systems' },
    { label: 'Localização', value: 'Brasil' },
    { label: 'Status atual', value: 'Disponível para novos projetos e oportunidades' },
  ],

  // Links sociais verificados
  links: {
    github: 'https://github.com/PedroRochaMoreira',
    linkedin: 'https://www.linkedin.com/in/pedropaulorochadev',
    whatsapp: 'https://wa.me/5561986092449',
    email: 'pedropaulorm9@gmail.com',
  },

  // SEO e metadados
  meta: {
    url: 'https://portifolio-nine-plum-63.vercel.app',
    title: 'Pedro Rocha — Engenharia de Software & Design de Interface',
    description:
      'Portfólio de Pedro Rocha. Engenheiro de Software focado em interfaces digitais, sistemas de design, TypeScript e front-end de alta performance.',
    themeColor: '#0A0A0B',
    locale: 'pt-BR',
  },
};
