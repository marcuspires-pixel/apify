# Avatares JuriPrático IA — WhatsApp e Instagram

Arquivos gerados a partir do símbolo oficial do design system
(`.claude/skills/juripratico-design-system/assets/ui/assets/symbol.svg`),
seguindo a regra de aplicação "Avatar: símbolo central em azul, sem texto pequeno.
Não colocar assinatura horizontal em recorte circular"
(`references/brand-guidelines.md`, seção 6).

## Qual usar

| Arquivo | Uso |
|---|---|
| `avatar-juripratico-inverso-1080.png` | **Recomendado.** Instagram (perfil e WhatsApp Business no feed). Símbolo branco sobre azul profundo: o disco escuro destaca a marca em qualquer tema. |
| `avatar-juripratico-inverso-640.png` | WhatsApp (o app reduz a foto para ~640 px). |
| `avatar-juripratico-primary-1080.png` | Alternativa clara: símbolo azul sobre canvas `#F7F8FA`. Use quando o perfil aparecer sobre fundos escuros. |
| `avatar-juripratico-primary-640.png` | Versão clara para WhatsApp. |
| `avatar-juripratico-inverso.svg` / `avatar-juripratico-primary.svg` | Fontes vetoriais, caso precise de outro tamanho. |

Ambas as plataformas cortam a imagem em círculo: envie o PNG quadrado inteiro,
sem recortar antes. O Instagram exibe a 320 px e o WhatsApp a ~192 px, por isso
os arquivos maiores evitam perda ao reprocessar.

## Especificações

- Quadrado full-bleed, sem transparência (evita cantos pretos em alguns clientes).
- Símbolo com 51,8% do lado da imagem, centralizado pelo bounding box real do glifo.
- Folga de ~14% entre o símbolo e a borda do recorte circular — acima do mínimo
  de ¼ da altura do símbolo exigido pelas diretrizes.
- Cores: azul profundo `#17324D`, canvas `#F7F8FA`, branco `#FFFFFF`.

## Regenerar

`render.js` reproduz os PNGs a partir dos retângulos do símbolo, sem dependências
externas: `node render.js` dentro desta pasta.
