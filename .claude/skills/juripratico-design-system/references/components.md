# Catálogo de componentes — JuriPrático IA 1.0.0

Referência executável: `assets/library.html`. Estilos: `assets/ui/components.css`. Contratos usam HTML nativo e podem ser implementados em qualquer framework. Não há pacote React nesta entrega.

## Contratos comuns

- Tema vem de `html[data-theme=dark]` ou claro por padrão.
- Tokens semânticos: `--jp-text`, `--jp-surface`, `--jp-action`, `--jp-border-control`, `--jp-focus` e variantes de feedback.
- Textos dinâmicos devem ser inseridos com `textContent` ou renderização escapada. Não injetar documentos de usuários como HTML não sanitizado.
- IDs de formulário, painel e diálogo devem ser únicos. Duas instâncias não podem reutilizar os IDs demonstrativos.
- Todos os componentes interativos: estado de foco visível. Hover não é requisito para descobrir uma ação essencial.
- Tamanhos padrão: 36/44/52 px; campos de texto a 16 px.
- Estado de carregamento e mensagens da biblioteca são simulações locais. Integrar estado real no produto.

## Matriz de cobertura

| Componente | Variantes | Estados | Teclado / semântica |
|---|---|---|---|
| Botão | primary, secondary, ghost, danger; sm/md/lg; icon | padrão, hover, pressionado, foco, disabled, loading | button; Enter/Espaço |
| Link | inline, ação com ícone | padrão, hover, foco, navegação | a href; Enter |
| Campo | text, email, search, textarea | vazio, preenchido, hover, foco, readonly, disabled, erro | label; edição nativa |
| Select | escolha única | padrão, foco, seleção | select nativo |
| Checkbox | confirmação | marcado, desmarcado, foco | input checkbox; Espaço |
| Radio | opção exclusiva | selecionado, não selecionado, foco | fieldset/legend; setas e Espaço |
| Switch | preferência binária | ligado, desligado, foco | checkbox role=switch; Espaço |
| Badge | neutral, info, success, warning, danger | conteúdo do estado | texto; não interativo |
| Alert | info, success, warning, danger | mensagem persistente | ícone decorativo e texto |
| Toast | confirmação ou informação breve | visível, oculto | role=status; não rouba foco |
| Card | padrão, destaque de oferta | conteúdo | article quando autônomo |
| Accordion | fechado/aberto | hover, foco, expandido | details/summary; Enter/Espaço |
| Tabs | horizontal | selecionado, não selecionado, foco | tablist/tab/tabpanel; setas/Home/End |
| Breadcrumb | hierarquia | link e página atual | nav nomeada, aria-current=page |
| Navegação lateral | desktop, recolhida | seção atual, aberto/fechado | nav; links e botão aria-expanded |
| Tabela | dados com cabeçalho | conteúdo, rolagem estreita | caption, th scope, região rolável |
| Busca de recursos | texto/área | todos, filtrado, sem resultados | search e role=status |
| Empty state | inicial, sem resultados | mensagem e ação | título, orientação, link/botão |
| Skeleton | linhas de conteúdo | carregando | role=status com nome |
| Progress | determinado | etapas concluídas | progress + label |
| Avatar | iniciais | identidade ilustrativa | nome acessível contextual |
| Tooltip | ajuda curta | hover, foco, dispensado | aria-describedby; Esc |
| Dialog | confirmação, detalhe | aberto/fechado | dialog.showModal; Esc; foco restaurado |
| Checklist de revisão | 3 itens | incompleto, pronto, conferido | checkboxes; ação bloqueada até conferência |

## 1. Botão

Anatomia: ícone opcional + rótulo de ação. Use botão para efeitos; link para navegação. Primary é a ação principal do grupo. Secondary apoia; ghost tem menor destaque; danger fica reservado a exclusão real.

```html
<button type="button" class="jp-btn jp-btn--primary">Copiar instrução</button>
<button type="button" class="jp-btn jp-btn--secondary jp-btn--sm">Ver exemplo</button>
<button type="button" class="jp-btn jp-btn--danger">Excluir rascunho</button>
<button type="button" class="jp-btn" disabled>Indisponível</button>
```

| Propriedade | Contrato |
|---|---|
| variant | classe `jp-btn--primary/secondary/ghost/danger` |
| size | `jp-btn--sm`, ausência=md, `jp-btn--lg` |
| iconOnly | `jp-btn--icon` + `aria-label` obrigatório |
| disabled | atributo nativo; não pode disparar ação |
| loading | `disabled`, `aria-busy=true`, rótulo de progresso e anúncio de status |

