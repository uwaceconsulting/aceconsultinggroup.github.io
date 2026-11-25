/* Builds the shared header and footer, and renders team, stories and cases
   from content.js. Routine updates never need this file. */
{
const page = document.body.dataset.page || "";
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmtDate = d => new Date(d + "T12:00:00").toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
const years = new Date().getFullYear() - SITE.founded;

const ICON = {
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="2" y="9" width="4.2" height="13" rx=".6"/><circle cx="4.1" cy="4.4" r="2.4"/><path d="M9 9h4v1.9c.7-1.2 2.2-2.3 4.4-2.3 4.3 0 4.6 2.9 4.6 6.4V22h-4.2v-6.3c0-1.6 0-3.5-2.2-3.5s-2.4 1.6-2.4 3.4V22H9z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8V6.2c0-.8.2-1.3 1.4-1.3H17V1.2C16.6 1.1 15.4 1 14.1 1 11.3 1 9.6 2.7 9.6 5.7V8H7v4h2.6v11H14V12h2.9l.5-4z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg>'
};
const ARC = (fill) => `<svg viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet" aria-hidden="true"><path d="M0 0C46 8 84 44 100 100H80C66 54 38 22 0 14Z" fill="${fill}"/></svg>`;

/* header */
const links = [["services.html", "Services", "services"], ["about.html", "About", "about"], ["team.html", "Team", "team"],
  ["alumni.html", "Alumni", "alumni"], ["join.html", "Join ACE", "join"]];
const hdr = document.getElementById("top");
if (hdr) {
  hdr.innerHTML = `<div class="wrap">
    <a class="brand" href="index.html" aria-label="ACE Consulting Group home">
      <img class="lg-n" src="img/logo-navy.png" alt="ACE Consulting Group" width="113" height="40">
      <img class="lg-w" src="img/logo-white.png" alt="ACE Consulting Group" width="88" height="40"></a>
    <button class="menu" id="menuBtn" aria-expanded="false" aria-controls="nav">Menu</button>
    <nav class="nav" id="nav">${links.map(([h, t, k]) => `<a href="${h}"${k === page ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
      <a class="btn" href="contact.html">Contact us</a></nav></div>`;
  const b = document.getElementById("menuBtn"), n = document.getElementById("nav");
  b.addEventListener("click", () => { const o = n.classList.toggle("open"); b.setAttribute("aria-expanded", o); });
}

/* footer */
const ftr = document.getElementById("foot");
if (ftr) {
  ftr.innerHTML = `<div class="wrap">
    <div><img src="img/logo-white.png" alt="ACE Consulting Group" width="97" height="44">
      <p>A student-run, pro bono consulting group at the University of Waterloo, helping start-ups in Kitchener-Waterloo and beyond since ${SITE.founded}.</p>
      <div class="soc"><a href="${SITE.linkedin}" aria-label="LinkedIn">${ICON.linkedin}</a><a href="${SITE.instagram}" aria-label="Instagram">${ICON.instagram}</a>
      <a href="${SITE.facebook}" aria-label="Facebook">${ICON.facebook}</a><a href="mailto:${SITE.email}" aria-label="Email">${ICON.mail}</a></div></div>
    <div><h3>Explore</h3><ul>${links.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul></div>
    <div><h3>Get in touch</h3><ul><li><a href="${SITE.clientForm}">Work with us</a></li><li><a href="contact.html">Contact</a></li>
      <li><a href="mailto:${SITE.email}">${SITE.email}</a></li></ul></div></div>
    <p class="fine">© ${new Date().getFullYear()} ACE Consulting Group, University of Waterloo</p>`;
}

/* fill numbers and links marked in the HTML */
document.querySelectorAll("[data-years]").forEach(e => e.textContent = years);
document.querySelectorAll("[data-alumni]").forEach(e => e.textContent = SITE.alumniCount);
document.querySelectorAll("[data-clients]").forEach(e => e.textContent = SITE.clientsCount);
document.querySelectorAll("[data-teamcount]").forEach(e => e.textContent = TEAM.length);
document.querySelectorAll("a[data-clientform]").forEach(e => e.href = SITE.clientForm);
document.querySelectorAll("[data-email]").forEach(e => { e.textContent = SITE.email; if (e.tagName === "A") e.href = "mailto:" + SITE.email; });
document.querySelectorAll("[data-arc]").forEach(e => e.innerHTML = ARC(e.dataset.arc || "#2a6099"));
document.querySelectorAll("a[data-storyform]").forEach(e => { e.href = SITE.storyForm || ("mailto:" + SITE.email + "?subject=Alumni%20story"); });

/* story covers */
const cover = s => s.banner ? `<img src="img/${esc(s.banner)}" alt="" loading="lazy">`
  : `<div class="gen"><i></i><i></i><i></i>${ARC("#13a9de")}<span class="who">${esc(s.author)}</span></div>`;
const storyCard = s => `<a class="story" href="story.html#${esc(s.slug)}" data-tags="${esc(s.tags.join("|"))}">
  <div class="cover">${cover(s)}</div>
  <div class="body"><div class="tags">${s.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
  <h3>${esc(s.title)}</h3><p>${esc(s.teaser)}</p><span class="meta">${esc(s.author)} · ${fmtDate(s.date)}</span></div></a>`;

const latest = document.getElementById("latestStories");
if (latest) latest.innerHTML = STORIES.slice(0, +latest.dataset.count || 3).map(storyCard).join("");

const all = document.getElementById("allStories");
if (all) {
  const tags = ["All", ...new Set(STORIES.flatMap(s => s.tags))];
  const f = document.getElementById("storyFilters");
  f.innerHTML = tags.map((t, i) => `<button type="button" aria-pressed="${i === 0}" data-t="${esc(t)}">${esc(t)}</button>`).join("");
  all.innerHTML = STORIES.map(storyCard).join("");
  f.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    f.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
    all.querySelectorAll(".story").forEach(c => c.hidden = !(b.dataset.t === "All" || c.dataset.tags.split("|").includes(b.dataset.t)));
  });
}

/* single story page */
const art = document.getElementById("article");
const linkify = t => t.replace(/https?:\/\/[^\s<]+[^\s<.,)]/g, u => `<a href="${u}">${u}</a>`);
const more = s => { const i = STORIES.indexOf(s), nx = STORIES[i + 1] || STORIES[0];
  return `<nav class="next"><span>Next story</span><a href="story.html#${esc(nx.slug)}">${esc(nx.author)}: ${esc(nx.title)} →</a></nav>`; };
if (art) {
  const show = () => {
    const s = STORIES.find(x => x.slug === location.hash.slice(1)) || STORIES[0];
    document.title = s.title + " | ACE Consulting Group";
    art.innerHTML = `<a class="back" href="alumni.html#stories">← All alumni stories</a>
      <div class="tags">${s.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      <h1 style="margin-top:14px">${esc(s.title)}</h1>
      <p class="lead" style="margin-top:12px">By ${esc(s.author)} · ${fmtDate(s.date)}</p>
      <div class="cover">${cover(s)}</div>
      <aside class="author"><h2>About ${esc(s.author.split(" ")[0])}</h2><dl>
        ${s.position ? `<dt>Role when written</dt><dd>${esc(s.position)}</dd>` : ""}
        ${s.education ? `<dt>Education</dt><dd>${esc(s.education)}</dd>` : ""}
        ${s.aceRoles && s.aceRoles.length ? `<dt>At ACE</dt><dd>${s.aceRoles.map(esc).join("<br>")}</dd>` : ""}</dl></aside>
      <div class="txt">${s.body.length ? s.body.map(p => p.startsWith("## ") ? `<h2>${esc(p.slice(3))}</h2>` : `<p>${linkify(esc(p))}</p>`).join("")
        : `<p class="lede">${esc(s.teaser)}</p>`}</div>
      ${more(s)}`;
    window.scrollTo(0, 0);
    // opening and 'next story' swap the text in place, so give the swap a short rise (skipped under reduced motion)
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) art.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: 600, easing: "cubic-bezier(.16,1,.3,1)" });
  };
  window.addEventListener("hashchange", show); show();
}

/* team */
const roleName = { md: "Managing Director", director: "Director", associate: "Associate" };
const teamEl = document.getElementById("team");
if (teamEl) {
  const groups = [["md", "Managing Directors", "Advise on every engagement, lead the team, support our project managers and create professional development opportunities for members.", "n3"],
    ["director", "Directors", "Lead client engagements: managing projects, handling client communication and mentoring Associates.", "n2"],
    ["associate", "Associates", "Conduct market research and growth analysis, build core deliverables and case studies, and present final recommendations to clients.", ""]];
  teamEl.innerHTML = groups.map(([g, title, desc, cols]) => {
    const ppl = TEAM.filter(p => p.group === g); if (!ppl.length) return "";
    return `<section class="group" id="${g}"><div class="ghead"><h2 data-split>${title}</h2><p data-reveal>${desc}</p></div><div class="people ${cols}">${ppl.map(p => `
      <article class="person"><figure><img src="img/team/${esc(p.photo.includes(".") ? p.photo : p.photo + ".webp")}" alt="${esc(p.name)}" loading="lazy" width="560" height="700"></figure>
      <div class="row"><div><h3>${esc(p.name)}</h3><p class="role">${roleName[g]}</p></div>
      ${p.linkedin ? `<a class="li" href="${esc(p.linkedin)}" aria-label="${esc(p.name)} on LinkedIn">${ICON.linkedin}</a>` : ""}</div>
      ${p.program || p.year ? `<p class="tl">${esc([p.program, p.year].filter(Boolean).join(", "))}</p>` : ""}</article>`).join("")}</div></section>`;
  }).join("");
}

/* services and cases */
const svcEl = document.getElementById("services");
if (svcEl) svcEl.innerHTML = SERVICES.map((s, i) => `<article id="${s.id}">
  <svg class="sq" viewBox="0 0 40 40" aria-hidden="true">${[[0, 0], [21, 0], [0, 21]].map(([x, y], j) => `<rect x="${x}" y="${y}" width="19" height="19" rx="1.5" fill="${j === i ? "#4cc6f2" : "#3a78b8"}"/>`).join("")}<path d="M21 21C31 23 38 31 40 40H35C33 33 28 27 21 25Z" fill="#3a78b8"/></svg>
  <h3>${esc(s.name)}</h3><p>${esc(s.text)}</p>${svcEl.dataset.link ? `<a href="services.html#cases">See our case studies →</a>` : ""}</article>`).join("");

const casesEl = document.getElementById("caseList");
if (casesEl) casesEl.innerHTML = CASES.map(c => `<article class="case"><h3>${esc(c.industry)}</h3><p class="svc-l">${esc(c.services)}</p>
  <dl><dt>Challenge</dt><dd>${esc(c.challenge)}</dd><dt>What we did</dt><dd>${esc(c.approach)}</dd><dt>Outcome</dt><dd>${esc(c.outcome)}</dd></dl></article>`).join("");
/* Links that leave the site (client form, LinkedIn, Instagram...) open in a new tab. Set at click time so it also covers links built by any script. */
document.addEventListener("click", e => {
  const a = e.target.closest && e.target.closest("a[href]");
  if (a && /^https?:/.test(a.href) && a.origin !== location.origin) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
});
}
