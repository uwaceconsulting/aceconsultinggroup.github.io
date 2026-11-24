/* Home page scroll reveal: sections fade in as you reach them, in reading order.
   Skipped entirely under prefers-reduced-motion (the CSS never hides them then). */
{
const els = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  els.forEach(el => io.observe(el));
} else els.forEach(el => el.classList.add("in"));
}