Hover usa action-hover. Pressionado desloca 1 px sem mexer no fluxo. Foco tem outline de 3 px. Loading mantém largura mínima na demonstração; no produto, reserve a largura original para não deslocar a ação. Não representar loading apenas com spinner. Não desabilitar uma ação sem explicar pré-requisito quando necessário.

## 2. Link

`.jp-link` usa sublinhado, cor accent e ícone opcional. `href` deve apontar a destino real. Links externos que abrem nova aba incluem `rel="noopener noreferrer"`; indicar nova aba quando a experiência exigir. Não usar `href="#"` para ação sem navegação.

## 3. Campo de formulário

Anatomia: label persistente → controle → ajuda → erro. Mensagem de erro descreve a correção e não apaga conteúdo. O input vazio é permitido até o envio quando a tarefa não exigir validação imediata.

```html
<div class="jp-field">
  <label for="email">E-mail de acesso <span>(obrigatório)</span></label>
  <input class="jp-input" id="email" type="email" autocomplete="email"
    required aria-describedby="email-help email-error">
  <small id="email-help">Use o e-mail da sua compra.</small>
  <small id="email-error" class="jp-error" hidden></small>
</div>
```

Erro: adicionar `aria-invalid=true`, exibir mensagem e focar primeiro campo inválido. Após correção válida, remover erro. `readonly` continua focável e selecionável; `disabled` não é editável nem participa de submissão. Não simular disabled apenas com cor. Textarea permite resize vertical. Select mantém a operação nativa do navegador.

## 4. Seleção

```html
<label class="jp-choice"><input type="checkbox"> Conferi os fatos</label>
<fieldset>
  <legend>Formato do material</legend>
  <label class="jp-choice"><input type="radio" name="format" value="guide"> Guia</label>
  <label class="jp-choice"><input type="radio" name="format" value="checklist"> Checklist</label>
</fieldset>
<label class="jp-choice"><input type="checkbox" role="switch"> Mostrar dicas</label>
```

Checkbox confirma item; radio escolhe uma opção; switch muda preferência imediata. Label é clicável, alvo mínimo 44 px de altura. Estado nunca depende de ícone sem nome. Para erro de grupo, associar ajuda/erro via `aria-describedby` no grupo e anunciar no envio.

## 5. Badge e alert

Badge é indicador, não botão. Escrever “Revisão necessária”, “Rascunho” ou “Conferido pelo usuário”. Não usar apenas ponto colorido. “Disponível” significa acesso ao material, não correção jurídica.

```html
<span class="jp-badge jp-badge--warning">Revisão necessária</span>
<div class="jp-alert jp-alert--info">
  <span><strong>Primeira versão</strong><br>Revise o conteúdo antes de utilizá-lo.</span>
</div>
```

Alert é persistente e tem informação acionável. Reservar `role=alert` para atualização urgente, não para todo card estático. As quatro variantes usam pares de cores contrastados. Não confundir verde com “garantia de resultado”.

## 6. Toast

`.jp-toast` com `role=status`, `aria-live=polite`, `aria-atomic=true`. Mostrar perto da borda inferior sem cobrir ação essencial. Na demo desaparece em 5 s; mensagens críticas permanecem também no contexto. Não exigir clique antes de expirar e não mover foco. Cancelar temporizador anterior ao exibir nova mensagem. Não usar toast como única apresentação de erro de formulário.

## 7. Card

`.jp-card` usa surface, border, radius-lg e padding 24 px. Título, descrição, metadado e ação compõem a anatomia. Não transformar todo card em botão quando houver múltiplas ações internas. Destaque de oferta utiliza borda accent, preservando texto e hierarquia. Em celular, padding 20 px.

## 8. Accordion

```html
<details class="jp-accordion">
  <summary>Preciso revisar os documentos?</summary>
  <p>Sim. Confira fatos, referências e adequação ao caso.</p>
</details>
```

Aberto/fechado nativos; Enter/Espaço no summary. Foco sempre visível. Permitir vários abertos quando o conteúdo exigir comparação. Informação decisiva para compra ou uso não deve ficar escondida exclusivamente em um accordion.

## 9. Tabs

