# omkar-rambadey.github.io

# README

This document contains a complete scaffold for a personal academic website (HTML + CSS + JS) structured for GitHub Pages. Copy the files into your `abc-def.github.io` repository with the same folder structure.

---

## FILE: index.html
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Omkar Rambadey — Postdoc</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <nav class="nav">
    <a class="brand" href="/">Omkar Rambadey</a>
    <div class="nav-links">
      <a href="/research.html">Research</a>
      <a href="/publications.html">Publications</a>
      <a href="/cv.html">CV</a>
      <a href="/contact.html">Contact</a>
      <button id="theme-toggle" aria-label="Toggle light/dark">🌓</button>
    </div>
  </nav>

  <main class="container">
    <section class="hero">
      <img src="/images/profile.jpg" alt="Profile" class="profile">
      <h1 id="name">Omkar Rambadey</h1>
      <p id="position">Postdoc at Max Planck Institute</p>
      <p class="bio">I work on spectroscopic and time-resolved X-ray experiments exploring coherence and ultrafast dynamics. This site hosts publications, CV and notes.</p>
      <p class="links"><a id="scholar-link" href="https://scholar.google.com/citations?user=iMOD96MAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a> · <a href="https://github.com/abc-def" target="_blank" rel="noopener">GitHub</a></p>
    </section>

    <section class="features">
      <div class="card">
        <h3>Research</h3>
        <p>Short description of research interests & keywords: coherence, ultrafast X-rays, spectroscopy, time-resolved scattering.</p>
        <p><a href="/research.html">More →</a></p>
      </div>
      <div class="card">
        <h3>Publications</h3>
        <p>Publications are dynamically generated from a BibTeX file.</p>
        <p><a href="/publications.html">View publications →</a></p>
      </div>
      <div class="card">
        <h3>CV</h3>
        <p>Download or view the academic CV.</p>
        <p><a href="/cv.html">CV →</a></p>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>© <span id="year"></span> Omkar Rambadey — Postdoc, Max Planck Institute</p>
  </footer>

  <script src="/js/main.js"></script>
</body>
</html>
```

---

## FILE: research.html
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Research — Omkar Rambadey</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <nav class="nav">
    <a class="brand" href="/">Omkar Rambadey</a>
    <div class="nav-links">
      <a href="/research.html">Research</a>
      <a href="/publications.html">Publications</a>
      <a href="/cv.html">CV</a>
      <a href="/contact.html">Contact</a>
      <button id="theme-toggle-2" aria-label="Toggle light/dark">🌓</button>
    </div>
  </nav>

  <main class="container">
    <h1>Research</h1>
    <p>Overview of research interests and recent projects.</p>

    <article class="project">
      <h2>Coherence and ultrafast X-ray spectroscopy</h2>
      <p>Short description of the project, key techniques, and representative results. Mention instruments, facilities, and collaborators if needed.</p>
    </article>

    <article class="project">
      <h2>Time-resolved scattering & dynamics</h2>
      <p>Short description and objectives.</p>
    </article>

  </main>

  <footer class="footer">
    <p>© <span id="year-2"></span> Omkar Rambadey</p>
  </footer>

  <script src="/js/main.js"></script>
</body>
</html>
```

---

## FILE: publications.html
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Publications — Omkar Rambadey</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <nav class="nav">
    <a class="brand" href="/">Omkar Rambadey</a>
    <div class="nav-links">
      <a href="/research.html">Research</a>
      <a href="/publications.html">Publications</a>
      <a href="/cv.html">CV</a>
      <a href="/contact.html">Contact</a>
      <button id="theme-toggle-3" aria-label="Toggle light/dark">🌓</button>
    </div>
  </nav>

  <main class="container">
    <h1>Publications</h1>
    <p>Below is a dynamically generated list from the `data/publications.bib` file.</p>

    <div id="pub-list"></div>
  </main>

  <footer class="footer">
    <p>© <span id="year-3"></span> Omkar Rambadey</p>
  </footer>

  <!-- bibtex parser from CDN -->
  <script src="https://cdn.jsdelivr.net/gh/orcid/bibtexParseJs@master/bibtexParse.js"></script>
  <script src="/js/publications.js"></script>
  <script src="/js/main.js"></script>
</body>
</html>
```

---

## FILE: cv.html
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CV — Omkar Rambadey</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <nav class="nav">
    <a class="brand" href="/">Omkar Rambadey</a>
    <div class="nav-links">
      <a href="/research.html">Research</a>
      <a href="/publications.html">Publications</a>
      <a href="/cv.html">CV</a>
      <a href="/contact.html">Contact</a>
      <button id="theme-toggle-4" aria-label="Toggle light/dark">🌓</button>
    </div>
  </nav>

  <main class="container">
    <h1>Curriculum Vitae</h1>
    <p><a href="/docs/cv.pdf" target="_blank" rel="noopener">Download CV (PDF)</a></p>
    <iframe src="/docs/cv.pdf" title="CV" style="width:100%;height:80vh;border:1px solid var(--muted);"></iframe>
  </main>

  <footer class="footer">
    <p>© <span id="year-4"></span> Omkar Rambadey</p>
  </footer>

  <script src="/js/main.js"></script>
</body>
</html>
```

---

## FILE: contact.html
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Contact — Omkar Rambadey</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <nav class="nav">
    <a class="brand" href="/">Omkar Rambadey</a>
    <div class="nav-links">
      <a href="/research.html">Research</a>
      <a href="/publications.html">Publications</a>
      <a href="/cv.html">CV</a>
      <a href="/contact.html">Contact</a>
      <button id="theme-toggle-5" aria-label="Toggle light/dark">🌓</button>
    </div>
  </nav>

  <main class="container">
    <h1>Contact</h1>
    <p>Email: <a href="mailto:your.email@institute.edu">your.email@institute.edu</a></p>
    <p>Office: Max Planck Institute</p>
    <p>Links: <a href="https://scholar.google.com/citations?user=iMOD96MAAAAJ&hl=en" target="_blank">Google Scholar</a> · <a href="https://github.com/abc-def" target="_blank">GitHub</a></p>
  </main>

  <footer class="footer">
    <p>© <span id="year-5"></span> Omkar Rambadey</p>
  </footer>

  <script src="/js/main.js"></script>
