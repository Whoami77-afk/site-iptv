# Copilot / AI Agent Instructions for this Repository

Resumo rápido
- Projeto: site React + Vite usando Tailwind + Radix UI (pequeno site de landing/marketing).
- Execução comum: `npm install` → `npm run dev` (Vite, HMR) → `npm run build` (gera bundle + tenta `tools/generate-llms.js`).

Visão geral da arquitetura
- Código organizado como componentes React em arquivos `.jsx` (ex.: `Hero.jsx`, `header.jsx`, `Pricing.jsx`).
- O app monta `App` em `main.js` e `index.html` (ponto de entrada Vite).
- Tailwind é usado para estilos; `index.css` contém as diretivas `@tailwind` e utilitários globais.

Padrões e convenções do projeto (específicos)
- Componentes: cada UI piece é um componente exportado por padrão (ex.: `export default Hero;`).
- Imports usam o alias `@` (ex.: `import App from '@/App'`), mas não há `vite.config.js` / `tsconfig.json` visível configurando esse alias aqui — verifique/adicione se necessário.
- Arquivos e pastas duplicados: existe uma cópia do projeto dentro da pasta `IPTV.site/` (mesmos arquivos). Verifique qual versão é a canônica antes de modificar.
- Nomes de arquivos: alguns arquivos estão em lowercase (`header.jsx`) enquanto os imports usam `Header`. Em Windows (case-insensitive) funciona, mas em ambientes Linux/CI sensíveis a case pode quebrar. Prefira usar nomes de arquivo que combinem com o import.

Build / Dev / Debug (práticas específicas)
- Instalar dependências: `npm install`.
- Rodar em dev: `npm run dev` (Vite serve na porta 3000 com host `::` para acesso em rede local).
- Build: `npm run build` (script tenta executar `node tools/generate-llms.js` antes do `vite build`; o script `tools/generate-llms.js` não existe no repositório — o `|| true` evita falha, mas considere adicionar ou remover se for necessário).
- Preview build: `npm run preview`.
- Lint: eslint está listado nas devDependencies, mas não há configuração específica. Se adicionar regras, mantenha compatibilidade com `eslint-config-react-app` já instalada.

Pontos de atenção / bugs frequentes
- `tailwind.confg.js` está com nome errado (typo) — o esperado é `tailwind.config.js`. Conferir antes de atualizar a configuração do Tailwind.
- `index.html` referencia `src/main.jsx` enquanto o repo tem `main.js` na raiz — verifique o ponto de entrada usado pelo ambiente Vite alvo.
- Ausência de `vite.config.js` e de arquivos de configuração de alias significa que imports com `@/components/...` podem não resolver fora do ambiente/seed original.

Exemplos específicos úteis para agentes
- Para alterar o texto SEO, editar `App.jsx` (usa `react-helmet` para `<title>` e `<meta name="description">`).
- Para alterar o botão WhatsApp, editar `WhatsAppButton.jsx`.
- Para ajustar estilos globais, editar `index.css` e `tailwind.confg.js` (corrigir nome para `tailwind.config.js` se você for manter a configuração).

Como abordar mudanças grandes
- Antes de mover/renomear arquivos, verificar ambas cópias (`./` e `./IPTV.site/`) e padronizar. Atualize imports para o mesmo casing e adicione um `vite.config.js` (ou `jsconfig.json`) com alias `@` se quiser manter os imports atuais.
- Se adicionar testes, prefira adicionar scripts `test` em `package.json` e um runner leve (Jest / Vitest) — o projeto atualmente não tem testes.

Notas finais para agentes
- Seja conservador: este repositório parece uma cópia local/incompleta de um template. Valide mudanças com `npm run dev` e `npm run build` localmente.
- Ao propor mudanças automáticas, liste arquivos afetados e confirme se devemos sincronizar ou remover a pasta duplicada `IPTV.site/`.

Recentes correções aplicadas: adicionado `vite.config.js` com alias `@`, adicionado `tailwind.config.js` (corrigido typo), criado re-exports em `components/` e `components/ui/` para resolver imports existentes (`@/components/*`, `@/components/ui/*`), e criado `lib/utils.js` para `cn()`.

Se algo estiver pouco claro ou você quiser que eu detalhe regras (ex.: consolidar a pasta duplicada `IPTV.site/` ou remover arquivos antigos), diga qual opção prefere e eu aplico as mudanças.
