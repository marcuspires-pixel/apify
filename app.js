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
  var depos = doc.getElementById('depoimentos');
  if (depos) { depos.hidden = !DEPOIMENTOS_PRONTOS; }

  /* ---------- 10. Ano do rodapé ---------- */
  var ano = doc.getElementById('ano');
  if (ano) { ano.textContent = new Date().getFullYear(); }
})();