```html
<div class="jp-tabs" role="tablist" aria-label="Tipo de recurso">
  <button role="tab" id="tab-a" aria-controls="panel-a" aria-selected="true" tabindex="0">Instruções</button>
  <button role="tab" id="tab-b" aria-controls="panel-b" aria-selected="false" tabindex="-1">Guias</button>
</div>
<div role="tabpanel" id="panel-a" aria-labelledby="tab-a" tabindex="0">Conteúdo</div>
<div role="tabpanel" id="panel-b" aria-labelledby="tab-b" tabindex="0" hidden>Outro conteúdo</div>
```

Uma aba no ciclo de Tab. Setas esquerda/direita mudam foco/seleção, Home/End vão aos extremos. Ativação automática apenas porque o painel está local e disponível imediatamente; para carregamento lento, usar ativação manual. Painel inativo usa hidden. IDs únicos, aria-controls e aria-labelledby cruzados.

## 10. Breadcrumb e navegação

Breadcrumb usa `nav aria-label`, links ancestrais e texto atual com `aria-current=page`; separadores decorativos. Sidebar da documentação marca seção com `aria-current=location`. Em celular, botão com `aria-controls`/`aria-expanded` abre navegação e foca primeiro link. Esc fecha e restaura foco. Navegação recolhida não participa do foco; não implementar apenas como tradução visual.

## 11. Tabela

`table` com caption; cabeçalhos de coluna e linha têm `scope`. Dados numéricos devem alinhar à direita quando houver colunas financeiras; datas são pt-BR. Status textual acompanha cor. No mobile, região rolável com tabindex=0 e nome acessível. Não esconder colunas essenciais sem alternativa. Paginação e ordenação só devem aparecer quando implementadas e necessárias.

## 12. Busca e card de recurso

Campo search com label, ícone decorativo e contagem com role=status. Busca local da demo ignora acentos e maiúsculas. Resultado contém título, área, condição e ação. Botão “Ver exemplo” inclui título no nome acessível. Em caso de zero resultados, ação “Limpar busca” restaura catálogo e foco no campo. Busca em servidor deve distinguir zero resultados de falha e cancelar respostas obsoletas.

## 13. Vazio, skeleton, progress e avatar

- Vazio: título descritivo, orientação curta e uma ação real. Distinguir primeiro uso, sem resultado e erro.
- Skeleton: `role=status` com nome “Carregando…”. Linhas decorativas não são focáveis. Não mostrar conteúdo como concluído antes da resposta.
- Progress: elemento nativo com `value`, `max`, label e texto “2 de 3 etapas”; percentuais apenas quando medidos. Para operação indeterminada, retirar value e explicar status.
- Avatar: iniciais de demonstração JP. Usar nome acessível só quando não houver nome adjacente equivalente. Em produção, nome completo pertence ao contexto autenticado.

## 14. Tooltip

Ajuda complementar curta associada por `aria-describedby`. Aparece em hover e foco, permite hover sobre o conteúdo e fecha com Esc. Não conter controles interativos. Não esconder informação obrigatória de formulário em tooltip. Em touch, manter informação essencial visível por outro meio.

## 15. Dialog

```html
<dialog class="jp-dialog" id="confirm-dialog" aria-labelledby="confirm-title" aria-describedby="confirm-description">
  <h2 id="confirm-title">Excluir este rascunho?</h2>
  <p id="confirm-description">Esta ação remove o rascunho salvo.</p>
  <button class="jp-btn jp-btn--secondary" autofocus>Cancelar</button>
  <button class="jp-btn jp-btn--danger">Excluir rascunho</button>
</dialog>
```

Abrir via `showModal()`, nunca só adicionar open. O navegador torna o fundo inerte e contém foco. Foco inicial na ação segura. Esc cancela. Fechar por cancelamento ou sucesso retorna foco ao acionador. Texto especifica consequência real. Não excluir ao abrir. Falha de operação mantém diálogo e informa como tentar novamente.

## 16. Checklist jurídico

Anatomia: primeira versão identificada, referências pendentes em destaque, checklist de fatos/fontes/pedidos, ação final e status. A demo libera “Concluir conferência” ao marcar os três itens. Desmarcar volta ao estado incompleto. Na aplicação, persistência precisa registrar quem conferiu, quando e qual versão; uma nova versão invalida a conferência anterior. A interface não substitui revisão profissional.

## Critérios de adoção

Antes de levar para produção, vincular operações reais, confirmar estados de erro e permissões, revisar textos e executar teclado, leitor de tela e contraste no contexto final. Testes da biblioteca original provam apenas os exemplos exercitados naquela versão; valide novamente a implementação atual.
