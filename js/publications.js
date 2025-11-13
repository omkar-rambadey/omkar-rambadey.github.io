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
