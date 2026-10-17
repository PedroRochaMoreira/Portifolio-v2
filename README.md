# Portfólio Pessoal — Pedro Rocha (v2)

Website autoral e portfólio profissional de Pedro Rocha, desenvolvido com foco em engenharia de interface, direção de arte editorial, performance medida em Web Vitals e conformidade rigorosa com acessibilidade WCAG 2.2 AA.

- **Produção:** [https://portifolio-nine-plum-63.vercel.app](https://portifolio-nine-plum-63.vercel.app)
- **Repositório:** [https://github.com/PedroRochaMoreira/Portifolio](https://github.com/PedroRochaMoreira/Portifolio) (branch `redesign/v2`)
- **Deploy:** Vercel

---

## 1. Visão Geral & Direção de Arte

O projeto foi inteiramente reconstruído para refletir o padrão de qualidade de estúdios de design e produtos reais, eliminando clichês de templates e estéticas genéricas geradas por IA ("vibecode").

### Destaques de Design & Engenharia
- **Paleta Restrita e Sóbria:** Preto profundo (`#0A0A0B`), superfícies aquecidas (`#121214`), texto off-white quente (`#EDEAE4`) e bronze metálico (`#B08D57`) como único acento colorido.
- **Tipografia Editorial:** `Instrument Sans` para títulos e texto de corpo, combinada com `Geist Mono` para numeração editorial ("01 —", "02 —"), datas e metadados com números tabulares. Ambas auto-hospedadas via Fontsource em formato WOFF2 com `font-display: swap`.
- **Assinatura Visual Atmosférica:** Shader WebGL dinâmico via ShaderGradient com tons de preto e bronze e movimento ultra-lento no Hero. O shader é carregado sob demanda (lazy loading) e conta com fallback estático instantâneo em CSS para conexões econômicas (`Save-Data`) ou preferência por movimento reduzido (`prefers-reduced-motion`).
- **Acessibilidade WCAG 2.2 AA:** Nota 100 no Lighthouse. Landmarks semânticos (`<header>`, `<nav>`, `<main>`, `<footer>`), H1 semântico único, Skip Link acessível para teclado, alvos de toque maiores que 44px e foco visual evidente em `:focus-visible`.
- **Arquitetura de Dados Desacoplada:** Todo o conteúdo textual e a lista de estudos de caso estão isolados em arquivos TypeScript dedicados (`src/data/`), facilitando a manutenção sem alterar a lógica dos componentes.

---

## 2. Stack Tecnológica

- **Framework & Build:** Vite 6 + React 19 + TypeScript (Strict Mode)
- **Estilos:** Tailwind CSS v4 com diretiva `@theme` e variáveis CSS nativas
- **Animações:** Motion (`motion/react`)
- **Tipografia:** `@fontsource-variable/instrument-sans` e `@fontsource-variable/geist-mono`
- **Componentes Niche:** ShaderGradient Canvas, Floating Nav, Card Hover e Copy Button acessível
- **Qualidade de Código:** ESLint 9 + TypeScript ESLint + Prettier

---

## 3. Estrutura do Projeto

```
├── .agents/
│   └── rules/
│       └── portfolio-design-engineer.md   # Regras de design e proibições do projeto
├── public/
│   ├── favicon.svg                       # Favicon vetorial com monograma PR.
│   ├── og-image.png                      # Imagem de preview Open Graph (1200x630)
│   ├── apple-touch-icon.png              # Ícone para dispositivos Apple (180x180)
│   ├── robots.txt                        # Instruções para motores de busca
│   └── sitemap.xml                       # Mapa do site indexável
├── src/
│   ├── components/
│   │   ├── ui/                           # Componentes de interface reutilizáveis
│   │   │   ├── hero-shader.tsx           # Shader WebGL com fallback e lazy load
│   │   │   ├── shader-mesh.tsx           # Malha configurada do ShaderGradient
│   │   │   ├── floating-nav.tsx          # Barra de navegação flutuante
│   │   │   ├── project-card.tsx          # Card de projeto com tags e decisões técnicas
│   │   │   └── copy-email.tsx            # Botão de cópia de e-mail com aria-live
│   │   └── sections/                     # Seções da página única
│   │       ├── hero.tsx                  # Hero com H1 e posicionamento factual
│   │       ├── about.tsx                 # 01 — Sobre e painel de fatos rápidos
│   │       ├── projects.tsx              # 02 — Projetos e estudos de caso
│   │       ├── contact.tsx               # 03 — Contato e status de disponibilidade
│   │       └── footer.tsx                # Rodapé editorial
│   ├── data/
│   │   ├── site.ts                       # Metadados do site, bio e links sociais
│   │   └── projects.ts                   # Coleção tipada dos estudos de caso
│   ├── hooks/
│   │   ├── use-reduced-motion.ts         # Hook de detecção de movimento reduzido
│   │   └── use-copy-to-clipboard.ts      # Hook de cópia com feedback temporizado
│   ├── lib/
│   │   └── utils.ts                      # Utilitário para composição de classes Tailwind
│   ├── styles/
│   │   ├── index.css                     # Import de fontes, Tailwind v4 e resets
│   │   └── tokens.css                    # Definição das variáveis de cor e tema
│   ├── App.tsx                           # Layout da aplicação com landmarks
│   ├── main.tsx                          # Ponto de entrada React
│   └── vite-env.d.ts                     # Declarações de tipos do Vite
├── index.html                            # HTML semântico com JSON-LD Schema.org
├── tsconfig.json                         # Configuração raiz do TypeScript
└── vite.config.ts                        # Configuração do Vite com chunk splitting
```

---

## 4. Como Executar Localmente

### Pré-requisitos
- Node.js versão 20 ou superior (recomendado: Node 22+)
- npm versão 10 ou superior

### Passos de Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/PedroRochaMoreira/Portifolio.git
cd Portifolio

# 2. Acesse a branch do redesign
git checkout redesign/v2

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse a URL informada no terminal (normalmente `http://localhost:5173`).

---

## 5. Scripts Disponíveis

- `npm run dev`: Inicia o servidor local de desenvolvimento com Hot Module Replacement (HMR).
- `npm run build`: Compila os tipos em TypeScript (`tsc -b`) e gera o pacote estático otimizado para produção na pasta `dist/`.
- `npm run preview`: Executa um servidor local servindo os arquivos finais gerados na pasta `dist/`.
- `npm run lint`: Analisa todo o código-fonte através do ESLint 9 para garantir conformidade estrita e ausência de erros.
- `npm run typecheck`: Executa a verificação de tipos do TypeScript sem emitir arquivos (`tsc --noEmit`).

---

## 6. Como Adicionar um Novo Projeto

Os dados dos projetos estão desacoplados da interface visual. Para adicionar um novo estudo de caso:

1. Abra o arquivo `src/data/projects.ts`.
2. Adicione um novo objeto na array `projectsData`:

```typescript
{
  id: 'nome-do-projeto',
  title: 'Título do Projeto',
  summary: 'Descrição factual de uma linha explicando o que o projeto faz.',
  role: 'Seu papel (ex: Desenvolvedor Front-end)',
  tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  links: {
    repo: 'https://github.com/PedroRochaMoreira/nome-do-projeto',
    demo: 'https://demo-do-projeto.vercel.app' // Opcional: remova se não houver deploy
  },
  technicalDecisions: [
    'Decisão técnica 1 com foco em arquitetura ou dados.',
    'Decisão técnica 2 com foco em semântica ou performance.',
    'Decisão técnica 3 com foco em experiência do usuário.'
  ],
  featured: true,
  year: '2026'
}
```

3. Salve o arquivo. O novo projeto será renderizado automaticamente na grade de projetos com todo o design, tags e acessibilidade.

---

## 7. Como Alterar Cores ou Ajustar o Tema

As cores do projeto são controladas por variáveis CSS nativas em `src/styles/tokens.css`.

- Para alterar a cor do acento bronze da marca, modifique a variável:
  ```css
  --bronze: #B08D57;
  --bronze-highlight: #C5A065;
  ```
- Todas as alterações de cor devem ser validadas quanto ao contraste de acessibilidade WCAG AA (mínimo de 4.5:1 para texto e 3:1 para elementos de interface contra o fundo `#0A0A0B`).

---

## 8. Licença

Este projeto é de uso pessoal e autoral de Pedro Rocha. O código-fonte está disponível sob licença MIT.
