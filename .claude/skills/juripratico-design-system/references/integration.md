# Integração do design system

Os caminhos desta referência partem da **raiz da skill**. Resolva essa raiz pela localização do `SKILL.md`, sem presumir um diretório de usuário ou um repositório específico.

## Arquivos prontos para uso

| Caminho | Uso |
|---|---|
| `assets/ui/tokens.css` | Variáveis `--jp-*` de cor, espaço, tipografia, movimento e elevação |
| `assets/ui/tokens.json` | Primitivos e papéis semânticos para intercâmbio |
| `assets/ui/components.css` | Componentes HTML com estados |
| `assets/ui/components.js` | Exemplos progressivos da biblioteca, sem dependências |
| `assets/ui/assets/logo-primary.svg` | Assinatura azul |
| `assets/ui/assets/logo-inverse.svg` | Assinatura branca para fundo escuro |
| `assets/ui/assets/logo-mono.svg` | Versão monocromática grafite |
| `assets/ui/assets/symbol.svg` | Símbolo em grade 64 × 64 |
| `assets/ui/assets/favicon.svg` | Favicon |
| `assets/ui/assets/icon-*.svg` | 16 ícones próprios |
| `assets/ui/assets/manrope.ttf` | Fonte variável local |
| `assets/ui/assets/OFL-Manrope.txt` | Licença original da fonte; preservar ao redistribuir |
| `assets/library.html` | Referência visual offline, com exemplos de interação |
| `assets/preview-desktop.png` | Inspeção rápida de composição, cor e hierarquia |

Copie apenas os arquivos necessários para o projeto. Se copiar o CSS sem adaptação, preserve `assets/manrope.ttf` relativo a `components.css`. A biblioteca HTML é autônoma para apresentação, mas seus downloads usam os arquivos adjacentes. Não cole esse HTML de demonstração como aplicação de produção.

## HTML e CSS

Copie `assets/ui/` para uma pasta de recursos do projeto. Carregue tokens antes dos componentes:

```html
<link rel="stylesheet" href="/design-system/tokens.css">
<link rel="stylesheet" href="/design-system/components.css">

<button type="button" class="jp-btn jp-btn--primary">Copiar instrução</button>
```

O CSS inclui estilos de base para body, títulos, tabelas e controles. Inspecione o reset do projeto antes de carregá-lo globalmente. Em uma aplicação existente, adapte os seletores globais ou reutilize somente os estilos relevantes para evitar regressões.

No CSS de novos componentes, use papéis semânticos:

```css
.material {
  color: var(--jp-text);
  background: var(--jp-surface);
  border: 1px solid var(--jp-border);
  padding: var(--jp-space-6);
  border-radius: var(--jp-radius-lg);
}
```

Tema claro é padrão; `data-theme="dark"` no `html` ativa overrides. Decida persistência e preferência do sistema conforme o projeto. A biblioteca não persiste dados de formulário nem preferências.

## React, Vue ou outra stack

Mantenha o framework e os componentes semânticos já adotados. Transfira os contratos de foco, estado e ARIA da referência para o estado do framework. `components.js` é demonstração, não pacote de componentes: não carregue esse script junto de controles gerenciados por React/Vue.

Cada instância precisa de IDs únicos. Use o diálogo acessível existente no projeto se ele cumprir os contratos; não introduza biblioteca nova por preferência estética.

Ícones decorativos ao lado de texto: `aria-hidden="true"`. Botões somente com ícone: nome acessível com `aria-label`. SVGs da assinatura incluem a fonte; algumas ferramentas vetoriais podem exigir instalação do TTF. Preserve o original editável se converter texto em curvas para produção gráfica.

## Tokens para ferramentas de design

JSON usa `$type`/`$value` em cores e dimensões. Referências seguem `{color.primitive.nome}` e overrides estão em `themes.dark`. Tipografia, motion e elevation podem exigir adaptação no importador. Não prometer compatibilidade automática com todos os plugins Figma/DTCG. CSS é a implementação executável dos valores.

## Comportamentos de referência

A biblioteca demonstra botões, campos, select, checkbox, radio, switch, badges, alertas, toast, cards, accordion, tabs, breadcrumb, navegação lateral, tabela, busca, vazio, skeleton, progresso, avatar, tooltip, diálogo e checklist de revisão.

Exemplos não enviam dados, não processam pagamento e não chamam IA. Mensagens de demonstração precisam ser substituídas por estado real no produto. Não marcar sucesso apenas porque houve clique. O checklist “conferido pelo usuário” depende de ação explícita e, em produto, deve estar ligado à versão do documento.

## Verificação proporcional

- Copy: verificar nome, linguagem e promessas contra a oferta real.
- Peça visual: abrir o arquivo final e conferir legibilidade, margens, logo e contraste.
- Componente: exercitar variantes alteradas, foco e teclado; recalcular novos pares de contraste.
- Página: verificar desktop/mobile, estados, navegação e ausência de overflow. Verificar integração real se ela faz parte da tarefa.

A biblioteca original passou em verificações automáticas de contraste, comportamento e acessibilidade em Chromium. Isso é contexto da referência, não validação do novo artefato. Leitor de tela e navegadores adicionais devem ser verificados quando fizerem parte dos critérios do produto.
