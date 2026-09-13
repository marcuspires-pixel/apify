# Prompts de imagem — JuriPrático IA

Para gerar no Nano Banana (Gemini Image) as imagens que faltam na landing page.
Cada bloco já traz o arquivo de destino e a proporção que a página espera.

---

## Antes de qualquer coisa: três decisões que mudam o resultado

**1. Anexe a referência de enquadramento.** Junto com o prompt, anexe
`referencia-composicao.png` (a cena que já está na página, exportada em 2280×1140) e
comece o prompt com: *"Use a imagem anexada apenas como referência de enquadramento e
posição dos objetos. Refaça em renderização 3D fotorrealista."* O Nano Banana acerta
muito mais a composição com uma referência do que só com texto.

**2. Prefira gerar as telas apagadas.** O gerador erra texto com acento em português com
frequência — e sai "INSTRUÇÔES", "CONTESTAÇAO", palavra embaralhada. A rota segura é a
**variante B** de cada prompt: cenário fotográfico com as telas escuras e o painel real
sobreposto por cima em HTML. Aí o texto fica nítido, correto, acessível e traduzível, e
você fica com o realismo da foto. Mande a imagem que eu faço a montagem.

**3. Marca nenhuma, em lugar nenhum.** Geradores adoram inventar logotipo em tela, em
teclado, em etiqueta de pasta — e costumam produzir uma versão deformada de uma marca
real. Se aparecer qualquer símbolo, estrela, asterisco ou nome de empresa na imagem,
descarte e gere de novo. Isso vale especialmente para o emblema da OAB no bônus 3: é
marca registrada e não pode ser reproduzida.

---

## Bloco de regras — cole no fim de todo prompt

```
Regras obrigatórias:
- Sem nenhum logotipo, marca, nome de empresa, símbolo de inteligência artificial,
  estrela ou asterisco. Nenhuma tela, etiqueta, pasta ou teclado pode exibir marca.
- Sem texto inventado. Só os textos que eu listei, exatamente como escritos.
- Paleta: fundo azul-petróleo quase preto (#070B14 a #0C1322), acentos em turquesa
  elétrico (#27E5D4) e azul elétrico (#5B8CFF), papel branco levemente quente.
- Iluminação de estúdio suave vinda de cima à esquerda, mais um brilho turquesa e azul
  difuso vindo de trás dos objetos. Sombra de contato no chão.
- Renderização 3D fotorrealista, foco nítido, profundidade de campo leve.
- Proibido: martelo de juiz, balança da justiça, coluna grega, robô, cérebro luminoso,
  pessoas, rostos, mãos.
```

---

## 1 · Foto de produto principal

**Arquivo:** `passos.jpg` (16:9) — e/ou `hero-produto.jpg` (16:10)
**Onde:** Dobra 05, abaixo dos quatro passos; opcionalmente também no hero

### Variante A — com as telas ligadas

```
Renderização 3D fotorrealista de uma composição de produto sobre fundo azul-petróleo
quase preto, vista de frente e ligeiramente de cima, proporção 16:9.

No centro, um monitor widescreen de moldura fina escura sobre um pé cilíndrico baixo,
levemente inclinado para trás. No topo da tela, o símbolo da marca em turquesa
(#27E5D4): dois colchetes deslocados, formando uma figura quadrada — e, ao lado dele, o nome escrito exatamente assim, em uma palavra só:
JuriPrático IA. Sem separar "Juri" de "Prático". Nenhum outro símbolo na tela. A tela mostra uma interface escura de conversa: uma
coluna estreita à esquerda com cinco linhas curtas, cada uma precedida por um ponto
colorido (turquesa, azul, roxo, verde, dourado); e uma área maior à direita com uma
linha de comando em turquesa no topo, uma frase em branco abaixo e quatro itens de
lista com marcadores turquesa, terminando num cursor retangular turquesa aceso.

À esquerda e à frente, um notebook aberto em três quartos, exibindo um documento branco
de texto jurídico com uma tarja âmbar destacando uma linha.

À direita e à frente, um celular apoiado em pé, tela escura com quatro cápsulas
empilhadas, a primeira delas com contorno turquesa aceso.

Ao fundo à direita, cinco pastas de arquivo rígidas enfileiradas em pé, de lombada
escura, cada uma com uma faixa colorida no topo na sequência turquesa, azul, roxo,
verde e dourado. Nas lombadas, verticalmente, apenas estas palavras, uma por pasta:
PEÇAS, CONTRATOS, PESQUISA, ROTINA, HONORÁRIOS.

Ao fundo à esquerda, uma pilha de folhas impressas levemente espalhadas em leque, com
linhas de texto cinza sem palavras legíveis.

À frente e ao centro, uma caneta escura discreta apoiada na superfície.

[cole aqui o bloco de regras]
```

