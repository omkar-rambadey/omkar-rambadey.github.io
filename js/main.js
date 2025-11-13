// main.js: theme toggle and minor utilities
(function(){
  const yearEls = [document.getElementById('year'),document.getElementById('year-2'),document.getElementById('year-3'),document.getElementById('year-4'),document.getElementById('year-5')];
  yearEls.forEach(el=>{ if(el) el.textContent = (new Date()).getFullYear(); });

  const themeKey = 'site-theme';
  function applyTheme(t){ document.documentElement.setAttribute('data-theme', t); }
  function loadTheme(){ const t = localStorage.getItem(themeKey) || 'light'; applyTheme(t);} 
  function toggleTheme(){ const cur = document.documentElement.getAttribute('data-theme')||'light'; const next = cur==='light'?'dark':'light'; applyTheme(next); localStorage.setItem(themeKey,next); }
  loadTheme();

  document.querySelectorAll('[id^=theme-toggle]').forEach(btn=> btn.addEventListener('click', toggleTheme));
})();
