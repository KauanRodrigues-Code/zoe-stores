# Zoé Stores — landing page

Landing page estática (Next.js 15 App Router, React 19, TypeScript, CSS próprio) da Zoé Stores, boutique de aluguel de vestidos de festa em Campinas-SP. Sem backend, banco, login, formulário ou coleta de dados. Todo contato acontece por links do WhatsApp.

## Como rodar

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run typecheck
npm run verify:catalog
npm run build && npm start
```

Antes de publicar, copie `.env.example` para `.env.local` e defina `NEXT_PUBLIC_SITE_URL` com o domínio final (usado em sitemap, robots e Open Graph). Não é segredo.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Nome, descrição e **preço** de cada peça | `data/catalogo.json` |
| Tom, destaque na vitrine, alt e dimensões da foto | `lib/catalog.ts` |
| Número do WhatsApp (constante única) | `lib/whatsapp.ts` |
| Endereço, e-mail, Instagram | `lib/site.ts` |
| Cores e estilos | `app/globals.css` |

Para trocar uma foto, substitua o arquivo em `public/images/catalogo/` mantendo o nome e atualize `width`/`height` em `lib/catalog.ts`.

## Animações

Sem dependências novas: CSS + um único Client Component (`components/Reveal.tsx`) com `IntersectionObserver`.

- **Hero:** título, subtítulo, botão e foto entram em sequência (fade; o texto sobe 14 px, a foto só faz fade).
- **Ao rolar:** títulos de seção, cartões, ocasiões, passos e contato aparecem com fade + 18 px de deslocamento, com escalonamento curto entre cartões da mesma linha.
- **Filtros:** a grade entra com um fade de 0,45 s ao trocar a tonalidade.
- **Botões, filtros e cartões:** transições discretas de cor; no mouse, os cartões ganham uma sombra *fora* da foto. A imagem nunca recebe transform, filtro ou sobreposição.
- **Sem CLS:** só `opacity` e `transform`. O conteúdo é renderizado visível no servidor e só é escondido, depois de montado, o que está abaixo da dobra.
- **`prefers-reduced-motion`:** nada é escondido nem animado.

## Seção "Visite nossa boutique" (Google Maps)

`components/Location.tsx`: endereço em texto, botão **Como chegar** (busca no Google Maps pelo endereço completo), link alternativo **Abrir mapa em nova aba** e o mapa incorporado (`loading="lazy"`, `title` acessível, `referrerpolicy="no-referrer"`, quadro de proporção fixa).

- O embed é `https://www.google.com/maps?q=<endereço>&output=embed`, **sem chave de API**. Nenhuma coordenada foi inventada: o Google resolve o texto do endereço, e a página não afirma que o marcador foi confirmado.
- **Corrigir a localização:** edite o endereço em `lib/site.ts` ou defina `NEXT_PUBLIC_MAP_QUERY` (ex.: nome do estabelecimento ou `lat,lng`). Um único valor atualiza o mapa e todos os links. Não é segredo.
- **CSP:** a única mudança foi `frame-src https://www.google.com`. `script-src`, `style-src`, `connect-src`, `default-src` e demais diretivas ficaram como estavam.
- **Privacidade:** o conteúdo do iframe é do Google, que pode definir cookies dentro do mapa. O site em si continua sem cookies, analytics ou rastreamento. Se quiser que o mapa só carregue após um clique, dá para trocá-lo por um botão "Carregar mapa".

## Regra visual: foto separada das informações

Cada foto fica sozinha em `.card__photo` / `.hero__photo`; nome, descrição, preço e botão ficam em `.card__body`, bloco independente abaixo. Não há texto, selo, gradiente, filtro nem pseudo-elemento sobre as fotos, e `object-fit: contain` evita corte e deformação. A moldura decorativa do hero fica atrás da foto.

## Segurança: o que foi configurado

Em `next.config.mjs`: Content-Security-Policy, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`, `Cross-Origin-Opener-Policy`, `poweredByHeader` desligado. HSTS e `upgrade-insecure-requests` só em produção.

Origem externa liberada: somente `frame-src https://www.google.com` (mapa). Se o Google passar a redirecionar o embed para outro host, acrescente apenas essa origem.

Exceções documentadas da CSP:
- `script-src 'unsafe-inline'`: o App Router injeta scripts inline de hidratação. Eliminar isso exige nonce por requisição (middleware e renderização dinâmica), o que desfaz a página estática.
- `style-src 'unsafe-inline'`: estilos inline emitidos pelo Next.
- `'unsafe-eval'` apenas em desenvolvimento.

Demais pontos: sem `dangerouslySetInnerHTML`, sem scripts de terceiros, sem cookies, sem armazenamento local, links externos com `rel="noopener noreferrer"`, nenhum segredo no repositório. Isto reduz a superfície de ataque; não é garantia de segurança absoluta.

## O que a loja precisa confirmar antes de publicar

1. **Todos os preços.** Foram lidos de prints. Enquanto `valor_confirmar_antes_de_publicar` for `true` no JSON, o site exibe um aviso de valores em confirmação. Ao confirmar, ajuste o JSON e o aviso some sozinho.
2. **Fotos originais em alta resolução.** As atuais são recortes de prints (~450×570 px) e ficam suaves em telas grandes.
3. Disponibilidade, tamanhos e regras de locação não aparecem no site de propósito.
4. Endereço e e-mail, conforme informados.
5. Domínio final (`NEXT_PUBLIC_SITE_URL`).