### Variante B — telas apagadas, para eu sobrepor o painel real (recomendada)

Mesmo prompt acima, trocando os três parágrafos de conteúdo de tela por:

```
As telas do monitor, do notebook e do celular estão desligadas: superfície escura
uniforme, quase preta, com um leve reflexo de estúdio e um brilho turquesa suave nas
bordas. Nenhum conteúdo, nenhuma interface, nenhum texto nas telas.

O monitor deve estar de frente, com a tela o mais retangular possível na imagem — sem
perspectiva forte — para que uma interface possa ser encaixada nela depois.
```

---

## 2 · Antes e depois

**Arquivos:** `antes.jpg` e `depois.jpg` — ambos 1:1
**Onde:** Dobra 03, uma em cada coluna

As duas precisam ser **a mesma mesa, o mesmo ângulo, a mesma lente**. Gere a primeira e
peça a segunda como edição da primeira, para o par ficar coerente.

### antes.jpg

```
Fotografia quadrada de uma mesa de trabalho de advogado às 22h40, vista de cima em
ângulo de 45 graus. Um notebook aberto com um documento em branco na tela, uma pilha
desorganizada de processos e papéis soltos ao lado, uma caneca de café pela metade e
uma luminária de mesa acesa criando uma luz baixa e amarelada. Clima de cansaço e fim
de expediente: cores dessaturadas, sombras longas, um pouco de desordem.
Sem pessoas, sem rostos, sem mãos.

[cole aqui o bloco de regras]
```

### depois.jpg

```
A mesma mesa, o mesmo ângulo e a mesma lente da imagem anterior, agora organizada. Os
papéis estão empilhados e alinhados, a mesa está limpa, e a tela do notebook mostra um
documento já estruturado, com títulos e blocos de texto bem separados e uma tarja âmbar
marcando uma linha. A luz agora é mais fria e clara, com um leve brilho turquesa vindo
da tela. Clima de trabalho resolvido.
Sem pessoas, sem rostos, sem mãos.

[cole aqui o bloco de regras]
```

---

## 3 · Capas dos cinco bônus

**Arquivos:** `bonus-1.jpg` a `bonus-5.jpg` — 3:4, exporte em 900 × 1200
**Onde:** Dobra 08, topo de cada card

**Gere sem nenhum texto na capa.** O nome do bônus já aparece em texto logo abaixo da
imagem, dentro do card. Texto na arte só cria chance de erro de ortografia — e aqui o
gerador erraria cinco vezes seguidas.

**Faça as cinco na mesma sessão, em sequência.** Gere a primeira até ficar boa. Depois,
para as outras quatro, mande a primeira como anexo e peça: *"mesma capa, mesma
iluminação, mesmo ângulo — troque apenas o objeto central por [novo objeto] e a cor da
borda para [nova cor]."* É o que mantém as cinco parecendo um conjunto em vez de cinco
imagens avulsas.

---

### bonus-1.jpg — Prompt Advogado Consultor Master

```
Renderização 3D fotorrealista, proporção 3:4 (vertical), de uma capa de material
digital flutuando levemente inclinada sobre fundo azul-petróleo quase preto (#070B14).

A capa é um cartão vertical de superfície escura fosca, cantos levemente arredondados,
com uma fina borda luminosa em turquesa elétrico (#27E5D4) e um brilho suave da mesma
cor por trás dela.

No centro da capa, em relevo discreto e da mesma cor turquesa: duas bolhas de conversa
sobrepostas, desenhadas em linha fina, sem nada escrito dentro.

Luz de estúdio suave vinda de cima à esquerda. Sombra de contato abaixo da capa.
Foco nítido, leve profundidade de campo.

Sem nenhum texto, número, letra, logotipo, marca ou símbolo de empresa na imagem.
Sem pessoas. Sem martelo de juiz, balança da justiça, coluna grega, robô ou cérebro.
```

