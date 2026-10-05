/* Custom cursor + hover/press zoom.
 * Desktop mouse pointers only (fine pointer + hover + desktop width). On touch / coarse / phone / tablet
 * nothing is created and no listeners are attached. Transform-only via gsap.quickTo on the shared GSAP
 * ticker (no extra rAF loop, no layout reads per move). Reduced motion: a plain dot + ring follow only.
 */
const { gsap } = window;
const fine = matchMedia('(any-hover: hover) and (any-pointer: fine)').matches || matchMedia('(pointer: fine)').matches;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const record = new URLSearchParams(location.search).has('record');

if (gsap && fine && innerWidth > 900 && !record) initCursor();

function initCursor() {
  const root = document.documentElement;
  const dot = el('cursor-dot'), ring = el('cursor-ring');
  root.classList.add('has-cursor');

  // what reacts, and how much
  const HOVER = 'a, button, summary, .chips li, .tags li, .project, .steps li, .flow li, .roles li, .path li, .tools li';
  const ZOOM = [
    ['.btn, .burger, .nav-icons a', 1.06],
    ['.chips li, .tags li, .flow li', 1.06],
    ['.nav-links a, .logo, .gh-link, .mail a, .scroll-cue', 1.05],
    ['.steps li, .roles li, .path li, .tools li', 1.03],
    ['summary', 1.02],
  ];
  const MAGNET = '.btn.primary, .btn.dark-btn';
  const zoomOf = (t) => { for (const [sel, z] of ZOOM) if (t.matches(sel)) return z; return 1; };

  // follow: dot is near-instant, ring lags smoothly
  const dx = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' });
  const dy = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' });
  const lag = reduced ? 0.14 : 0.32;
  const rx = gsap.quickTo(ring, 'x', { duration: lag, ease: 'power3.out' });
  const ry = gsap.quickTo(ring, 'y', { duration: lag, ease: 'power3.out' });
  gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

  let visible = false, active = null, mx = 0, my = 0, rect = null;
  // hide on narrow windows (stacked tablet layout) without tearing anything down
  addEventListener('resize', () => { const on = innerWidth > 900; root.classList.toggle('has-cursor', on); dot.hidden = ring.hidden = !on; }, { passive: true });
  addEventListener('scroll', () => { rect = null; }, { passive: true }); // magnet rect is re-measured lazily
  addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    mx = e.clientX; my = e.clientY;
    if (!visible) { visible = true; gsap.set([dot, ring], { x: mx, y: my }); gsap.to([dot, ring], { opacity: 1, duration: 0.25 }); }
    dx(mx); dy(my); rx(mx); ry(my);
    if (active && active._mag) magnet(active, e);
  }, { passive: true });
  if (reduced) { // simple follow only: no hover zoom, magnet, elastic press or pulse
    document.addEventListener('mouseleave', () => { visible = false; gsap.set([dot, ring], { opacity: 0 }); });
    return;
  }
  document.addEventListener('mouseleave', () => { visible = false; gsap.to([dot, ring], { opacity: 0, duration: 0.25 }); });
  addEventListener('blur', () => { visible = false; gsap.to([dot, ring], { opacity: 0, duration: 0.2 }); });

  // hover in / out (delegated, ignoring moves between children of the same target)
  document.addEventListener('pointerover', (e) => {
    if (e.pointerType !== 'mouse') return;
    const t = e.target.closest(HOVER); if (!t || t === active) return;
    if (active) leave(active);
    enter(t);
  });
  document.addEventListener('pointerout', (e) => {
    if (!active || e.pointerType !== 'mouse') return;
    const to = e.relatedTarget && e.relatedTarget.closest ? e.relatedTarget.closest(HOVER) : null;
    if (to === active) return;
    if (!active.contains(e.relatedTarget)) { leave(active); if (to) enter(to); }
  });

  function enter(t) {
    active = t;
    const big = t.matches('.project');
    ring.classList.add('is-hover'); ring.classList.toggle('is-large', big);
    gsap.to(ring, { scale: big ? 1.6 : 2.0, duration: 0.45, ease: 'power3.out' });
    gsap.to(dot, { scale: big ? 1 : 0.5, duration: 0.3 });
    const z = zoomOf(t);
    if (z !== 1 && !disabled(t)) gsap.to(t, { scale: z, duration: 0.45, ease: 'power3.out', overwrite: 'auto' });
    t._mag = t.matches(MAGNET); rect = null;
  }
  function leave(t) {
    ring.classList.remove('is-hover', 'is-large');
    gsap.to(ring, { scale: 1, duration: 0.45, ease: 'power3.out' });
    gsap.to(dot, { scale: 1, duration: 0.3 });
    if (zoomOf(t) === 1 && !t._mag) { if (active === t) active = null; return; } // nothing was transformed
    const keepTransform = t.classList.contains('reveal'); // reveal x/y are owned by main.js
    const vars = { scale: 1, duration: 0.5, ease: 'power3.out', overwrite: 'auto' };
    if (!keepTransform) Object.assign(vars, { x: 0, y: 0, onComplete: () => gsap.set(t, { clearProps: 'transform' }) });
    gsap.to(t, vars);
    t._mag = false;
    if (active === t) active = null;
  }
  function magnet(t, e) {
    const r = rect || (rect = t.getBoundingClientRect());
    const ox = (e.clientX - (r.left + r.width / 2)) * 0.22, oy = (e.clientY - (r.top + r.height / 2)) * 0.3;
    gsap.to(t, { x: ox, y: oy, duration: 0.4, ease: 'power3.out', overwrite: 'auto' });
  }
  const disabled = (t) => t.getAttribute('aria-disabled') === 'true' || t.classList.contains('disabled');

  // press down + spring back, and a quick ring pulse at the click point
  addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    gsap.to(ring, { scale: '-=0.35', duration: 0.12, ease: 'power2.out' });
    const t = e.target.closest(HOVER);
    if (t && zoomOf(t) !== 1 && !disabled(t)) gsap.to(t, { scale: Math.min(0.96, zoomOf(t) - 0.08), duration: 0.12, ease: 'power2.out', overwrite: 'auto' });
  });
  addEventListener('pointerup', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    const t = e.target.closest(HOVER);
    gsap.to(ring, { scale: t ? (t.matches('.project') ? 1.6 : 2.0) : 1, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
    if (t && zoomOf(t) !== 1 && !disabled(t)) gsap.to(t, { scale: zoomOf(t), duration: 0.6, ease: 'elastic.out(1, 0.45)', overwrite: 'auto' });
    pulse(e.clientX, e.clientY);
  });
  function pulse(x, y) {
    const p = el('cursor-pulse');
    gsap.fromTo(p, { x, y, xPercent: -50, yPercent: -50, scale: 0.4, opacity: 0.8 },
      { scale: 2.8, opacity: 0, duration: 0.55, ease: 'power2.out', onComplete: () => p.remove() });
  }
  function el(cls) { const d = document.createElement('div'); d.className = cls; d.setAttribute('aria-hidden', 'true'); document.body.appendChild(d); return d; }
}
