(async function() {
  const el = document.getElementById('pub-list');
  if (!el) return;

  // 1. Move helper functions OUTSIDE the loop
  function formatAuthorNames(authorString) {
    if (!authorString) return "";
    return authorString.split(' and ').map(author => {
      if (author.includes(',')) {
        const parts = author.split(',');
        return `${parts[1].trim()} ${parts[0].trim()}`;
      }
      return author.trim();
    }).join(', ');
  }

  try {
    const r = await fetch('./data/publications.bib');
    const text = await r.text();
    const entries = bibtexParse.toJSON(text);

    entries.sort((a, b) => {
      const ya = +(a.entryTags.year || 0);
      const yb = +(b.entryTags.year || 0);
      return yb - ya;
    });

    entries.forEach((e, index) => {
      const tags = e.entryTags;
      
      // --- 2. TITLE PROCESSING (ORDER MATTERS) ---
      let rawTitle = tags.title || '(no title)';
      
      // Keep a clean version for the BibTeX "Cite" box (no HTML tags)
      const citeTitle = rawTitle.replace(/[{}]/g, '');

      // First: Replace the LaTeX commands while braces still exist
      let displayTitle = rawTitle
        .replace(/\\textsubscript\{([^}]*)\}/g, '<sub>$1</sub>')
        .replace(/\\textsuperscript\{([^}]*)\}/g, '<sup>$1</sup>')
        .replace(/_\{([^}]*)\}/g, '<sub>$1</sub>')
        .replace(/\^\{([^}]*)\}/g, '<sup>$1</sup>');

      // Second: NOW remove any remaining LaTeX curly braces (like {BaTiO})
      displayTitle = displayTitle.replace(/[{}]/g, '');
      
      // --- 3. AUTHOR PROCESSING ---
      let authors = formatAuthorNames(tags.author || '');
      authors = authors.replace(/Omkar Rambadey|Omkar V. Rambadey|O. V. Rambadey/g, '<span class="me-author">$&</span>');

      const journal = tags.journal || tags.booktitle || '';
      const year = tags.year || '';
      const doi = tags.doi ? ('https://doi.org/' + tags.doi) : (tags.url || '');

      // --- 4. BIBTEX STRING (FOR CITE BOX) ---
      // We use the citeTitle here so the BibTeX snippet doesn't have <sub> tags in it
      const bibtexString = `@article{${e.citationKey},
  title={${citeTitle}},
  author={${tags.author}},
  journal={${tags.journal || ''}},
  volume={${tags.volume || ''}},
  number={${tags.number || ''}},
  pages={${tags.pages || ''}},
  year={${year}},
  doi={${tags.doi || ''}}
}`;

      // Check if first author (Omkar)
      const isFirstAuthor = authors.startsWith('<span class="me-author">Omkar'); // Update the innerHTML to include the badg
      const firstAuthorBadge = isFirstAuthor ? `<span class="badge badge-first">First Author</span>` : '';
      const pubDiv = document.createElement('div');
      pubDiv.className = 'pub';
        // replace this title like to show the first author badge
        // <div class="title">${displayTitle} ${firstAuthorBadge}</div>
      pubDiv.innerHTML = `
        <div class="title">${displayTitle}</div>
        <div class="meta">${authors} <br> <span class="muted"><em>${journal}</em> (${year})</span></div>
        <div class="pub-actions">
          ${doi ? `<a href="${doi}" target="_blank" class="btn-pub">View Paper</a>` : ''}
          <button class="btn-pub" onclick="toggleCite(${index})">Cite (BibTeX)</button>
        </div>
        <div id="cite-${index}" class="cite-box">${bibtexString}</div>
      `;

      el.appendChild(pubDiv);
    });
  } catch (err) {
    console.error("Error loading publications:", err);
    el.innerHTML = "<p>Error loading publications. Please check the console.</p>";
  }
})();

window.toggleCite = function(id) {
  const box = document.getElementById(`cite-${id}`);
  if (box) {
    box.style.display = (box.style.display === 'block') ? 'none' : 'block';
  }
};