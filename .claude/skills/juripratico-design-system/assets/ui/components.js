/* JuriPrático IA 1.0.0. Optional progressive enhancement for this library.
   No network requests, remote analytics, or persistence of entered form data. */
(() => {
 'use strict';
 const $ = selector => document.querySelector(selector);
 const $$ = selector => [...document.querySelectorAll(selector)];
 let toastTimer;
 function notify(message) {
  const toast = $('#toast'); if (!toast) return;
  clearTimeout(toastTimer); toast.textContent = message; toast.classList.add('is-visible');
  toastTimer = setTimeout(() => { toast.classList.remove('is-visible'); toast.textContent = ''; }, 5000);
 }
 $$('[data-demo]').forEach(button => button.addEventListener('click', () => notify(button.dataset.demo)));
 $$('[data-copy]').forEach(button => button.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(button.dataset.copy); notify(`Código copiado: ${button.dataset.copy}`); }
  catch { notify(`Código da cor: ${button.dataset.copy}. Copie este valor manualmente.`); }
 }));
 $('#theme-toggle')?.addEventListener('click', event => {
  const button = event.currentTarget, dark = document.documentElement.dataset.theme !== 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  button.setAttribute('aria-pressed', String(dark)); button.querySelector('span').textContent = dark ? 'Tema claro' : 'Tema escuro';
 });
 $('#print-button')?.addEventListener('click', () => window.print());
 const sidebar = $('#sidebar'), menu = $('#menu-toggle');
 function closeMenu(returnFocus = false) { sidebar?.classList.remove('is-open'); menu?.setAttribute('aria-expanded', 'false'); if(returnFocus) menu?.focus(); }
 menu?.addEventListener('click', () => { const open = sidebar.classList.toggle('is-open'); menu.setAttribute('aria-expanded', String(open)); if (open) sidebar.querySelector('a')?.focus(); });
 $$('#sidebar a').forEach(link => link.addEventListener('click', () => closeMenu()));
 document.addEventListener('click', event => { if (sidebar?.classList.contains('is-open') && !sidebar.contains(event.target) && !menu?.contains(event.target)) closeMenu(); });
 document.addEventListener('keydown', event => {
  if(event.key !== 'Escape') return;
  if(sidebar?.classList.contains('is-open')) closeMenu(true);
  $$('.tooltip-wrap').forEach(el => el.dataset.dismissed = 'true');
 });
 $$('.tooltip-wrap').forEach(el => { el.addEventListener('mouseleave', () => delete el.dataset.dismissed); el.addEventListener('focusout', () => delete el.dataset.dismissed); });
 if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
   for (const entry of entries) if (entry.isIntersecting) {
    $$('#sidebar nav a').forEach(a => { if(a.hash === '#'+entry.target.id) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); });
   }
  }, { rootMargin: '-12% 0px -65% 0px', threshold: 0 });
  $$('.ds-section').forEach(el => observer.observe(el));
 }
 $('#load-demo')?.addEventListener('click', event => {
  const button = event.currentTarget; if(button.disabled) return;
  button.disabled = true; button.setAttribute('aria-busy','true'); button.textContent = 'Carregando exemplo…';
  notify('Carregamento de demonstração iniciado.');
  setTimeout(() => { button.disabled = false; button.removeAttribute('aria-busy'); button.textContent = 'Simular carregamento'; notify('Exemplo carregado.'); }, 1400);
 });
 $('#demo-form')?.addEventListener('submit', event => {
  event.preventDefault(); const email = $('#demo-email'), error = $('#email-error'), status = $('#form-status');
  if(!email.validity.valid) {
   email.setAttribute('aria-invalid','true'); error.hidden = false; error.textContent = email.validity.valueMissing ? 'Informe seu e-mail para continuar.' : 'Informe um e-mail válido, como voce@exemplo.com.'; status.textContent = ''; email.focus(); return;
  }
  email.removeAttribute('aria-invalid'); error.hidden = true; error.textContent = '';
  if(!$('#demo-review').checked) { status.textContent = 'Confirme que a primeira versão precisa de revisão.'; $('#demo-review').focus(); return; }
  status.textContent = 'Exemplo validado. Nenhuma informação foi enviada ou armazenada.';
 });
 $('#demo-email')?.addEventListener('input', event => { if(event.target.validity.valid){ event.target.removeAttribute('aria-invalid'); $('#email-error').hidden = true; $('#email-error').textContent = ''; } });
 $('#demo-switch')?.addEventListener('change', event => { $('#switch-status').textContent = event.target.checked ? 'Dicas ativadas.' : 'Dicas desativadas.'; });
 $$('[role=tablist]').forEach(list => {
  const tabs = [...list.querySelectorAll('[role=tab]')];
  function activate(tab) { for(const item of tabs){ const active = item === tab; item.setAttribute('aria-selected',String(active)); item.tabIndex = active ? 0 : -1; document.getElementById(item.getAttribute('aria-controls')).hidden = !active; } }
  tabs.forEach((tab,index) => { tab.addEventListener('click',()=>activate(tab)); tab.addEventListener('keydown',event=>{
   const key = event.key; if(!['ArrowLeft','ArrowRight','Home','End'].includes(key))return;
   event.preventDefault(); const target = key==='Home' ? tabs[0] : key==='End' ? tabs.at(-1) : tabs[(index+(key==='ArrowRight'?1:-1)+tabs.length)%tabs.length]; activate(target); target.focus();
  }); });
 });
 function wireDialog(id, triggers, cancel, confirm) {
  const dialog = $(id); if(!dialog)return; let opener;
  triggers.forEach(button => button.addEventListener('click',()=>{ opener=button; if(button.dataset.resourceTitle) $('#resource-title').textContent=button.dataset.resourceTitle; dialog.showModal(); }));
  $(cancel)?.addEventListener('click',()=>dialog.close());
  if(confirm) $(confirm)?.addEventListener('click',()=>{ dialog.close(); notify('Exclusão demonstrada. Nenhum documento real foi alterado.'); });
  dialog.addEventListener('keydown',event=>{
   if(event.key!=='Tab')return;
   const focusable=[...dialog.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex="0"]')].filter(el=>el.getClientRects().length);
   const first=focusable[0],last=focusable.at(-1);
   if(event.shiftKey && document.activeElement===first){event.preventDefault();last?.focus();}
   else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first?.focus();}
  });
  dialog.addEventListener('close',()=>opener?.focus());
 }
 wireDialog('#demo-dialog',$$('[data-open-dialog]'),'#dialog-cancel','#dialog-confirm');
 wireDialog('#resource-dialog',$$('[data-resource-title]'),'#resource-close');
 const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 function filterResources() {
  const query=normalize($('#resource-search').value.trim()); let count=0;
  $$('[data-resource]').forEach(item=>{ item.hidden=!normalize(item.dataset.resource).includes(query); if(!item.hidden)count++; });
  $('#resource-count').textContent=`${count} ${count===1?'recurso de exemplo':'recursos de exemplo'}`; $('#no-results').hidden=count>0;
 }
 $('#resource-search')?.addEventListener('input',filterResources);
 $('#clear-search')?.addEventListener('click',()=>{ $('#resource-search').value=''; filterResources(); $('#resource-search').focus(); });
 $$('#review-checks input').forEach(input=>input.addEventListener('change',()=>{
  const count=$$('#review-checks input:checked').length; $('#review-complete').disabled=count!==3;
  $('#review-status').textContent=`${count} de 3 itens conferidos.`;
 }));
 $('#review-complete')?.addEventListener('click',()=>{
  $('#review-status').textContent='Conferência do exemplo concluída pelo usuário. Não representa validação jurídica automática.';
  notify('Checklist de demonstração concluído.');
 });
})();