</body>
</html>
```

---

## FILE: css/style.css
```css
:root{
  --bg:#ffffff;
  --text:#121212;
  --muted:#6b7280;
  --card:#f8fafc;
}

[data-theme='dark']{
  --bg:#0b1220;
  --text:#e6eef8;
  --muted:#9aa6b2;
  --card:#081223;
}

*{box-sizing:border-box}
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial; margin:0; background:var(--bg); color:var(--text);}
.nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 1.5rem;border-bottom:1px solid var(--muted);}
.nav .brand{font-weight:700;text-decoration:none;color:var(--text)}
.nav-links a{margin:0 0.5rem;text-decoration:none;color:var(--muted)}
.container{max-width:900px;margin:2rem auto;padding:0 1rem}
.hero{display:flex;flex-direction:column;align-items:center;text-align:center}
.profile{width:140px;height:140px;border-radius:50%;object-fit:cover;}
.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-top:2rem}
.card{background:var(--card);padding:1rem;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.04)}
.footer{text-align:center;padding:2rem 0;color:var(--muted)}
#pub-list .pub{margin-bottom:1.2rem;padding-bottom:0.8rem;border-bottom:1px dashed var(--muted)}
.pub .title{font-weight:600}
a{color:inherit}
@media (max-width:600px){.nav{flex-direction:column;align-items:flex-start}.nav-links{margin-top:0.5rem}}
```

---

## FILE: js/main.js
```javascript
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
```

---

## FILE: js/publications.js
```javascript
// publications.js
// Fetch data/publications.bib and render it using bibtexParse
(async function(){
  const el = document.getElementById('pub-list');
  if(!el) return;
  try{
    const r = await fetch('/data/publications.bib');
    const text = await r.text();
    const entries = bibtexParse.toJSON(text);
    // entries is array of {citationKey, entryType, entryTags}
    // sort by year desc
    entries.sort((a,b)=>{ const ya = +(a.entryTags.year||0); const yb = +(b.entryTags.year||0); return yb-ya; });
    entries.forEach(e=>{
      const tags = e.entryTags;
      const div = document.createElement('div'); div.className='pub';
      const title = document.createElement('div'); title.className='title'; title.innerHTML = tags.title?tags.title.replace(/[{}]/g,''):'(no title)';
      const meta = document.createElement('div'); meta.className='meta';
      const authors = tags.author?tags.author.replace(/ and /g, ', '):'';
      const journal = tags.journal||tags.booktitle||'';
      const year = tags.year||'';
      const doi = tags.doi? ('https://doi.org/'+tags.doi) : (tags.url||'');
      meta.innerHTML = `${authors} <span class="muted">${journal} ${year}</span>`;
      div.appendChild(title); div.appendChild(meta);
      if(doi){
        const a = document.createElement('a'); a.href = doi; a.target='_blank'; a.rel='noopener'; a.textContent = 'View DOI'; a.style.marginLeft='0.4rem';
        div.appendChild(a);
      }
      el.appendChild(div);
    });
  }catch(err){ console.error(err); el.innerHTML = '<p>Unable to load publications. Make sure <code>/data/publications.bib</code> exists.</p>' }
})();
```

---

## FILE: data/profile.json
```json
{
  "name": "Omkar Rambadey",
  "position": "Postdoc",
  "affiliation": "Max Planck Institute",
  "scholar": "https://scholar.google.com/citations?user=iMOD96MAAAAJ&hl=en"
}
```

---

## FILE: data/publications.bib (example)
```bibtex
@article{example2020,
  title={Example study of coherence},
  author={Rambadey, Omkar and Example, A.},
  journal={Journal of Ultrafast Science},
  year={2020},
  volume={12},
  pages={1--10},
  doi={10.1000/example}
}
```

---

## FILE: docs/cv.pdf

(Place your real PDF at `docs/cv.pdf`.)

---

## FILE: images/profile.jpg

(Place your profile photo at `images/profile.jpg`.)

---

## Quick deployment steps
1. Create repository: `abc-def.github.io` on GitHub.
2. Clone locally: `git clone https://github.com/abc-def/abc-def.github.io` and `cd` into it.
3. Copy files from this scaffold into the repo (keep folders as-is).
4. Add your real `data/publications.bib` (replace the example), `docs/cv.pdf` and `images/profile.jpg`.
5. Commit and push:
   ```bash
   git add .
   git commit -m "Initial website"
   git push origin main
   ```
6. Enable Pages in repo Settings → Pages (branch `main` and folder `/`).
7. Visit `https://abc-def.github.io`.

---

## Notes and extensions
- The publications parser uses `bibtexParse.js` (client-side) — this is simple and works for modest-size BibTeX files. If your .bib is huge (>1000 entries) you might prefer to pre-process into JSON.
- To migrate to Jekyll later, keep the content organized and convert `.html` into layouts/includes and move bibliographic rendering to a generator step (or keep client-side parsing).
- If you want to show PDF downloads for items, add a `file` field to the bib and host PDFs in `/docs/papers/` and link accordingly.

Happy to: (a) adapt styles to your preference (more minimal, or academic CV-like), (b) add lab-folder template (`/lab/`) when you’re ready, (c) implement grouping/filters for publications (by year/topic).

---