### bonus-2.jpg — Mestre de Prazos

```
[mesmo bloco acima, trocando o parágrafo do objeto por:]

No centro da capa, em relevo discreto e da mesma cor turquesa: um calendário de mesa
visto de frente, desenhado em linha fina, com um único dia destacado por um contorno
mais forte. Sem números legíveis, sem nomes de mês.
```

Borda e brilho: **turquesa #27E5D4**.

### bonus-3.jpg — Guia de Conformidade OAB

```
[mesmo bloco, trocando o parágrafo do objeto por:]

No centro da capa, em relevo discreto e da cor da borda: um selo circular liso com uma
fita presa embaixo, desenhado em linha fina. O selo é completamente liso por dentro —
sem brasão, sem emblema, sem escudo, sem sigla e sem nenhuma inscrição.
```

Borda e brilho: **dourado #F5C451**.

> Atenção neste: o emblema da OAB é marca registrada e não pode ser reproduzido nem
> imitado. Se o gerador colocar qualquer brasão, escudo ou letra dentro do selo,
> descarte e gere de novo.

### bonus-4.jpg — Protocolo de Sigilo e LGPD

```
[mesmo bloco, trocando o parágrafo do objeto por:]

No centro da capa, em relevo discreto e da cor da borda: um cadeado fechado apoiado
sobre uma folha de documento, desenhados em linha fina. Na folha, três tarjas sólidas
cobrindo onde estaria o texto, como numa anonimização. Sem nenhuma palavra visível.
```

Borda e brilho: **dourado #F5C451**.

### bonus-5.jpg — Guia de outras ferramentas

```
[mesmo bloco, trocando o parágrafo do objeto por:]

No centro da capa, em relevo discreto e da cor da borda: três cartões retangulares
iguais e neutros, lado a lado e levemente sobrepostos, desenhados em linha fina. Os
cartões são vazios por dentro — sem ícone, sem logotipo, sem letra e sem símbolo de
nenhum aplicativo ou empresa.
```

Borda e brilho: **dourado #F5C451**.

---

### Quando as cinco estiverem prontas

Salve como `bonus-1.jpg` … `bonus-5.jpg` na raiz do projeto, em 900 × 1200, até 180 KB
cada. Depois, no topo do `app.js`:

```js
const BONUS_FOTOS = true;
```

As cinco capas entram no lugar dos placeholders, com `alt` descritivo já escrito para
cada uma. Se algum arquivo faltar, aquele card específico mantém o placeholder — os
outros quatro aparecem normalmente.

## 4 · Depoimentos

**Arquivos:** `depo-1.jpg` a `depo-6.jpg` — 1:1

**Não gere estas.** Foto de rosto gerada por IA apresentada como cliente real é
publicidade enganosa. Ou entra a foto real de quem autorizou por escrito, ou o avatar
usa as iniciais do nome — que já é o comportamento padrão da página. Ver `DEPOIMENTOS.md`.

---

## Quando as imagens ficarem prontas

Exporte em JPG de qualidade alta, no dobro do tamanho de exibição:

| Arquivo | Exportar em | Peso alvo |
|---|---|---|
| `hero-produto.jpg` | 2000 × 1250 | até 320 KB |
| `passos.jpg` | 2280 × 1283 | até 320 KB |
| `antes.jpg` / `depois.jpg` | 1200 × 1200 | até 220 KB |
| `bonus-1..5.jpg` | 900 × 1200 | até 180 KB |

Coloque na raiz do projeto, ao lado do `index.html`, e me avise: eu troco os
placeholders, declaro `width`/`height` para não haver salto de layout, escrevo o `alt`
de cada uma e confiro o contraste do texto que ficar por cima.
