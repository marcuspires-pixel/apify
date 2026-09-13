/* ============================================================
   JuriPrático IA — Landing Page
   ============================================================ */
'use strict';

/* ---------- CONSTANTES DE CONFIGURAÇÃO ----------
   Mexa só aqui. Nada abaixo precisa ser editado para publicar. */

const CHECKOUT_START       = "#";     // trocar pela URL real do checkout do Start (R$27)
const CHECKOUT_PRO         = "#";     // trocar pela URL real do checkout do PRO (R$67)
const DEPOIMENTOS_PRONTOS  = false;   // só true com depoimentos reais e autorizados por escrito
const AREA_PADRAO          = null;    // null = ordem padrão dos cards

/* Os seis depoimentos. Só entram na página pessoas reais, com autorização de uso do
   depoimento e da imagem assinada — ver DEPOIMENTOS.md. A foto é opcional: sem ela o
   avatar usa as iniciais do nome. Nunca use foto de banco de imagens ou da internet
   para representar um cliente.

   { texto:  "no máximo 220 caracteres, na palavra da pessoa",
     nome:   "Nome Completo",
     oab:    "OAB/SP 123.456",
     area:   "trabalhista" | "previdenciario" | "familia" | "civel",
     cidade: "São Paulo/SP",
     foto:   "depo-1.jpg"        // opcional
   }

   A seção só aparece com DEPOIMENTOS_PRONTOS = true E os seis preenchidos. */
const DEPOIMENTOS = [];

/* ------------------------------------------------------------ */

