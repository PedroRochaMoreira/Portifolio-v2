export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  role: string;
  tags: string[];
  links: {
    repo: string;
    demo?: string;
  };
  technicalDecisions: string[];
  featured: boolean;
  year: string;
}

/**
 * Projetos em destaque no portfólio.
 * Cada projeto contém decisões técnicas reais e dados factuais verificados.
 */
export const projectsData: ProjectItem[] = [
  {
    id: 'dashboard-enem',
    title: 'Dashboard para o ENEM',
    summary: 'Plataforma analítica para diagnóstico de desempenho e plano preparatório de estudantes do ENEM.',
    role: 'Engenheiro de Front-end & IA',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Google Gemini API'],
    links: {
      repo: 'https://github.com/PedroRochaMoreira/Dashboard-Enem',
      demo: 'https://ai.studio/apps/a1c0a85e-fa11-4df6-82cd-9fc2cbb3ade2',
    },
    technicalDecisions: [
      'Renderização híbrida com Next.js 15 App Router para carregamento rápido dos dados analíticos.',
      'Integração de prompts com a API do Google Gemini para feedback pedagógico automatizado.',
      'Design responsivo com Tailwind CSS estruturado para visualização clara de métricas e tabelas.',
    ],
    featured: true,
    year: '2025',
  },
  {
    id: 'morano-arquitetura',
    title: 'Morano Arquitetura',
    summary: 'Site institucional com direção editorial e arquitetura focada em performance para estúdio de arquitetura.',
    role: 'Desenvolvedor Front-end',
    tags: ['HTML5 Semântico', 'CSS3 Modular', 'JavaScript Nativo', 'Node.js', 'SEO'],
    links: {
      repo: 'https://github.com/PedroRochaMoreira/Morano-Arquitetura',
    },
    technicalDecisions: [
      'Arquitetura estática zero-dependency no cliente para alcançar tempo de carregamento inferior a 1 segundo.',
      'Metadados completos com sitemap.xml, robots.txt e Open Graph para indexação orgânica otimizada.',
      'Servidor Node.js mínimo para controle de cache HTTP e entrega dos ativos estáticos.',
    ],
    featured: true,
    year: '2024',
  },
  {
    id: 'rocha-dev',
    title: 'Rocha Dev — Interface Lab',
    summary: 'Laboratório de engenharia de interface e arquitetura de estilos modulares em CSS puro.',
    role: 'Design Engineer',
    tags: ['HTML Semântico', 'CSS Architecture', 'Vanilla JS', 'Microinterações'],
    links: {
      repo: 'https://github.com/PedroRochaMoreira/Rocha-Dev',
    },
    technicalDecisions: [
      'Separação modular de CSS em camadas atômicas (navigation, components, signature-experience, refinement).',
      'Microinterações físicas utilizando CSS Custom Properties sem dependência de bibliotecas pesadas.',
      'Sem processo de compilação ou transpilação, reduzindo o tempo de carregamento da interface.',
    ],
    featured: true,
    year: '2024',
  },
  {
    id: 'portifolio-v2',
    title: 'Portfólio Pessoal v2',
    summary: 'Redesenho e reconstrução editorial do portfólio autoral com índice 95+ em Web Vitals e conformidade WCAG AA.',
    role: 'Design Engineer (Autor)',
    tags: ['Vite', 'React 19', 'TypeScript Strict', 'Tailwind v4', 'Motion', 'Shader WebGL'],
    links: {
      repo: 'https://github.com/PedroRochaMoreira/Portifolio',
      demo: 'https://portifolio-nine-plum-63.vercel.app',
    },
    technicalDecisions: [
      'Carregamento lazy e isolado do shader WebGL após primeiro paint, garantindo LCP inferior a 2 segundos.',
      'Sistema de tokens em preto e bronze com contraste verificado em 6.3:1+ e acessibilidade WCAG 2.2 AA.',
      'Separação estrita entre dados e interface para facilitar a manutenção contínua pelo estudante.',
    ],
    featured: true,
    year: '2026',
  },
];
