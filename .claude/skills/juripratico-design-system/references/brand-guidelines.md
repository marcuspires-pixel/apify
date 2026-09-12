# Diretrizes JuriPrático IA

Versão 1.0.0 · 12 de setembro de 2026

## 1. Estratégia e decisões

**Propósito proposto:** devolver tempo ao advogado para analisar, decidir e atender melhor.

**Posicionamento:** instruções e materiais de IA simples de usar para advogados autônomos e pequenos escritórios. A primeira versão dá uma base para o profissional desenvolver o trabalho.

**Público confirmado:** áreas cível, trabalhista, previdenciária e de família; pouca experiência com IA; receio de informações falsas e dificuldade para entender suas possibilidades.

**Dores confirmadas:** tarefas repetitivas, tempo consumido e insegurança com IA.

**Percepção desejada:** “É simples de usar e virou parte da minha rotina.” Essa frase é objetivo de marca, não depoimento.

**Princípios de experiência:**

1. Agilidade: diminuir passos, indicar a próxima ação, mostrar progresso real.
2. Clareza: explicar resultado, custo e dependências; organizar pelo trabalho do advogado.
3. Confiança: distinguir rascunho e revisão, conferir referências, demonstrar resultados concretos.

**Não transformar em promessa:** ausência absoluta de erros, sucesso judicial, modelos dos “melhores advogados” sem critério verificável, economia de tempo sem medição, depoimentos não obtidos de usuários reais.

## 2. Nome e arquitetura de marca

- Assinatura: **JuriPrático IA**. Manter P maiúsculo, acento e espaço antes de IA.
- Domínio: **juripraticoia.com.br**. Domínio sem acento.
- Descritor: **IA prática para advogados**.
- Frase de posicionamento: **Você pensa o caso. A IA ajuda a estruturar o documento.**
- Start: entrada e primeiros passos.
- Pro: ampliação de recursos.
- Implementação: serviço futuro com escopo próprio.
- Cível, Trabalhista, Previdenciário e Família: categorias do catálogo, sem logotipos separados.
- Claude, ChatGPT e Gemini: compatibilidade técnica quando efetiva. Não incorporar marcas de terceiros ao nome ou símbolo.

O design system não estabelece preços ou quantidade de materiais como conteúdo fixo. Esses dados devem vir da oferta vigente e refletir a entrega real.

## 3. Identidade visual

### Símbolo

Dois colchetes deslocados na grade 64 × 64 formam uma estrutura aberta. Representam organização e espaço para o raciocínio humano. Usar junto da assinatura no primeiro contato; isoladamente em favicon e aplicações já identificadas.

### Assinatura e proteção

| Regra | Especificação |
|---|---|
| Área livre | Mínimo ¼ da altura do símbolo em todos os lados |
| Largura mínima digital | Assinatura completa 180 px |
| Símbolo isolado | 24 px; favicon 16 px |
| Impressão | Assinatura mínima 40 mm; testar legibilidade no suporte |
| Principal | Azul profundo sobre branco ou branco suave |
| Inversa | Branca sobre azul profundo |
| Monocromática | Grafite sobre fundo claro |
| Proibições | Distorcer, girar, ornamentar, trocar a ordem IA, aplicar sombra ou usar em fundo sem contraste |

SVGs de assinatura incluem a fonte em formato TTF. Alguns softwares vetoriais podem exigir a instalação de `assets/manrope.ttf`; se necessário, converter texto em curvas no arquivo de produção, preservando uma cópia editável. Não foi feita pesquisa de marca no INPI.

### Paleta

| Papel | Cor |
|---|---|
| Identidade | Azul profundo `#17324D` |
| Marca complementar | Verde-petróleo `#087F8C` |
| Ação clara e texto de destaque | Verde-petróleo escuro `#066874` |
| Hover de ação | `#065661` |
| Fundo | `#F7F8FA` |
| Superfície | `#FFFFFF` |
| Texto | `#202832` |
| Texto secundário | `#526271` |
| Borda decorativa | `#DCE2E7` |
| Borda de controle | `#7A8997` |

Usar o claro como padrão da marca. O tema escuro é uma opção de leitura/uso e não muda a identidade dos materiais de marketing. Cards, campos e feedback usam variáveis semânticas; as cores de status não representam áreas do Direito. Uma área sempre tem rótulo textual.

Os pares de texto/fundo e foco/controle foram medidos na biblioteca original. Essa verificação não cobre novas combinações ou implementações. Não transportar uma cor de feedback para outro fundo sem recalcular o contraste.

### Tipografia

