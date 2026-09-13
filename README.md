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

Os depoimentos vivem na constante `DEPOIMENTOS`, logo abaixo. A Dobra 10 só aparece
com `DEPOIMENTOS_PRONTOS = true` **e** os seis preenchidos por completo; em qualquer
outra situação ela sai com `hidden` e nenhum marcador chega ao visitante. A foto é
opcional — sem ela o avatar usa as iniciais do nome. Ver `DEPOIMENTOS.md` para o
formato, a mensagem de convite e o texto de autorização.

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
| `passos.jpg` | 16:9 | Dobra 05 — **opcional**, o padrão é a cena de produto em HTML |
| `bonus-1.jpg` … `bonus-5.jpg` | 3:4 | Dobra 08, topo de cada card |
| `depo-1.jpg` … `depo-6.jpg` | 1:1 | Dobra 10, avatar de cada depoimento |

## Cena de produto

As Dobras 05 e 09 trazem uma composição em camadas — peças ao fundo, lombadas dos cinco
departamentos, um monitor com o painel do JuriPrático IA, notebook e celular à frente —
construída em HTML/CSS e escalada por `cqw`, sem imagem. No mobile ela vira o painel em
largura total com as lombadas acima.

O painel mostra a instrução em uso, não um produto próprio rodando: o produto continua
sendo o pacote de instruções que o advogado instala na IA dele. Se a página passar a
prometer um aplicativo, é aí que aparece pedido de reembolso — vale manter a copy do
jeito que está.

Nenhuma marca de terceiro entra na cena. A do painel é a do próprio JuriPrático IA, e o
rodapé segue declarando que não há vínculo com Anthropic, OpenAI ou Google.

## Acessibilidade e movimento

Um único `<h1>`, hierarquia contínua de títulos, acordeões operáveis por teclado
com foco visível nos dois fundos, e nenhuma animação sob
`prefers-reduced-motion: reduce` — digitação, contadores, revelação no scroll e
cursor piscando são desligados.
