/* Motion and interaction driver, loaded on every page after site.js. The CSS owns every animation; this file only
     1. turns the header solid once you leave the top (observer on a sentinel, no scroll listener),
     2. splits [data-split] headlines into words, numbers [data-stagger] children, adds .in when they scroll into view,
     3. counts the big numbers up when they appear,
     4. lets a soft glow follow the pointer across panels,
     5. builds prev / next buttons and a progress bar for [data-carousel] rows, and the sliding logo band ([data-marquee]),
     6. switches the pinned scroll stages ([data-stage]) on where they work, and tracks which step of the home sequence is current.
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
const all = $$("[data-split],[data-reveal],[data-stagger],[data-lit]");
if (reduced || !hasIO) {
  all.forEach(el => el.classList.add("in"));
} else {
  // Walk the heading's nodes so inline <em> and <span> survive; each word gets its own mask.
  const words = (node, n) => {
    const frag = document.createDocumentFragment();
    node.childNodes.forEach(ch => {
      if (ch.nodeType === 3) ch.textContent.split(/(\s+)/).forEach(tok => {
        if (!tok) return;
        if (/^\s+$/.test(tok)) { frag.append(" "); return; }
        const mask = document.createElement("span"), inner = document.createElement("span");
        mask.className = "w"; mask.setAttribute("aria-hidden", "true");
        inner.textContent = tok; inner.style.setProperty("--i", n.i++);
        mask.append(inner); frag.append(mask);
      });
      else if (ch.nodeType === 1) { const c = ch.cloneNode(false); c.append(words(ch, n)); frag.append(c); }
    });
    return frag;
  };
  $$("[data-split]").forEach(h => {
    h.setAttribute("aria-label", h.textContent.trim().replace(/\s+/g, " "));   // screen readers get the sentence, not word fragments
    const kids = words(h, { i: 0 }); h.textContent = ""; h.append(kids);
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

/* 3. numbers count up (keeps any prefix or suffix, such as the + in 100+).
   The stats on the pinned stage count when the stage reveals them (phase 1), not when the page first reaches them. */
const stage = document.getElementById("scrolly");
const inPinned = el => stage && stage.contains(el) && stage.classList.contains("on");
let startStats = () => {};
if (!reduced && hasIO) {
  const done = new WeakSet();
  const run = el => {
    if (done.has(el)) return; done.add(el);
    const m = el.dataset.final.match(/^(\D*)(\d[\d,]*)(.*)$/); if (!m) return;
    const end = +m[2].replace(/,/g, ""), t0 = performance.now();
    const tick = t => { const k = Math.min(1, (t - t0) / 1300); el.textContent = m[1] + Math.round(end * (1 - Math.pow(1 - k, 4))) + m[3]; if (k < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !inPinned(e.target)) { run(e.target); io.unobserve(e.target); } }), { threshold: .6 });
  $$(".stats b,.fig-tile b").forEach(el => {
    el.dataset.final = el.textContent.trim();
    const m = el.dataset.final.match(/^(\D*)(\d[\d,]*)(.*)$/); if (!m) return;
    el.textContent = m[1] + "0" + m[3]; io.observe(el);
  });
  startStats = () => { if (stage) $$("[data-final]", stage).forEach(run); };
}

/* 3b. pinned scroll stages. A [data-stage] section is a tall track with one sticky stage inside it. It gets .on only where that
   works: a wide screen, motion allowed, and scroll-linked animation supported. Everywhere else the plain layout stays. */
const stageEls = $$("[data-stage]");
const mqPin = matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
const canPin = () => hasIO && mqPin.matches && window.CSS && CSS.supports("animation-timeline", "view()");
const applyStages = () => { const on = canPin(); stageEls.forEach(el => el.classList.toggle("on", on)); if (!on) startStats(); };
applyStages(); mqPin.addEventListener("change", applyStages);

if (stage && hasIO) {
  // The home sequence, measured in vh from the moment the stage pins: 0 card grows, 1 stats show, 2 card shrinks to a portrait,
  // 3 4 5 the three services take turns. Each phase is a block behind the stage; the one crossing the top of the screen is current.
  const MARKS = [0, 70, 250, 333, 417, 600];
  const regions = MARKS.slice(0, -1).map((m, k) => {
    const r = document.createElement("i"); r.className = "sc-sent"; r.setAttribute("aria-hidden", "true"); r.dataset.k = k;
    r.style.cssText = `top:${m}vh;height:${MARKS[k + 1] - m}vh`; stage.append(r); return r;
  });
  const pio = new IntersectionObserver(es => {
    const hit = es.filter(e => e.isIntersecting).map(e => +e.target.dataset.k).sort((a, b) => b - a)[0];
    if (hit === undefined) return;
    stage.dataset.ph = hit; stage.dataset.step = hit >= 2 ? hit - 2 : "";
    if (hit >= 1 && stage.classList.contains("on")) startStats();
  }, { rootMargin: "0px 0px -99% 0px" });
  regions.forEach(r => pio.observe(r));
  // Keyboard and click: moving to a service jumps the scroll to its step, so the step shown is always the one you chose.
  const goStep = k => {
    if (!stage.classList.contains("on") || +stage.dataset.step === k) return;
    scrollTo({ top: stage.getBoundingClientRect().top + scrollY + (MARKS[k + 2] + 6) * innerHeight / 100, behavior: "instant" });
  };
  $$("#services article", stage).forEach((a, k) => { a.addEventListener("focusin", () => goStep(k)); const h = a.querySelector("h3"); if (h) h.addEventListener("click", () => goStep(k)); });
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

/* 5b. logo band (alumni placements). Four copies of the logo set, each sliding left by 100% of its own width, so the loop is seamless.
   Speed matches the reference's, about 43px a second. The copies carry no text (the names live once, in the first set) and are hidden from
   screen readers. Not built under reduced motion, so the logos stay a still, complete, wrapped row. */
$$("[data-marquee]").forEach(m => {
  const set = m.querySelector(".m-set"); if (reduced || !set) return;
  for (let i = 0; i < 3; i++) {
    const c = set.cloneNode(true); c.setAttribute("aria-hidden", "true");
    c.querySelectorAll(".sr").forEach(x => x.remove());
    m.append(c);
  }
  m.classList.add("on");
  const speed = () => m.style.setProperty("--dur", Math.max(20, set.getBoundingClientRect().width / 43).toFixed(1) + "s");
  speed(); if ("ResizeObserver" in window) new ResizeObserver(speed).observe(set); addEventListener("load", speed);
});

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
