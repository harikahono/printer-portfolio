/* ===== SITE CHROME: reuse landing's nav + footer on every page ===== */
(function () {
    const navMount = document.getElementById('site-nav');
    const footMount = document.getElementById('site-footer');
    if (navMount && App.components.nav) navMount.innerHTML = App.components.nav();
    if (footMount && App.components.footer) footMount.innerHTML = App.components.footer();

    /* Mobile drawer (same logic as landing boot) */
    let menuOpen = false;
    const setMenu = function (open) {
        menuOpen = open;
        const menu = document.getElementById('mobile-menu');
        const b = document.getElementById('menu-backdrop');
        if (menu) menu.style.translate = open ? '0' : '100%';
        if (b) { b.style.opacity = open ? '1' : '0'; b.style.pointerEvents = open ? 'auto' : 'none'; }
        document.body.style.overflow = open ? 'hidden' : '';
        const btn = document.querySelector('[aria-controls="mobile-menu"]');
        if (btn) btn.setAttribute('aria-expanded', open);
    };
    window.toggleMenu = function () { setMenu(!menuOpen); };
    setMenu(false);
    const menuEl = document.getElementById('mobile-menu');
    if (menuEl) menuEl.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

    /* Reveal on scroll — halus di semua page (no lib) */
    (function reveal(){
        // auto-tag static subpages (main > section/header) biar nggak perlu edit 1-1 — home sudah punya data-reveal explicit
        document.querySelectorAll('main > section, main > header, #app > section').forEach(el=>{
            if(!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal','');
        });
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('revealed'));
            return;
        }
        const obs = new IntersectionObserver((entries)=>{
            entries.forEach(e=>{
                if(e.isIntersecting){ e.target.classList.add('revealed'); obs.unobserve(e.target); }
            });
        },{threshold:0.12, rootMargin:'0px 0px -40px 0px'});
        document.querySelectorAll('[data-reveal]').forEach(el=>obs.observe(el));
        // for content injected after boot (home.js App.components) — observe late nodes too
        const mo = new MutationObserver(()=> document.querySelectorAll('[data-reveal]:not(.revealed)').forEach(el=>obs.observe(el)));
        mo.observe(document.documentElement,{childList:true,subtree:true});
        // stagger delight untuk grid cards di viewport pertama
        document.querySelectorAll('[data-reveal]').forEach((el,i)=>{
            if(!el.hasAttribute('data-reveal-delay') && i%3!==0) el.setAttribute('data-reveal-delay', String((i%3)));
        });
    })();

    /* Scroll-row arrows (data-scroll-prev / data-scroll-next) — target snap-aligned biar nggak lawan scroll-snap */
    window.scrollRow = function (id, dir) {
        const row = document.getElementById(id);
        if (!row) return;
        const step = (row.firstElementChild ? row.firstElementChild.offsetWidth : 240) + 20;
        const max = row.scrollWidth - row.clientWidth;
        const target = Math.max(0, Math.min(max, Math.round((row.scrollLeft + dir * step) / step) * step));
        row.scrollTo({ left: target, behavior: 'smooth' });
    };
    document.querySelectorAll('[data-scroll-prev]').forEach(b =>
        b.addEventListener('click', () => scrollRow(b.dataset.target, -1)));
    document.querySelectorAll('[data-scroll-next]').forEach(b =>
        b.addEventListener('click', () => scrollRow(b.dataset.target, 1)));
})();
