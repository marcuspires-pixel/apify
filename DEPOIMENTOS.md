# Depoimentos — como preencher a Dobra 10

A seção existe, está estilizada e fica **oculta** até seis depoimentos reais entrarem
em `DEPOIMENTOS` (topo de `app.js`) e `DEPOIMENTOS_PRONTOS` virar `true`. Se faltar
qualquer campo em qualquer um dos seis, a seção continua oculta — é proposital.

Depoimento inventado é publicidade enganosa (CDC art. 37) e foto de terceiro sem
autorização é uso indevido de imagem. O público desta página é justamente quem sabe
processar por isso, então nada de nome, frase, OAB ou rosto que não seja de um cliente
real que autorizou por escrito. **A foto é opcional** — sem ela o avatar mostra as
iniciais do nome, e a seção fica igualmente apresentável.

## Preenchimento

```js
const DEPOIMENTOS = [
  {
    texto:  "No máximo 220 caracteres, na palavra da pessoa.",
    nome:   "Nome Completo",
    oab:    "OAB/SP 123.456",
    area:   "trabalhista",        // trabalhista | previdenciario | familia | civel
    cidade: "São Paulo/SP",
    foto:   "depo-1.jpg"          // opcional; recorte quadrado, 96×96 no mínimo
  },
  // ... mais cinco
];
```

Depois: `const DEPOIMENTOS_PRONTOS = true;`

## Como conseguir os seis rápido

Libere o PRO gratuitamente para dez advogados das quatro áreas, peça que usem em um
caso real e devolvam três frases. Seis respostas aproveitáveis saem de dez convites.

### Mensagem para enviar

> Oi, [nome]. Estou liberando o JuriPrático IA PRO sem custo para dez advogados antes
> do lançamento. O que peço em troca: use em um caso real seu nas próximas duas semanas
> e me responda três coisas, em duas ou três frases no total —
>
> 1. como você fazia essa tarefa antes;
> 2. o que mudou depois;
> 3. para quem você recomendaria.
>
> Se eu puder publicar sua resposta na página, preciso também de nome completo, número
> da OAB, área e cidade, e do aceite do texto de autorização abaixo. Foto é opcional —
> sem ela entra só o seu nome. Se preferir não aparecer, tudo bem: o acesso é seu do
> mesmo jeito.

### Texto de autorização (colher assinado ou por aceite escrito e datado)

> Eu, [nome completo], inscrito(a) na OAB/[UF] sob o nº [número], autorizo
> [razão social / responsável pelo JuriPrático IA] a publicar o depoimento por mim
> prestado sobre o produto JuriPrático IA, na íntegra ou com cortes que não alterem o
> sentido, no site juripraticoia.com.br e em materiais de divulgação do produto.
>
> [ ] Autorizo também o uso da minha imagem (fotografia) junto ao depoimento.
> [ ] Não autorizo o uso da minha imagem.
>
> Declaro que o depoimento reflete minha experiência real de uso, que foi prestado
> livremente e que não recebi pagamento por ele. Esta autorização é por prazo
> indeterminado e pode ser revogada por escrito a qualquer momento, hipótese em que o
> conteúdo será retirado das peças sob controle do autorizado.
>
> [cidade], [data] — [assinatura]

Guarde as autorizações fora do repositório. O que vai para o código é só o que aparece
na página: texto, nome, OAB, área, cidade e, quando autorizada, a foto.

## Cortesias de revisão antes de publicar

- Texto com até 220 caracteres, para os seis cards ficarem com altura parecida.
- Nenhuma promessa de resultado ("ganhei mais causas", "processo mais rápido") — além
  de ser proibida na página, é o tipo de frase que atrai problema com a OAB.
- Confira o número da OAB na consulta pública do CNA antes de subir.
