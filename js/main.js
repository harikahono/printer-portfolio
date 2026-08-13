/* ===== MAIN: PERAKIT HALAMAN ===== */

/* Kartu produk — data-driven */
function renderRow(id, items) {
    const row = document.getElementById(id);
    row.innerHTML = items.map(p => `
        <div class="flex-none w-56 sm:w-60 snap-start pt-4 pb-6 px-2">
            <div class="flex flex-col transition-transform duration-200 hover:-translate-y-2 cursor-pointer">
                <div class="flex items-end">
                    <div class="bg-white rounded-tl-3xl rounded-tr-xl px-3 py-2 flex gap-2 items-center relative z-10">
                        <span class="line-through text-[#b7bac5] text-xs font-medium">Rp${p.original}</span>
                        <span class="font-bold text-sm whitespace-nowrap text-[#090909]">Rp${p.price}</span>
                    </div>
                    <div class="flex-1 flex justify-end items-center gap-1.5 pb-1 relative">
                        <div class="absolute bottom-0 left-0 w-3 h-3 bg-transparent shadow-[-4px_4px_0_0_#fff] rounded-bl-full z-10"></div>
                        <button type="button" class="flex items-center bg-[#F1BF0A] rounded-full p-1.5 text-[#090909] whitespace-nowrap relative overflow-hidden after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1.5 after:rounded-full after:bg-white after:w-7 after:h-7 after:transition-[width,left] after:duration-2000 after:ease-[linear(0,0.014_0.4%,0.054_0.8%,0.228_1.7%,1.141_4.6%,1.402_5.6%,1.565_6.6%,1.599_7%,1.617_7.5%,1.611_7.9%,1.58_8.4%,1.47_9.3%,0.924_12.1%,0.747_13.2%,0.655_14.1%,0.633_14.5%,0.62_15%,0.622_15.4%,0.639_15.9%,0.705_16.8%,1.052_19.7%,1.159_20.8%,1.214_21.7%,1.235_22.6%,1.221_23.5%,1.18_24.4%,0.972_27.2%,0.905_28.3%,0.869_29.2%,0.855_30.1%,0.862_31%,0.887_31.9%,1.06_35.9%,1.081_36.8%,1.089_37.7%,1.084_38.6%,1.069_39.5%,0.964_43.4%,0.945_45.2%,0.954_46.8%,1.019_50.7%,1.034_52.7%,1.029_54.3%,0.989_58.2%,0.979_60.3%,1.013_67.8%,0.992_75.3%,1.005_82.7%,0.997_90.4%,1)] hover:after:size-full hover:after:left-0 cursor-pointer border border-[#F1BF0A] z-10" aria-label="Tambah ke keranjang">
                            <span class="rounded-full p-1.5 relative z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
                            </span>
                        </button>
                        <button type="button" class="flex items-center bg-[#F1BF0A] rounded-full p-1.5 text-[#090909] whitespace-nowrap relative overflow-hidden after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1.5 after:rounded-full after:bg-white after:w-7 after:h-7 after:transition-[width,left] after:duration-2000 after:ease-[linear(0,0.014_0.4%,0.054_0.8%,0.228_1.7%,1.141_4.6%,1.402_5.6%,1.565_6.6%,1.599_7%,1.617_7.5%,1.611_7.9%,1.58_8.4%,1.47_9.3%,0.924_12.1%,0.747_13.2%,0.655_14.1%,0.633_14.5%,0.62_15%,0.622_15.4%,0.639_15.9%,0.705_16.8%,1.052_19.7%,1.159_20.8%,1.214_21.7%,1.235_22.6%,1.221_23.5%,1.18_24.4%,0.972_27.2%,0.905_28.3%,0.869_29.2%,0.855_30.1%,0.862_31%,0.887_31.9%,1.06_35.9%,1.081_36.8%,1.089_37.7%,1.084_38.6%,1.069_39.5%,0.964_43.4%,0.945_45.2%,0.954_46.8%,1.019_50.7%,1.034_52.7%,1.029_54.3%,0.989_58.2%,0.979_60.3%,1.013_67.8%,0.992_75.3%,1.005_82.7%,0.997_90.4%,1)] hover:after:size-full hover:after:left-0 cursor-pointer border border-[#F1BF0A] z-10 mr-1" aria-label="Tambah ke wishlist">
                            <span class="rounded-full p-1.5 relative z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="bg-white rounded-b-3xl rounded-tr-3xl p-2.5 pt-0 flex flex-col relative z-0 drop-shadow-[0_6px_16px_rgba(19,35,74,.08)] hover:drop-shadow-[0_16px_32px_rgba(19,35,74,.18)] transition-[drop-shadow] duration-200">
                    <h3 class="px-1 text-sm py-2 truncate text-[#090909] font-semibold">${p.name}</h3>
                    <div class="w-full shrink-0 rounded-2xl h-40 overflow-hidden bg-white">
                        <img src="${p.img}" alt="${p.name}" loading="lazy" class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

/* Geser scroll-row */
window.scrollRow = function (id, dir) {
    const row = document.getElementById(id);
    row.scrollBy({ left: dir * 260, behavior: 'smooth' });
};

/* Rakit halaman */
(function boot() {
    const app = document.getElementById('app');
    app.innerHTML = [
        App.sections.nav(),
        App.sections.hero(),
        App.sections.features(),
        App.sections.produk(),
        App.sections.bento(),
        App.sections.trust(),
        App.sections.newsletter(),
        App.sections.footer(),
    ].join('');

    renderRow('row-new', App.data.produkBaru);
    renderRow('row-best', App.data.produkLaris);

    /* Drawer menu mobile — inline style translate: class translate-x-full di v4 = properti `translate` (bukan transform), jadi JS kontrol properti yang sama biar inline menang. State pake boolean, nggak baca balik CSS (translate: 0 di-serialize jadi '0px' pas dibaca, spec css-transforms-2 §5.1) */
    let menuOpen = false;
    const setMenu = function (open) {
        menuOpen = open;
        const menu = document.getElementById('mobile-menu');
        const b = document.getElementById('menu-backdrop');
        menu.style.translate = open ? '0' : '100%';
        b.style.opacity = open ? '1' : '0';
        b.style.pointerEvents = open ? 'auto' : 'none';
        document.body.style.overflow = open ? 'hidden' : '';
        const btn = document.querySelector('[aria-controls="mobile-menu"]');
        if (btn) btn.setAttribute('aria-expanded', open);
    };
    window.toggleMenu = function () {
        setMenu(!menuOpen);
    };
    setMenu(false);
    document.getElementById('mobile-menu').addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
})();
