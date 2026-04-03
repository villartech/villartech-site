# VillarTech Site

Landing page da VillarTech — consultoria de desenvolvimento de software.

## Stack

- **Framework:** Astro 6 (static site generation)
- **CSS:** Tailwind CSS v4
- **Hosting:** Firebase Hosting
- **CI/CD:** GitHub Actions
- **i18n:** pt-BR (default) + English

## Estrutura

```
villartech-site/
├── sites/home/         ← Site principal (Astro)
│   ├── src/
│   │   ├── pages/      ← Rotas (/ = pt-BR, /en/ = English)
│   │   ├── components/ ← Componentes Astro
│   │   ├── layouts/    ← Layout base
│   │   ├── i18n/       ← Traduções pt-BR e en
│   │   └── styles/     ← Tokens CSS e estilos globais
│   └── public/         ← Arquivos estáticos
├── .github/workflows/  ← GitHub Actions (deploy)
├── firebase.json       ← Config Firebase Hosting
├── .firebaserc         ← Projeto Firebase (villartech-br)
└── docs/               ← Esta documentação
```

## Desenvolvimento local

```bash
cd sites/home
npm install
npm run dev
```

O dev server roda em `http://localhost:4321`.

## Build

```bash
cd sites/home
npm run build
npm run preview   # preview local do build
```

O output vai para `sites/home/dist/`.

## Deploy

O deploy é automático via GitHub Actions quando há push na branch `main` em `sites/**`.

Para deploy manual:

```bash
# Requer Firebase CLI e acesso ao projeto villartech-br
cd sites/home && npm run build
cd ../.. && firebase deploy --only hosting
```

### Configuração necessária no GitHub

Adicionar o secret `FIREBASE_SERVICE_ACCOUNT` no repositório com a service account JSON do projeto Firebase `villartech-br`.

## Adicionando páginas

1. Criar arquivo `.astro` em `src/pages/` (pt-BR) e `src/pages/en/` (English)
2. Adicionar strings nos arquivos `src/i18n/pt.ts` e `src/i18n/en.ts`
3. Usar o `BaseLayout` como wrapper

## Design system

Os tokens de design ficam em `src/styles/tokens.css` (cores, espaçamento, tipografia). O tema é escuro com accent teal/amber.