Manrope variável, pesos 200–800 disponíveis no arquivo; usar 400/600/750 no sistema. Arquivo e licença SIL OFL incluídos. Fonte primária da interface, anúncios, e-mail quando suportado e títulos. Arial é fallback para clientes de e-mail e sistemas sem carregamento de fontes.

Georgia é reservada para exemplos de documentos e leitura extensa; fallback Times New Roman. Não representa requisito de tribunal.

| Estilo | Desktop | Celular | Entrelinha | Peso |
|---|---|---|---|---|
| Display | 48–72 px fluidos | 40–48 px | 1,06–1,15 | 750 |
| Título principal | 40 px | 32 px | 1,15 | 750 |
| Título de seção | 32–36 px | 28–30 px | 1,2 | 750 |
| Título de componente | 24 px | 20–24 px | 1,3 | 750 |
| Corpo | 16 px | 16 px | 1,65 | 400 |
| Rótulo | 14 px | 14 px | 1,5 | 600 |
| Metadado | 12 px | 12 px | 1,5 | 400 |
| Documento | 18 px | 18 px | 1,75 | 400 |

Limitar texto longo a 70ch. Rótulos persistentes acima do campo. Evitar texto longo em caixa alta, justificação forçada e informação importante em texto minúsculo. O shell de documentação usa alguns índices decorativos de 8–11 px; os componentes do produto mantêm mínimo de 12 px.

### Espaçamento, layout e bordas

Escala: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64 e 80 px. Ritmo vertical padrão de formulário: 20 px; card: 24 px; seção: 64–80 px. Em celular, card 20 px e seção 48 px.

| Faixa | Composição recomendada |
|---|---|
| 320–767 px | Uma coluna, margem 16 px, navegação recolhida |
| 768–1099 px | Duas colunas, margem 24 px |
| ≥1100 px | Até 12 colunas, margem 40 px, conteúdo máximo 1200 px |

Formulário de tarefa até 560 px. Conteúdo de leitura até 70ch. A biblioteca usa sidebar de 244 px (218 px na faixa intermediária) e recolhe navegação abaixo de 960 px para preservar espaço de leitura. As quebras do produto podem se adaptar ao conteúdo usando essas referências.

Raios: 4 px em detalhes, 8 px em controles, 12 px em cards/diálogos; raio total apenas em status e avatar. Bordas de 1 px e erro de campo de 2 px. Não usar borda decorativa fraca como único limite de um campo.

Sombras: pequena para flutuação discreta; média para menu; alta para diálogo. Camadas: header 20, menu 30, diálogo 50, toast 60. O `dialog` nativo usa a top layer do navegador.

### Movimento

120 ms para estados; 180 ms para transições; 280 ms para painéis. Curva `cubic-bezier(.2, 0, 0, 1)`. Priorizar opacidade e transformação, sem mudança inesperada de layout. Carregamento deve refletir uma operação real. Com `prefers-reduced-motion: reduce`, remover animações e rolagem suave; manter mensagens textuais.

### Ícones e imagens

16 SVGs próprios em grade 24 px, traço 1,7 px e terminação arredondada. Tamanhos de interface 16/20/24 px; símbolo ilustrativo 32–48 px. Ícones junto de texto são decorativos (`aria-hidden`). Botão só com ícone recebe `aria-label`.

Fotografias: trabalho cotidiano real, com consentimento e sem dados de clientes visíveis. Ilustrações: documento, etapas e organização. Evitar robôs, cérebros luminosos, neon, martelos e balanças douradas. Não usar o ícone de check como selo de correção jurídica automática.

## 4. Conteúdo e UX writing

Tom: direto, prático, respeitoso. Frases com ação e consequência. Linguagem pt-BR; “você”. “Instrução pronta” explica “skill” na primeira ocorrência. Usar “primeira versão” e “conferir fonte”.

| Situação | Mensagem padrão |
|---|---|
| Copiado | Instrução copiada. Abra sua ferramenta de IA para continuar. |
| Carregando | Carregando material… |
| Falha recuperável | Não foi possível carregar. Tente novamente. |
| Vazio | Nenhum material salvo. Explore a biblioteca para escolher sua primeira instrução. |
| Sem resultados | Nenhum resultado. Tente outra tarefa ou área de atuação. |
| Referência pendente | Confira a fonte antes de usar esta referência. |
| Campo obrigatório | Informe seu e-mail para continuar. |
| E-mail inválido | Informe um e-mail válido, como voce@exemplo.com. |
| Confirmação destrutiva | Excluir este rascunho? [Explicar consequência.] |

Não sugerir que a IA substitui julgamento profissional. Nunca fabricar prova social. Não usar números de economia ou “melhores advogados” sem evidência. Não colocar uma garantia de exatidão no botão ou badge.

## 5. Padrões de produto

### Biblioteca

