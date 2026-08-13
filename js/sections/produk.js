/* ===== KOMPONEN: BARIS PRODUK (BARU TIBA + PALING LARIS) ===== */
window.App = window.App || {};
window.App.sections = window.App.sections || {};

App.sections.produk = function () {
    return App.data.produkRows.map(r => `
<!-- ===== ${r.title} ===== -->
<section class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto mt-16" id="${r.sec}">
    <div class="flex items-end justify-between gap-4">
        <h2 class="font-anton text-4xl/10 sm:text-5xl/14">${r.title}</h2>
        <a href="#" class="inline-flex items-center gap-2 text-sm/4 font-bold text-[#F1BF0A] hover:text-[#090909] transition-colors">Lihat Semua
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
    </div>
    <div class="relative mt-6">
        <button class="scroll-btn left" onclick="scrollRow('${r.row}',-1)" aria-label="Geser kiri">‹</button>
        <div class="scroll-row" id="${r.row}"></div>
        <button class="scroll-btn right" onclick="scrollRow('${r.row}',1)" aria-label="Geser kanan">›</button>
    </div>
</section>
`).join('');
};
