/* Motion and interaction driver, loaded on every page after site.js. The CSS owns every animation; this file only
     1. turns the header solid once you leave the top (observer on a sentinel, no scroll listener),
     2. splits [data-split] headlines into words, numbers [data-stagger] children, adds .in when they scroll into view,
     3. counts the big numbers up when they appear,
     4. lets a soft glow follow the pointer across panels,
     5. builds prev / next buttons and a progress bar for [data-carousel] rows.
   Under prefers-reduced-motion nothing is hidden or counted: everything is shown at once.
   window.__aceMotion tells the safety timer in each page's head that this file ran. */
{
window.__aceMotion = true;
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasIO = "IntersectionObserver" in window;

/* 1. header */
const top = document.getElementById("top");
if (top && hasIO) {
  const s = document.createElement("div");
  s.style.cssText = "position:absolute;top:0;left:0;width:1px;height:48px;pointer-events:none";
  document.body.prepend(s);
  new IntersectionObserver(([e]) => top.classList.toggle("scrolled", !e.isIntersecting)).observe(s);
}

/* 2. headline words, list order, reveal on view */
const all = $$("[data-split],[data-reveal],[data-stagger]");
if (reduced || !hasIO) {
  all.forEach(el => el.classList.add("in"));
} else {
  $$("[data-split]").forEach(h => {
    const text = h.textContent.trim().replace(/\s+/g, " ");
    h.setAttribute("aria-label", text);                 // screen readers get the sentence, not word fragments
    h.textContent = "";
    text.split(" ").forEach((word, i) => {
      const mask = document.createElement("span"), inner = document.createElement("span");
      mask.className = "w"; mask.setAttribute("aria-hidden", "true");
      inner.textContent = word; inner.style.setProperty("--i", i);
      mask.append(inner); h.append(mask, " ");
    });
    h.classList.add("is-split");
  });
  $$("[data-stagger]").forEach(list => [...list.children].forEach((k, i) => k.style.setProperty("--i", i)));
  // A fully clipped element (the wipe start state) counts as not intersecting, so for wipes we watch the parent instead.
  const watch = new Map();
  all.forEach(el => { const t = el.dataset.reveal === "wipe" ? el.parentElement : el; watch.set(t, [...(watch.get(t) || []), el]); });
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { watch.get(e.target).forEach(el => el.classList.add("in")); io.unobserve(e.target); }
  }), { threshold: 0, rootMargin: "100000px 0px -6% 0px" });   // root reaches far above the screen, so anything already scrolled past is revealed too
  watch.forEach((_, t) => io.observe(t));
}

/* 3. numbers count up (keeps any prefix or suffix, such as the + in 100+) */
if (!reduced && hasIO) {
  const run = el => {
    const m = el.dataset.final.match(/^(\D*)(\d[\d,]*)(.*)$/); if (!m) return;
    const end = +m[2].replace(/,/g, ""), t0 = performance.now();
    const tick = t => { const k = Math.min(1, (t - t0) / 1300); el.textContent = m[1] + Math.round(end * (1 - Math.pow(1 - k, 4))) + m[3]; if (k < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }), { threshold: .6 });
  $$(".stats b,.fig-tile b").forEach(el => {
    el.dataset.final = el.textContent.trim();
    const m = el.dataset.final.match(/^(\D*)(\d[\d,]*)(.*)$/); if (!m) return;
    el.textContent = m[1] + "0" + m[3]; io.observe(el);
  });
}

/* 4. pointer glow on panels (feedback: shows which panel you are over) */
if (!reduced) {
  $$(".svc article,.case,.door,.contact-grid>div,.ladder>div,.story,.vals>div").forEach(e => e.classList.add("spot"));
  let raf = 0, last = null;
  document.addEventListener("pointermove", e => {
    if (e.pointerType === "touch") return;
    last = e;
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const el = last.target.closest && last.target.closest(".spot"); if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", last.clientX - r.left + "px");
      el.style.setProperty("--my", last.clientY - r.top + "px");
    });
  }, { passive: true });
}

/* 5. carousels: buttons, progress, and disabled ends (no scroll listener: observers on the first and last card) */
$$("[data-carousel]").forEach((sc, i) => {
  const wrap = document.createElement("div"); wrap.className = "car"; sc.before(wrap); wrap.append(sc);
  const ctrl = document.createElement("div"); ctrl.className = "car-ctrl";
  ctrl.innerHTML = '<button type="button" class="car-btn car-prev" aria-label="Previous"></button><div class="car-bar" aria-hidden="true"><i></i></div><button type="button" class="car-btn car-next" aria-label="Next"></button>';
  wrap.append(ctrl);
  const prev = ctrl.querySelector(".car-prev"), next = ctrl.querySelector(".car-next"), bar = ctrl.querySelector("i");
  const step = dir => { const c = sc.firstElementChild, w = c ? c.getBoundingClientRect().width + 16 : 320; sc.scrollBy({ left: dir * w, behavior: reduced ? "auto" : "smooth" }); };
  prev.addEventListener("click", () => step(-1)); next.addEventListener("click", () => step(1));
  if (window.CSS && CSS.supports("animation-timeline: scroll()")) {
    const name = "--car" + i; sc.style.scrollTimeline = name + " inline"; wrap.style.timelineScope = name; bar.style.animationTimeline = name;
  }
  if (hasIO && sc.children.length) {
    const first = sc.firstElementChild, last = sc.lastElementChild;
    const io = new IntersectionObserver(es => es.forEach(e => { (e.target === first ? prev : next).disabled = e.isIntersecting; }), { root: sc, threshold: .98 });
    io.observe(first); io.observe(last);
  }
});
}
