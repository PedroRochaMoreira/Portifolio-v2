# Regras do Projeto — Portfólio Pedro Rocha (Design Engineer)

Esta regra orienta qualquer agente ou desenvolvedor que for evoluir ou manter o portfólio autoral de Pedro Rocha. O padrão visual e técnico é o de estúdios de design e produtos de alto nível, e **NUNCA o de interfaces genéricas geradas por IA ("vibecode")**.

---

## 1. Identidade Visual & Design Tokens

### 1.1 Paleta de Cores Estrita (Tema Escuro Único)
A paleta é restrita a preto profundo, superfícies aquecidas, texto off-white e bronze metálico como **ÚNICO acento colorido**:

- `bg-base`: `#0A0A0B` (Fundo principal)
- `surface-1`: `#121214` (Cards e painéis de dados)
- `surface-2`: `#1A1A1E` (Estados de elevação e hover sutil)
- `surface-border`: `rgba(255, 255, 255, 0.08)` (Divisores de 1px)
- `text-primary`: `#EDEAE4` (Off-white quente — Contraste 16.3:1 vs fundo, WCAG AAA)
- `text-muted`: `#9E9A91` (Cinza médio aquecido — Contraste 6.99:1 vs fundo, WCAG AAA)
- `bronze`: `#B08D57` (Único acento da marca — Contraste 6.33:1 vs fundo, WCAG AA)
- `bronze-highlight`: `#C5A065` (Foco de teclado e hover de links bronze — Contraste 7.71:1)
- `bronze-muted`: `rgba(176, 141, 87, 0.12)` (Fundo sutil de badges e status)

### 1.2 Tipografia (Auto-hospedada via Fontsource)
- **Principal (Display e Texto):** `Instrument Sans Variable` (`@fontsource-variable/instrument-sans`)
  - Uso: H1, H2, H3, corpo de texto e botões.
  - Tracking: `-0.04em` em display grande; normal em corpo.
- **Técnica (Metadados & Numeração):** `Geist Mono Variable` (`@fontsource-variable/geist-mono`)
  - Uso: Monograma `PR.`, numeração editorial `01 —`, tags de stack, datas, status e rótulos.
  - Obrigatoriamente usar classe `.tabular-nums` em números para evitar layout shift.

---

## 2. Proibições Absolutas (Sinais de "Vibecode" / IA)

É expressamente proibido adicionar ou reintroduzir no projeto:
1. **Cores e Gradientes:** Gradientes roxo, azul royal, índigo ou arco-íris; texto com gradiente colorido; luzes/blobs de fundo coloridas; sombras coloridas ou neon.
2. **Estética Clichê:** Glassmorphism generalizado com blur excessivo; bordas arredondadas exageradas (`rounded-2xl` ou `rounded-3xl` em cartões técnicos); badges com brilho animado falso.
3. **Emojis:** Proibido o uso de emojis em qualquer lugar — seja no código, comentários, commits, README ou interface visual.
4. **Conteúdo:** Depoimentos inventados, clientes fictícios, estatísticas sem base, frases de efeito vazias (ex.: "código limpo e soluções elegantes", "apaixonado por inovação", "transformando ideias em realidade").
5. **Microinterações:** Hover com `scale` agressivo em tudo; parallax gratuito desvinculado de conteúdo; cursor customizado no mouse; animação de entrada em cada parágrafo.
6. **Bibliotecas Externas:** Não instalar GSAP nem adicionar bibliotecas pesadas de animação. Toda animação deve utilizar exclusivamente o pacote `motion` (`motion/react`) ou transições nativas CSS.

---

## 3. Padrões de Código & Arquitetura

### 3.1 Separação de Dados e Interface
- O conteúdo NUNCA deve ser hardcoded dentro dos componentes visuais.
- Dados de biografia, links e metadados pertencem a `src/data/site.ts`.
- Lista de projetos, decisões técnicas e tags pertencem a `src/data/projects.ts`.
- Para adicionar um novo projeto, basta incluir um novo objeto na array `projectsData`.

### 3.2 TypeScript & Qualidade
- `tsconfig.json` configurado em **Strict Mode**.
- É **proibido o uso de `any`**. Tipos e interfaces devem ser explícitos.
- Comentários no código devem ser escritos em **português**, explicando o **porquê** arquitetural ou de acessibilidade (não o óbvio do que o código faz), para que o estudante compreenda a decisão.

### 3.3 Acessibilidade (WCAG 2.2 AA — Mandatório)
- Toda página deve manter o landmark `<main id="conteudo-principal">`.
- Deve existir apenas um único `<h1>` por página (o nome "Pedro Rocha").
- O primeiro elemento focável da página deve ser o Skip Link (`Pular para o conteúdo principal`).
- Todos os links e botões devem possuir área de toque mínima de **44x44px** e indicador nítido de foco `:focus-visible` com anel duplo em bronze (`#B08D57`).
- Links externos devem ter `target="_blank"` e `rel="noopener noreferrer"` acompanhados de `aria-label` explícito indicando que abre em nova aba.
- Respeitar a preferência `prefers-reduced-motion` em todas as animações via hook `usePrefersReducedMotion`.

---

## 4. Como Adicionar um Novo Projeto

Edite o arquivo `src/data/projects.ts` e insira o objeto no formato:

```typescript
{
  id: 'meu-projeto',
  title: 'Nome do Projeto',
  summary: 'Resumo factual de 1 linha sobre a finalidade da aplicação.',
  role: 'Seu papel técnico no projeto (ex: Desenvolvedor Front-end)',
  tags: ['Tecnologia 1', 'Tecnologia 2', 'TypeScript'],
  links: {
    repo: 'https://github.com/PedroRochaMoreira/meu-projeto',
    demo: 'https://link-da-demo.vercel.app' // opcional
  },
  technicalDecisions: [
    'Decisão técnica 1 com foco em arquitetura ou performance.',
    'Decisão técnica 2 com foco em semântica ou dados.'
  ],
  featured: true,
  year: '2026'
}
```

---

## 5. Como Alterar Cores ou Ajustar Tokens

Edite as variáveis em `src/styles/tokens.css` e confirme os contrastes com ferramentas WCAG antes de comitar. O acento bronze principal é `--bronze: #B08D57`. Se for alterado, garanta que a taxa de contraste sobre `#0A0A0B` permaneça acima de **4.5:1** para texto normal e **3:1** para elementos gráficos.