Buscar por tarefa e área; resultados com nome, categoria, estado e ação. Normalizar acentos na busca. Sem resultado deve preservar a busca e oferecer limpar. Somente mostrar “Disponível” quando houver acesso efetivo. Recursos Pro devem explicar o benefício e a condição de acesso sem fingir erro.

### Revisão

Fluxo: primeira versão → revisão necessária → conferido pelo usuário. A UI não pode inferir revisão a partir de tempo decorrido ou geração concluída. Checklist com fatos, fontes e pedidos exige confirmação humana. “Conferido” informa a ação do usuário e não chancela correção jurídica.

### Formulários

Labels acima dos campos, ajuda contextual, indicação textual de obrigatoriedade. Validar ao enviar; durante correção, retirar erro quando válido. Focar o primeiro erro e manter valores. Não bloquear colagem. Dados de exemplo devem ser fictícios.

### Carregamento e falhas

Spinner no botão para operação curta; skeleton para conteúdo. `aria-busy` e mensagem de status. Impedir envio duplicado. Falha recuperável mantém conteúdo e oferece tentar novamente. Sucesso só após resposta efetiva da operação. Demonstrações devem ser identificadas como tal.

### Compra e acesso

Mostrar conteúdo e dependências de Start/Pro; preço total, periodicidade, acesso e condições reais. Mostrar confirmação de pagamento somente após verificação pelo backend. O design system não implementa pagamento. A aplicação visual não deve expor detalhes técnicos que não ajudem o cliente a decidir.

## 6. Aplicações

- Landing page: benefício → demonstração → recursos → como usar → oferta → perguntas → ação. Explicar ferramenta compatível e eventual custo separado.
- Área de membros: tarefa antes de tecnologia; onboarding curto e navegação por recursos.
- E-mail: largura até 600 px, Arial fallback, texto real e CTA descritivo. Assinatura Equipe JuriPrático IA. Contato visual não prova operação de correio.
- Guia A4: margem 20 mm, título de seção, passo numerado, exemplo legível e indicação de revisão; rodapé com versão e página.
- Anúncio 1080 × 1350 / story 1080 × 1920: benefício único, marca visível e demonstração ou chamada clara; margem livre mínima de 8%, ajustada às áreas cobertas pela plataforma.
- Avatar: símbolo central em azul, sem texto pequeno. Não colocar assinatura horizontal em recorte circular.

## 7. Acessibilidade

Texto normal ≥4,5:1; texto grande ≥3:1. Componentes essenciais e foco com contraste ≥3:1 no fundo adjacente. Cor nunca é o único meio de transmitir estado. Alvos padrão 44 px, compactos 36 px com espaço entre controles. Reflow a 320 px; rolagem horizontal apenas em áreas delimitadas.

Tab/Shift+Tab percorrem controles. Enter/Espaço acionam. Abas usam setas/Home/End. Dialog mantém foco e fecha com Esc, restaurando foco no acionador. Campos têm label e erros em `aria-describedby`. Status usa `role=status`; alertas urgentes reais podem usar `role=alert`, sem anunciar mensagens estáticas de demonstração.

Fontes: [W3C contraste](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [W3C diálogo modal](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/), [W3C tamanho de alvo](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html). A meta de alvo 44 px é mais conservadora que o mínimo AA de 24 px, consideradas as exceções do critério.

## 8. Governança

1. Propor problema concreto e evidência de necessidade.
2. Buscar componente ou token existente antes de criar novo.
3. Documentar anatomia, variantes, estados, teclado, conteúdo e exemplo.
4. Verificar contraste, desktop/mobile, ambos os temas, erros e teclado.
5. Registrar mudança no changelog e atualizar biblioteca e código juntos.

Versões: patch para correções compatíveis; minor para adições; major para renomear/remover contratos. Mudança major precisa de mapa anterior→novo e período de migração. Não renomear tokens isoladamente no produto.

Responsáveis propostos: produto por regras/conteúdo; design por linguagem/tokens; desenvolvimento por comportamento/testes. Atribuir pessoas na adoção pelo time.

## 9. Referências e limites

Briefing desta conversa e documento “Escritório Jurídico de IA (Copy)”. Referências de apresentação já pesquisadas: [Harvey](https://www.harvey.ai/), [Jus IA](https://ia.jusbrasil.com.br/) e [Linear](https://linear.app/). Aproveitar clareza, exemplos e organização sem copiar identidade ou alegar equivalência de funcionalidades.

As verificações desta biblioteca não certificam toda aplicação futura. Teste com tecnologias assistivas, integração de serviços e revisão de conteúdos deve acontecer na aplicação final. As composições de landing page, anúncios e e-mail são exemplos de design; não são serviços publicados.
