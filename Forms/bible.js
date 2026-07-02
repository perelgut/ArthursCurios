/* bible.js — shared "Browse all" mode for each Story Bible form page.
   Reads <body data-type="..."> and window.BIBLE (from bible_data.js).
   Adds a tab toggle: ✎ Add new  |  📚 Browse all (N). No-ops on the index page. */
(function () {
  "use strict";

  function esc(s) {
    return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  // very small markdown -> html (inline + a few blocks), HTML-escaped first
  function mdInline(s) {
    return esc(s)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1<\/a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1<\/strong>")
      .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2<\/em>")
      .replace(/`([^`]+)`/g, "<code>$1<\/code>");
  }
  function mdBlock(text) {
    if (!text) return "";
    var lines = text.split("\n"), out = [], list = null;
    function closeList() { if (list) { out.push("<ul>" + list.join("") + "<\/ul>"); list = null; } }
    for (var i = 0; i < lines.length; i++) {
      var ln = lines[i];
      if (/^\s*<!--/.test(ln)) continue;               // skip HTML comments
      if (/^####\s+/.test(ln)) { closeList(); out.push("<h5>" + mdInline(ln.replace(/^####\s+/, "")) + "<\/h5>"); }
      else if (/^###\s+/.test(ln)) { closeList(); out.push("<h4>" + mdInline(ln.replace(/^###\s+/, "")) + "<\/h4>"); }
      else if (/^>\s?/.test(ln)) { closeList(); out.push("<blockquote>" + mdInline(ln.replace(/^>\s?/, "")) + "<\/blockquote>"); }
      else if (/^[-*]\s+/.test(ln)) { (list = list || []).push("<li>" + mdInline(ln.replace(/^[-*]\s+/, "")) + "<\/li>"); }
      else if (ln.trim() === "") { closeList(); }
      else { closeList(); out.push("<p>" + mdInline(ln) + "<\/p>"); }
    }
    closeList();
    return out.join("\n");
  }

  function injectStyle() {
    var css = [
      ".bib-tabs{display:flex;gap:8px;margin:0 0 22px}",
      ".bib-tabs button{font:inherit;font-size:14px;border-radius:8px;padding:8px 16px;border:1px solid #3a3128;background:#221d17;color:#cdbfa8;cursor:pointer;font-weight:bold}",
      ".bib-tabs button.on{background:#c8923d;border-color:#c8923d;color:#1a1714}",
      "#bibleBrowse{margin-top:4px}",
      "#bibleBrowse .tools{display:flex;gap:10px;align-items:center;margin:0 0 16px;flex-wrap:wrap}",
      "#bibleBrowse input.q{flex:1;min-width:180px;background:#15120f;border:1px solid #443a2d;border-radius:6px;color:#f1ead8;padding:9px 11px;font-family:inherit;font-size:15px}",
      "#bibleBrowse .meta-note{color:#8d8170;font-style:italic;font-size:13px}",
      ".bib-card{background:#221d17;border:1px solid #3a3128;border-radius:10px;padding:16px 18px;margin:0 0 14px}",
      ".bib-card h3{margin:0 0 4px;font-size:19px;color:#e8b765}",
      ".bib-badges{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 10px}",
      ".bib-badge{font-size:11px;letter-spacing:.02em;border-radius:20px;padding:2px 10px;background:#332a20;color:#cdbfa8;border:1px solid #443a2d}",
      ".bib-badge.warn{background:#5a2d22;color:#f0c9bd;border-color:#8a4636}",
      ".bib-strip{font-size:13px;color:#b9ab95;margin:0 0 8px;line-height:1.5}",
      ".bib-body{font-size:14.5px;color:#ddd0b9;line-height:1.6}",
      ".bib-body h4{font-size:14px;color:#e8b765;margin:12px 0 4px}",
      ".bib-body h5{font-size:13px;color:#cdbfa8;margin:10px 0 4px}",
      ".bib-body p{margin:6px 0}",
      ".bib-body blockquote{margin:8px 0;padding:6px 12px;border-left:3px solid #c8923d;background:#1d1813;color:#c9bca6}",
      ".bib-body ul{margin:6px 0 6px 18px;padding:0}",
      ".bib-body code{background:#332a20;padding:1px 5px;border-radius:3px;font-family:Menlo,Consolas,monospace;font-size:12px}",
      ".bib-empty{color:#8d8170;font-style:italic;padding:20px 0}"
    ].join("\n");
    var s = document.createElement("style"); s.textContent = css; document.head.appendChild(s);
  }

  function entryCard(e) {
    var badges = '<span class="bib-badge">' + esc(e.type) + (e.subtype ? " · " + esc(e.subtype) : "") + "<\/span>" +
                 '<span class="bib-badge">' + esc(e.file) + "<\/span>";
    if (e._anomaly) badges += '<span class="bib-badge warn">⚠ expected in ' + esc(e._anomaly) + "<\/span>";
    return '<div class="bib-card">' +
      "<h3>" + esc(e.name) + "<\/h3>" +
      '<div class="bib-badges">' + badges + "<\/div>" +
      (e.meta ? '<div class="bib-strip">' + mdInline(e.meta) + "<\/div>" : "") +
      '<div class="bib-body">' + mdBlock(e.body) + "<\/div>" +
    "<\/div>";
  }

  function build() {
    var type = document.body.dataset.type;
    if (!type) return; // index page or non-form page
    injectStyle();

    var wrap = document.querySelector(".wrap") || document.body;
    var addEls = Array.prototype.slice.call(wrap.querySelectorAll("fieldset, h2.out, #output, .bar"));

    var data = window.BIBLE || { entries: [], anomalies: [] };
    var anomalyMap = {};
    (data.anomalies || []).forEach(function (a) { anomalyMap[a.name + "|" + a.foundIn] = a.expected; });
    var mine = (data.entries || []).filter(function (e) { return e.type === type; })
      .sort(function (a, b) { return a.name.localeCompare(b.name); });
    mine.forEach(function (e) { e._anomaly = anomalyMap[e.name + "|" + e.file] || null; });

    // tab bar
    var tabs = document.createElement("div");
    tabs.className = "bib-tabs";
    tabs.innerHTML =
      '<button id="tabAdd" class="on">✎ Add new<\/button>' +
      '<button id="tabBrowse">📚 Browse all (' + mine.length + ")<\/button>";
    if (addEls.length) addEls[0].parentNode.insertBefore(tabs, addEls[0]);
    else wrap.appendChild(tabs);

    // browse panel
    var panel = document.createElement("div");
    panel.id = "bibleBrowse";
    panel.style.display = "none";
    var gen = (data.generated ? " · index: " + esc(data.generated) : "");
    panel.innerHTML =
      '<div class="tools"><input class="q" type="text" placeholder="Filter ' + esc(type) + ' by name or text…">' +
      '<span class="meta-note">' + mine.length + " entr" + (mine.length === 1 ? "y" : "ies") + gen + "<\/span><\/div>" +
      '<div id="bibList"><\/div>';
    wrap.appendChild(panel);

    var list = panel.querySelector("#bibList");
    function render(q) {
      q = (q || "").toLowerCase().trim();
      var rows = mine.filter(function (e) {
        return !q || (e.name + " " + e.body + " " + e.meta).toLowerCase().indexOf(q) >= 0;
      });
      list.innerHTML = rows.length ? rows.map(entryCard).join("") :
        '<div class="bib-empty">No ' + esc(type) + " entries" + (q ? " match “" + esc(q) + "”." : " yet.") + "<\/div>";
    }
    render("");
    panel.querySelector("input.q").addEventListener("input", function () { render(this.value); });

    function show(mode) {
      var browse = mode === "browse";
      addEls.forEach(function (el) { el.style.display = browse ? "none" : ""; });
      panel.style.display = browse ? "" : "none";
      document.getElementById("tabAdd").classList.toggle("on", !browse);
      document.getElementById("tabBrowse").classList.toggle("on", browse);
    }
    document.getElementById("tabAdd").addEventListener("click", function () { show("add"); });
    document.getElementById("tabBrowse").addEventListener("click", function () { show("browse"); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
