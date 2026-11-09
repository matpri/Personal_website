/* Renders the cards from data.js. You normally don't need to edit this. */

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

function hue(text) {
  let h = 0;
  for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) % 360;
  return h;
}

function slug(text) {
  return String(text).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function cardHTML(item) {
  const cover = item.video
    ? `<video class="${item.fit === "contain" ? "contain" : ""}" src="${esc(item.video)}" poster="${esc(item.image || "")}" autoplay muted loop playsinline preload="metadata" aria-label="${esc(item.title)}"></video>`
    : item.image
    ? `<img class="${item.fit === "contain" ? "contain" : ""}" src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy">`
    : `<span class="cover-icon">${esc(item.icon || "✦")}</span>`;

  const meta = [];
  if (item.status)
    meta.push(`<span class="status ${esc(item.status)}">${item.status === "ongoing" ? "Ongoing" : "Completed"}</span>`);
  if (item.date)
    meta.push(`<time datetime="${esc(item.date)}">${new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>`);
  if (item.period) meta.push(`<span>${esc(item.period)}</span>`);
  if (item.role) meta.push(`<span>${esc(item.role)}</span>`);

  const tags = (item.tags || item.keywords || []).map((t) => `<li>${esc(t)}</li>`).join("");
  const links = (item.links || [])
    .map((l) => {
      const ext = /^https?:/.test(l.url);
      const primary = /app|read/i.test(l.label) ? " primary" : "";
      return ext
        ? `<a class="btn${primary}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`
        : `<a class="btn${primary}" href="${esc(l.url)}">${esc(l.label)} →</a>`;
    })
    .join("");

  const internal = (item.links || []).find((l) => !/^https?:/.test(l.url));
  return `
    <article class="card" id="${esc(item.id || slug(item.title))}">
      <div class="cover" style="--h:${hue(item.title)}">${cover}</div>
      <div class="card-body">
        ${meta.length ? `<div class="meta">${meta.join("")}</div>` : ""}
        <h3>${internal ? `<a href="${esc(internal.url)}">${esc(item.title)}</a>` : esc(item.title)}</h3>
        <p>${esc(item.description)}</p>
        ${tags ? `<ul class="tags">${tags}</ul>` : ""}
        ${links ? `<div class="links">${links}</div>` : ""}
      </div>
    </article>`;
}

function renderCards(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map(cardHTML).join("");
  // respect "reduce motion": stop autoplaying card videos and show the poster
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.querySelectorAll("video").forEach((v) => { v.removeAttribute("autoplay"); v.pause(); });
  }
  // cards are rendered after page load, so jump to #card-id links manually
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target && el.contains(target)) target.scrollIntoView({ block: "start" });
  }
}
