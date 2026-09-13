# Landing Page — JuriPrático IA

Página única, estática, em português do Brasil. Sem framework, sem build, sem
dependência externa além das fontes do Google.

```
index.html    marcação e copy
styles.css    tokens, componentes e responsividade
app.js        constantes de configuração e interações
```

Para publicar, sobem os três arquivos (mais as imagens) em qualquer hospedagem
estática. Não há backend.

## O que editar antes de ir ao ar

Tudo no topo de `app.js`:

```js
const CHECKOUT_START       = "#";     // URL do checkout do Start (R$27)
const CHECKOUT_PRO         = "#";     // URL do checkout do PRO (R$67)
const DEPOIMENTOS_PRONTOS  = false;   // só true com depoimentos reais e autorizados por escrito
const AREA_PADRAO          = null;    // null = ordem padrão dos cards de área
```

Enquanto `DEPOIMENTOS_PRONTOS` for `false`, a Dobra 10 fica com `hidden` e **não
aparece na página publicada** — os marcadores `[NOME COMPLETO]`, `[DEPOIMENTO]` e
`[OAB/UF]` continuam no código, prontos para serem trocados, mas nunca chegam ao
visitante.

## Parâmetro de área

`?a=trabalhista`, `?a=previdenciario`, `?a=familia` ou `?a=civel` move o card
correspondente para a primeira posição, destaca com borda de 2px na cor da área e
aplica o selo `SUA ÁREA`. O valor é anexado ao link do checkout como `?area=`.
Valor ausente ou inválido mantém a ordem padrão.

## Imagens

Os espaços estão marcados com placeholders na proporção final. Ao trocar, use
`<img>` com `width`, `height` e `loading="lazy"` (exceto a do hero) — há um
comentário HTML em cada ponto indicando a substituição.

| Arquivo | Proporção | Onde |
|---|---|---|
| `hero-produto.jpg` | 16:10 | Dobra 01 — opcional; o padrão é a janela de conversa em HTML |
| `antes.jpg` | 1:1 | Dobra 03, coluna esquerda |
| `depois.jpg` | 1:1 | Dobra 03, coluna direita |
| `passos.jpg` | 16:9 | Dobra 05, abaixo dos quatro cards |
| `bonus-1.jpg` … `bonus-5.jpg` | 3:4 | Dobra 08, topo de cada card |
| `depo-1.jpg` … `depo-6.jpg` | 1:1 | Dobra 10, avatar de cada depoimento |

## Acessibilidade e movimento

Um único `<h1>`, hierarquia contínua de títulos, acordeões operáveis por teclado
com foco visível nos dois fundos, e nenhuma animação sob
`prefers-reduced-motion: reduce` — digitação, contadores, revelação no scroll e
cursor piscando são desligados.
