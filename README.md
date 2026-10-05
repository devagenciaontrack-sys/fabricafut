# fabricafut.com — Landing page Fábrica Fut
**Site publicado:** https://devagenciaontrack-sys.github.io/fabricafut/

Landing page independente da **Fábrica Fut**, centrada em **comprar em atacado**.
Ideia central: “Comprar em atacado pode ser mais simples.”

Site estático (HTML + CSS + JS, sem build). Publicado via GitHub Pages.

## Estrutura

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Página: header, hero com vídeo, Catálogo, “Tudo o que você precisa consultar”, Aplicativo, Jornada, CTA final com QR Code, FAQ e rodapé |
| `style.css` | Identidade editorial: off-white `#FAF8F3`, laranja `#F05A28`, carvão `#24272B`, areia `#EAE4DA`, azul apoio `#406D96`. Fontes Manrope 700/800 (títulos) e DM Sans (corpo) |
| `main.js` | Vídeo sob demanda e eventos de rastreamento |
| `politica-de-privacidade.html`, `termos-de-uso.html` | Páginas provisórias (aguardando texto oficial) |

## Regras atendidas

- **Um único link para o app** em todos os CTAs: `https://foxappy.com/link?store=atkfut` (sem escolha entre Android e iPhone).
- **Vídeo** `https://youtube.com/shorts/NsGeB67Gk3M` como peça editorial (fora de mockup de celular), **sem autoplay**: o player só carrega no toque.
- **Mobile-first**: headline → vídeo → CTA, com CTA fixo “VER NO APP”.
- **QR Code** apenas no desktop.
- Linguagem visual diferente da Atacadista Fut: sem números grandes, sem cards de etiqueta, layout claro e assimétrico com linhas finas.
- O nome “Fábrica” **não** é usado para afirmar fabricação própria, preço de fábrica ou “direto da fábrica”.
- Rodapé com a empresa responsável por esta marca: PELE AMARELA INTERMEDIACOES LTDA — CNPJ 65.439.566/0001-60.
- Catálogo com categorias conceituais (Novidades, Modelos disponíveis, Oportunidades, Reposições) — nenhum produto, marca, preço ou disponibilidade inventado.

## Rastreamento

Eventos enviados ao `dataLayer` (GTM) e, se instalados, a `gtag`, Meta Pixel e TikTok Pixel.

| Evento | Quando dispara |
|---|---|
| `fabrica_app_click` | Clique em qualquer CTA do app (parâmetro `location`: header, hero, catalogo_*, cta_final, sticky_mobile) |
| `fabrica_video_play` | Clique para assistir ao vídeo |
| `fabrica_instagram_click` | Clique no Instagram do rodapé |
| `fabrica_qrcode_view` | QR Code visível na tela (somente desktop) |

## Pendências do cliente

- [ ] Logo oficial — `[INSERIR_LOGO_FABRICA]` (hoje é um logotipo em texto)
- [ ] Link do Instagram — `[INSERIR_INSTAGRAM_FABRICA]`
- [x] Screenshot real do app (em `assets/tela-app.jpg`, seção “O catálogo acompanha você”)
- [ ] Fotos reais de produto para os blocos do catálogo (opcional)
- [ ] Texto oficial da Política de Privacidade e dos Termos de Uso
- [ ] Domínio `fabricafut.com`: apontar o DNS para o GitHub Pages e configurar em *Settings → Pages*
- [ ] Código do GTM / pixels