(function () {
  var doc = document;
  var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');
  function reduzido() { return semMovimento.matches; }

  /* ---------- 1. Área vinda da URL (?a=) ---------- */
  var AREAS_VALIDAS = ['trabalhista', 'previdenciario', 'familia', 'civel'];
  var area = null;

  try {
    var p = new URLSearchParams(window.location.search).get('a');
    if (p) { p = p.trim().toLowerCase(); }
    if (p && AREAS_VALIDAS.indexOf(p) !== -1) { area = p; }
  } catch (e) { /* URL sem suporte a URLSearchParams: mantém ordem padrão */ }

  if (!area && AREA_PADRAO && AREAS_VALIDAS.indexOf(AREA_PADRAO) !== -1) {
    area = AREA_PADRAO;
  }

  if (area) {
    var grade = doc.getElementById('areas');
    var card = grade && grade.querySelector('[data-area="' + area + '"]');
    if (card) {
      grade.insertBefore(card, grade.firstElementChild);
      card.classList.add('is-sua');
      if (!card.querySelector('.area-selo')) {
        var selo = doc.createElement('span');
        selo.className = 'area-selo';
        selo.textContent = 'Sua área';
        card.insertBefore(selo, card.firstChild);
      }
    }
  }

  /* ---------- 2. Checkout ---------- */
  function comArea(url) {
    if (!area) { return url; }
    return url + (url.indexOf('?') !== -1 ? '&' : '?') + 'area=' + encodeURIComponent(area);
  }

  var destinos = { start: comArea(CHECKOUT_START), pro: comArea(CHECKOUT_PRO) };

  Array.prototype.forEach.call(doc.querySelectorAll('[data-checkout]'), function (el) {
    var plano = el.getAttribute('data-checkout');
    if (destinos[plano]) {
      el.setAttribute('href', destinos[plano]);
      if (area) { el.setAttribute('data-area', area); }
    }
  });

  /* ---------- 3. Header translúcido a partir de 600px ---------- */
  var hdr = doc.getElementById('hdr');
  var mcta = doc.getElementById('mcta');
  var hero = doc.querySelector('.hero');
  var limiteMcta = hero ? Math.max(hero.offsetHeight - 120, 400) : 600;
  var travado = false, mctaAtiva = false, agendado = false;

  function aoRolar() {
    var y = window.pageYOffset || doc.documentElement.scrollTop;

    if (hdr) {
      var deve = y > 600;
      if (deve !== travado) { travado = deve; hdr.classList.toggle('is-stuck', deve); }
    }
    if (mcta) {
      var mostrar = y > limiteMcta;
      if (mostrar !== mctaAtiva) { mctaAtiva = mostrar; mcta.classList.toggle('is-on', mostrar); }
    }
    agendado = false;
  }

  window.addEventListener('scroll', function () {
    if (!agendado) { agendado = true; window.requestAnimationFrame(aoRolar); }
  }, { passive: true });

  window.addEventListener('resize', function () {
    if (hero) { limiteMcta = Math.max(hero.offsetHeight - 120, 400); }
  }, { passive: true });

  aoRolar();

  /* ---------- 4. Rolagem suave com folga para o header ---------- */
  doc.addEventListener('click', function (ev) {
    var link = ev.target.closest ? ev.target.closest('a[href^="#"]') : null;
    if (!link) { return; }
    var id = link.getAttribute('href');
    if (!id || id === '#' || id.charAt(0) !== '#') { return; }
    var alvo = doc.getElementById(id.slice(1));
    if (!alvo) { return; }
    ev.preventDefault();
    var topo = alvo.getBoundingClientRect().top + (window.pageYOffset || 0) - 84;
    window.scrollTo({ top: topo < 0 ? 0 : topo, behavior: reduzido() ? 'auto' : 'smooth' });
    if (history.replaceState) { history.replaceState(null, '', id); }
  });

  /* ---------- 5. Acordeões (departamentos e FAQ) ---------- */
  Array.prototype.forEach.call(doc.querySelectorAll('.acc-btn'), function (btn) {
    btn.addEventListener('click', function () {
      var painel = doc.getElementById(btn.getAttribute('aria-controls'));
      if (!painel) { return; }
      var aberto = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', aberto ? 'false' : 'true');
      painel.hidden = aberto;
    });
  });

  /* ---------- 6. Revelação no scroll ---------- */
  var reveals = doc.querySelectorAll('.rv');

  if (reduzido() || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('is-in'); });
  } else {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); obs.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(reveals, function (el) { obs.observe(el); });
  }

  /* ---------- 7. Contagem animada (uma vez só) ---------- */
  function formata(n, sep) {
    return sep ? n.toLocaleString('pt-BR') : String(n);
  }

  function anima(el) {
    var alvo = parseInt(el.getAttribute('data-count'), 10);
    var sep = el.getAttribute('data-sep') === 'true';
    if (isNaN(alvo)) { return; }
    var dur = 1100, ini = null;
    function passo(ts) {
      if (ini === null) { ini = ts; }
      var t = Math.min((ts - ini) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = formata(Math.round(alvo * eased), sep);
      if (t < 1) { window.requestAnimationFrame(passo); }
    }
    el.textContent = formata(0, sep);
    window.requestAnimationFrame(passo);
  }

  var blocoNum = doc.getElementById('contadores');
  if (blocoNum && !reduzido() && 'IntersectionObserver' in window) {
    var obsNum = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) { return; }
        obsNum.disconnect();
        Array.prototype.forEach.call(blocoNum.querySelectorAll('[data-count]'), anima);
      });
    }, { threshold: 0.4 });
    obsNum.observe(blocoNum);
  }

  /* ---------- 8. Efeito de digitação (uma linha do hero) ---------- */
  var linha = doc.getElementById('hero-typing');
  if (linha && !reduzido()) {
    var texto = linha.textContent;
    var i = 0;
    linha.textContent = '';
    (function digita() {
      linha.textContent = texto.slice(0, ++i);
      if (i < texto.length) { window.setTimeout(digita, 26); }
    })();
  }

  /* ---------- 9. Depoimentos: só entram quando forem reais ---------- */
  var AREAS_ROTULO = {
    trabalhista:    { rotulo: 'Trabalhista',    cor: '#27E5D4' },
    previdenciario: { rotulo: 'Previdenciário', cor: '#5B8CFF' },
    familia:        { rotulo: 'Família',        cor: '#B06CF0' },
    civel:          { rotulo: 'Cível',          cor: '#3ED598' }
  };

  function iniciais(nome) {
    var partes = String(nome).trim().split(/\s+/);
    var a = partes[0] ? partes[0].charAt(0) : '';
    var b = partes.length > 1 ? partes[partes.length - 1].charAt(0) : '';
    return (a + b).toUpperCase();
  }

  function depoValido(d) {
    return !!(d && d.texto && d.nome && d.oab && d.cidade && AREAS_ROTULO[d.area]);
  }

  function cardDepoimento(d) {
    var info = AREAS_ROTULO[d.area];
    var art = doc.createElement('article');
    art.className = 'depo';
    art.style.setProperty('--ac', info.cor);

    var texto = doc.createElement('p');
    texto.className = 'depo-texto';
    texto.textContent = d.texto;
    art.appendChild(texto);

    var rodape = doc.createElement('footer');
    rodape.className = 'depo-autor';

    var avatar = doc.createElement('div');
    avatar.className = 'depo-avatar';
    if (d.foto) {
      var img = doc.createElement('img');
      img.src = d.foto;
      img.alt = 'Foto de ' + d.nome;
      img.width = 48; img.height = 48;
      img.loading = 'lazy';
      avatar.appendChild(img);
    } else {
      avatar.textContent = iniciais(d.nome);
    }
    rodape.appendChild(avatar);

    var bloco = doc.createElement('div');
    var nome = doc.createElement('strong');
    nome.textContent = d.nome;
    var linha = doc.createElement('span');
    linha.textContent = d.oab + ' · ' + info.rotulo + ' · ' + d.cidade;
    bloco.appendChild(nome);
    bloco.appendChild(linha);
    rodape.appendChild(bloco);

    var chip = doc.createElement('span');
    chip.className = 'depo-area';
    chip.textContent = info.rotulo;
    rodape.appendChild(chip);

    art.appendChild(rodape);
    return art;
  }

  var depos = doc.getElementById('depoimentos');
  if (depos) {
    var lista = Array.isArray(DEPOIMENTOS) ? DEPOIMENTOS : [];
    var completos = lista.length >= 6 && lista.slice(0, 6).every(depoValido);

    if (DEPOIMENTOS_PRONTOS && completos) {
      var grade = depos.querySelector('.depos');
      grade.textContent = '';
      lista.slice(0, 6).forEach(function (d) { grade.appendChild(cardDepoimento(d)); });
      depos.hidden = false;
    } else {
      depos.hidden = true;
      if (DEPOIMENTOS_PRONTOS && !completos) {
        // trava de segurança: melhor a seção sumir do que ir ao ar pela metade
        console.warn('JuriPrático IA: seção de depoimentos mantida oculta — são necessários ' +
          '6 depoimentos completos (texto, nome, oab, area, cidade) na constante DEPOIMENTOS.');
      }
    }
  }

  /* ---------- 10. Ano do rodapé ---------- */
  var ano = doc.getElementById('ano');
  if (ano) { ano.textContent = new Date().getFullYear(); }
})();
