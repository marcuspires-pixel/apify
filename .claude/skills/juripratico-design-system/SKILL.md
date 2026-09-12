---
name: juripratico-design-system
description: "Aplica o design system e cria copy da JuriPrático IA para landing pages, anúncios, oferta Start/Pro, e-mails, área de membros e documentos. Use para criação ou revisão ligada à marca; inclui tokens, identidade SVG, componentes e o blueprint de copy fornecido pelo usuário."
---

# JuriPrático IA — Design System

Crie resultados coerentes com a marca **JuriPrático IA** e com a tarefa solicitada. Esta skill contém a versão 1.0.0 do sistema. As decisões explícitas mais recentes do usuário prevalecem sobre este retrato; preserve convenções do projeto quando compatíveis e explique adaptações relevantes.

## Contexto que orienta as decisões

- Público: advogados autônomos e pequenos escritórios, inicialmente cível, trabalhista, previdenciário e família.
- Barreiras: pouca familiaridade com IA, tarefas repetitivas e medo de informações falsas.
- Personalidade: **agilidade, clareza e confiança**. Linguagem pt-BR, direta e prática.
- Oferta original: instruções e materiais para preparar primeiras versões; não presumir que exista um software próprio de geração.
- Marca: **JuriPrático IA**, com acento, P maiúsculo e espaço antes de IA. Domínio: `juripraticoia.com.br`.
- Descritor: **IA prática para advogados**. Mensagem: **Você pensa o caso. A IA ajuda a estruturar o documento.**
- Arquitetura: uma marca com **Start**, **Pro** e o serviço futuro **Implementação**. Áreas do Direito são categorias, sem marcas próprias.

## Carregue somente as referências necessárias

| Tarefa | Recurso |
|---|---|
| Identidade, naming, linguagem, layout ou aplicações de marketing | [Diretrizes da marca](references/brand-guidelines.md). Consulte as seções pertinentes. |
| Copy de landing page, anúncio, oferta, FAQ, checkout ou e-mail | [Playbook de copy](references/copywriting.md), derivado do PDF fornecido pelo usuário; contém estrutura, exemplos e condições da oferta original. |
| Componentes, formulários, navegação, revisão de documentos ou acessibilidade | [Contratos dos componentes](references/components.md). |
| Implementação HTML/CSS, adaptação a React/Vue ou uso dos arquivos | [Integração e recursos](references/integration.md). |
| Inspeção visual | Abra [a biblioteca navegável](assets/library.html) no navegador ou inspecione [a referência desktop](assets/preview-desktop.png). |
| Valores exatos | [Tokens CSS](assets/ui/tokens.css) e [tokens JSON](assets/ui/tokens.json). |

Não carregue o HTML completo como texto: ele incorpora uma fonte. Leia os arquivos CSS/JS e as referências para detalhes de implementação.

## Quando a tarefa for copy

Use o [playbook de copy](references/copywriting.md) como referência editorial principal. Preserve a lógica do exemplo: dor concreta → instrução por tarefa → primeira versão → revisão humana → oferta clara. A versão original do PDF está em [assets/sources/escritorio-juridico-ia-copy.pdf](assets/sources/escritorio-juridico-ia-copy.pdf); abra apenas quando precisar conferir texto ou contexto exato.

Adapte os exemplos ao nome atual JuriPrático IA e às quatro áreas do briefing. Os números do PDF são a proposta de setembro de 2026, não configuração comercial permanentemente válida. Reutilize condições já confirmadas na sessão; quando faltarem, produza o rascunho com campos editoriais explícitos ou formule sem números. Não interrompa para confirmar novamente dados já fornecidos.

Entregue a copy no formato pedido. Pedidos apenas de texto não implicam criar página, enviar e-mail, publicar anúncio ou alterar a biblioteca visual.

## Fluxo de aplicação

1. Identifique o entregável e as decisões vigentes no projeto. Para um pedido apenas de texto ou análise, mantenha esse escopo.
2. Consulte a referência adequada e reutilize os tokens e assets. Adapte ao framework existente, sem instalar uma stack nova só para aplicar a identidade.
3. Organize a experiência pela tarefa do advogado e pelo próximo passo. Mostre claramente o que recebe, como usa e o que precisa revisar.
4. Implemente os estados relevantes ao fluxo, inclusive erro, carregamento e vazio quando a operação puder produzi-los. Exemplos locais precisam se identificar como demonstração.
5. Verifique o resultado no contexto solicitado: legibilidade e identidade em peças estáticas; responsividade, estados e teclado em interfaces. Aplique a verificação proporcional à mudança.

## Decisões visuais essenciais

- Identidade em azul profundo `#17324D`; verde de marca `#087F8C`; ação acessível clara em `#066874`.
- Canvas `#F7F8FA`, superfícies brancas, texto `#202832`. **Use os tokens semânticos** `--jp-action`, `--jp-text`, `--jp-surface` etc. nos componentes, inclusive no tema escuro.
- **Manrope** 400/600/750 na interface; fonte e licença incluídas. **Georgia** para exemplos de documentos. Não impor esse formato a peças jurídicas reais.
- Escala de 4 px; raio 8 px para controles e 12 px para cards. Controles padrão de 44 px, compactos 36 px, grandes 52 px. Os valores completos estão nos tokens.
- Layout contemporâneo, claro e organizado. Evite robôs, neon, martelos e ornamentos dourados. Não interprete preço acessível como acabamento descuidado.
- Assinaturas e ícones prontos em [assets/ui/assets](assets/ui/assets). Respeite proporção, área livre e versões descritas nas diretrizes. Não recrie o logo por aproximação se o arquivo fornecido atender ao pedido.

## Regras do domínio jurídico e da oferta

- Diferencie **primeira versão**, **revisão necessária** e **conferido pelo usuário**. Geração concluída não significa revisão concluída.
- Não prometer que a IA nunca erra, inventar depoimentos ou usar “melhores advogados” sem evidência. Curadoria, fontes e benefícios só devem ser apresentados como existentes quando demonstráveis.
- Não fixar preço, número de recursos, compatibilidade ou disponibilidade a partir do estudo antigo. Use a oferta vigente e os dados reais do produto.
- Informe a ferramenta de IA necessária e custos separados quando aplicável. Não representar pacote de instruções como plataforma autônoma se não for essa a entrega.
- Exemplos de documentos usam dados fictícios. O padrão de revisão não substitui a análise profissional.
- Domínio, endereço `contato@` e exemplos de e-mail são referências de marca; **não comprovam DNS, envio, recebimento ou publicação ativos**. Esta skill não configura nem publica serviços por iniciativa própria.

## Verificação para interfaces

Use os pares de cores definidos; recalcule contraste ao combiná-los com novos fundos. Meta: texto normal ≥4,5:1; texto grande e limites essenciais ≥3:1. Mantenha labels, foco visível e status textual.

Teste o fluxo implementado por teclado. Dialog deve conter e restaurar foco; abas devem respeitar seleção e navegação; busca deve distinguir vazio de erro. Respeite redução de movimento e evite overflow da página em celular. O relatório do design system original não certifica uma nova implementação.

Entregue o artefato ou código pedido, com uma descrição breve do que foi aplicado e das verificações efetivamente realizadas. Não gere guia, site ou pacote adicional quando o usuário pediu apenas copy ou uma alteração pontual.
