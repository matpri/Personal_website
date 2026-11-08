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

function cardHTML(item) {
  const cover = item.image
    ? `<img src="${esc(item.image)}" alt="" loading="lazy">`
    : `<span class="cover-icon">${esc(item.icon || "✦")}</span>`;

  const meta = [];
  if (item.status)
    meta.push(`<span class="status ${esc(item.status)}">${item.status === "ongoing" ? "Ongoing" : "Completed"}</span>`);
  if (item.period) meta.push(`<span>${esc(item.period)}</span>`);
  if (item.role) meta.push(`<span>${esc(item.role)}</span>`);

  const tags = (item.tags || []).map((t) => `<li>${esc(t)}</li>`).join("");
  const links = (item.links || [])
    .map((l) => `<a class="btn${/app/i.test(l.label) ? " primary" : ""}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`)
    .join("");

  return `
    <article class="card">
      <div class="cover" style="--h:${hue(item.title)}">${cover}</div>
      <div class="card-body">
        ${meta.length ? `<div class="meta">${meta.join("")}</div>` : ""}
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.description)}</p>
        ${tags ? `<ul class="tags">${tags}</ul>` : ""}
        ${links ? `<div class="links">${links}</div>` : ""}
      </div>
    </article>`;
}

function renderCards(containerId, items) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = items.map(cardHTML).join("");
}
