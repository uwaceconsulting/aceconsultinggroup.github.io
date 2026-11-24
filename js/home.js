/* Home page motion driver. The CSS owns every animation; this file only
     1. splits [data-split] headlines into words (each word rises out of a mask),
     2. numbers the children of [data-stagger] lists (--i drives the delay),
     3. adds .in when an element scrolls into view.
   Skipped under prefers-reduced-motion, so nothing is ever hidden for those visitors.
   window.__aceMotion tells the safety timer in index.html that this file ran. */
{
window.__aceMotion = true;
const all = document.querySelectorAll("[data-split],[data-reveal],[data-stagger]");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduced || !("IntersectionObserver" in window)) {
  all.forEach(el => el.classList.add("in"));
} else {
  document.querySelectorAll("[data-split]").forEach(h => {
    const text = h.textContent.trim().replace(/\s+/g, " ");
    h.setAttribute("aria-label", text);               // screen readers get the sentence, not word fragments
    h.textContent = "";
    text.split(" ").forEach((word, i) => {
      const mask = document.createElement("span"), inner = document.createElement("span");
      mask.className = "w"; mask.setAttribute("aria-hidden", "true");
      inner.textContent = word; inner.style.setProperty("--i", i);
      mask.append(inner); h.append(mask, " ");
    });
    h.classList.add("is-split");
  });
  document.querySelectorAll("[data-stagger]").forEach(list => [...list.children].forEach((k, i) => k.style.setProperty("--i", i)));
  // A fully clipped element (the wipe start state) counts as not intersecting, so for wipes we watch the parent instead.
  const watch = new Map();
  all.forEach(el => { const t = el.dataset.reveal === "wipe" ? el.parentElement : el; watch.set(t, [...(watch.get(t) || []), el]); });
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { watch.get(e.target).forEach(el => el.classList.add("in")); io.unobserve(e.target); }
  }), { threshold: .15, rootMargin: "0px 0px -6% 0px" });
  watch.forEach((_, t) => io.observe(t));
}
}
