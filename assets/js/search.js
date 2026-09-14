(function () {
  'use strict';
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  if (!input || !results) return;

  var url = input.getAttribute('data-search-url') || '/search.json';
  var docs = [];
  fetch(url + '?cb=' + new Date().getTime())
    .then(function (r) { return r.json(); })
    .then(function (data) { docs = data.docs || []; })
    .catch(function () { /* Suche deaktiviert, wenn search.json fehlt */ });

  function norm(s) {
    return (s || '').toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue').replace(/ß/g, 'ss');
  }

  input.addEventListener('input', function () {
    var q = norm(input.value).trim();
    results.hidden = !q;
    if (!q) return;
    var hits = docs.filter(function (d) {
      var t = norm(d.title), s = norm(d.snippet), x = norm(d.text);
      var words = q.split(/\s+/).filter(Boolean);
      return words.every(function (w) {
        return t.indexOf(w) !== -1 || s.indexOf(w) !== -1 || x.indexOf(w) !== -1;
      });
    }).slice(0, 12);

    results.innerHTML = '';
    if (!hits.length) {
      var empty = document.createElement('div');
      empty.className = 'search-hit search-empty';
      empty.textContent = 'Keine Treffer.';
      results.appendChild(empty);
      return;
    }
    hits.forEach(function (d) {
      var a = document.createElement('a');
      a.className = 'search-hit';
      a.href = d.url;
      var strong = document.createElement('strong');
      strong.textContent = d.title;
      a.appendChild(strong);
      if (d.snippet) {
        var span = document.createElement('span');
        span.className = 'search-snippet';
        span.textContent = d.snippet;
        a.appendChild(span);
      }
      results.appendChild(a);
    });
  });
})();
