# Vizzion MaxTV (dev notes)

Quick start

1. Instale Node.js (LTS) — https://nodejs.org/
2. No diretório do projeto rode:

```bash
npm install
npm run dev
```

Se `npm` não estiver disponível no Windows, rode o script de verificação:

```powershell
.\tools\check-env.ps1
```

**Atenção:** não use o botão "Go Live" (Live Server) para rodar este projeto em desenvolvimento. A extensão Live Server serve arquivos estáticos e não resolve imports como o alias `@` nem transforma JSX/ESM — por isso você pode ver um erro como "Unexpected token '<'" (o navegador recebeu HTML em vez de um módulo JS).

Se preferir não instalar Node localmente, abra este repositório no VS Code e escolha **Reopen in Container** (requer a extensão "Remote - Containers"). O Dev Container fará `npm install` automaticamente e exporá a porta `3000`.

Deploy estático (como no Hostinger)

1. Rode `npm run build` — isso criará `dist/`.
2. Rode `npm run export:dist` — isso copiará `dist/` para `publish/`.
3. Envie o conteúdo de `publish/` para o diretório público do seu host. Como o `base` do Vite está configurado para `./`, os caminhos são relativos e o site deve funcionar mesmo em subpastas.

Testando os arquivos estáticos localmente (opções):

- Usando `serve` (recomendado):

```bash
npx serve publish
```

- Usando Python (qualquer versão com HTTP server):

```bash
cd publish
python -m http.server 5000
# abra http://localhost:5000
```

Se `publish/index.html` funciona localmente com `serve`/`python`, então você deve enviar o conteúdo de `publish/` para a sua hospedagem (cPanel, Hostinger, SFTP, etc.).
Notas de manutenção
- `vite.config.js` foi adicionado para habilitar o alias `@` usado em imports (aponta para a raiz do projeto).
- `tailwind.config.js` foi corrigido (corrige typo anterior `tailwind.confg.js`).
- Se o `build` falhar porque `tools/generate-llms.js` está ausente, adicione um stub ou remova a chamada do `package.json`.
