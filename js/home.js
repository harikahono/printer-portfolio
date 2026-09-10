/* ===== HOME: PERAKIT HALAMAN ===== */

(function boot() {
    const app = document.getElementById('app');
    app.innerHTML = [
        App.components.nav(),
        App.components.hero(),
        App.components.features(),
        App.components.produk(),
        App.components.bento(),
        App.components.trust(),
        App.components.newsletter(),
        App.components.footer(),
    ].join('');

    // produk rows removed for company profile — no longer rendered
    // trigger reveal check for injected home sections
    requestAnimationFrame(()=> document.dispatchEvent(new CustomEvent('ap:reveal')));

    let menuOpen = false;
    const setMenu = function(open) {
        menuOpen = open;
        const menu = document.getElementById('mobile-menu');
        const b = document.getElementById('menu-backdrop');
        if (menu) menu.style.translate = open ? '0' : '100%';
        if (b) { b.style.opacity = open ? '1' : '0'; b.style.pointerEvents = open ? 'auto' : 'none'; }
        document.body.style.overflow = open ? 'hidden' : '';
        const btn = document.querySelector('[aria-controls="mobile-menu"]');
        if (btn) btn.setAttribute('aria-expanded', open);
    };
    window.toggleMenu = function() { setMenu(!menuOpen); };
    setMenu(false);
    document.getElementById('mobile-menu')?.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
})();
