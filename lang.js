
(function(){
  const key = 'agent-skills-lang';
  const defaultLang = 'en';
  function setLang(lang){
    document.documentElement.lang = lang === 'tw' ? 'zh-Hant-TW' : 'en';
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
    });
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
      btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
    });
    try { localStorage.setItem(key, lang); } catch(e) {}
  }
  const initial = (() => { try { return localStorage.getItem(key) || defaultLang; } catch(e) { return defaultLang; } })();
  window.setAgentSkillsLanguage = setLang;
  document.addEventListener('click', evt => {
    const btn = evt.target.closest('[data-set-lang]');
    if (btn) setLang(btn.getAttribute('data-set-lang'));
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setLang(initial));
  else setLang(initial);
})();
