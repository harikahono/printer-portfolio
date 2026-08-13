/* ===== KOMPONEN: HERO ===== */
window.App = window.App || {};
window.App.sections = window.App.sections || {};

App.sections.hero = function () {
    return `
<!-- ===== HERO ===== -->
<header class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto bg-[#183fad] text-white p-8 sm:p-14 rounded-tl-4xl rounded-b-4xl relative z-0 overflow-hidden">
    <span aria-hidden="true" class="font-anton absolute top-6 left-0 text-[9rem] lg:text-[13rem] leading-none text-[#4565bc]/45 select-none pointer-events-none whitespace-nowrap z-0">PRIMACETAK</span>
    <img src="assets/hero.webp" alt="Produksi in-house" class="hidden lg:block absolute top-3 right-10 w-[56%] aspect-[10/7] object-cover">
    <div class="grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-center relative z-10">
        <div class="flex flex-col">
            <span class="text-[#F1BF0A] text-xs/4 font-bold tracking-[.14em] uppercase mb-4"><span class="inline-block size-1.5 rounded-full bg-[#F1BF0A] mr-2 align-middle"></span>CETAK CEPAT, HASIL PRESISI</span>
            <h1 class="font-anton text-4xl/10 sm:text-5xl/14 lg:text-6xl/16">SEMUA KEBUTUHAN CETAK LO, <span class="text-[#F1BF0A]">BERES DALAM SATU TEMPAT.</span></h1>
            <p class="mt-4 mb-8 text-white/85 max-w-md text-sm/6 sm:text-base/7">Dari kartu nama sampai spanduk 10 meter — produksi in-house, kontrol kualitas ketat, dan pengiriman ke seluruh Indonesia.</p>
            <div class="flex flex-wrap items-center gap-4">
                <a href="#produk" class="flex items-center gap-2 bg-[#F1BF0A] rounded-full py-1.5 pl-1.5 pr-4 text-[#090909] whitespace-nowrap relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1.5 after:rounded-full after:bg-white after:h-9 after:w-9 hover:after:w-full after:transition-[width] after:duration-1600 after:ease-[linear(0,0.029_0.8%,0.13_1.8%,0.908_7.2%,1.051_9.1%,1.112_11.2%,1.116_12.2%,1.106_13.4%,1.007_19.5%,0.987_23.1%,1.001_35%,1)] overflow-hidden hover:after:h-full hover:after:left-0">
                    <div class="rounded-full p-1.5 relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                    <span class="relative z-10">Mulai Belanja</span>
                </a>
                <a href="#kategori" class="inline-flex items-center gap-2 rounded-full py-2.5 px-6 text-sm/4 font-bold border-2 border-white/40 hover:border-[#F1BF0A] hover:text-[#F1BF0A] transition-colors">Lihat Kategori</a>
            </div>
            <div class="mt-8 grid grid-cols-3 gap-3 bg-[#abb9de] rounded-2xl p-4 text-[#090909] max-w-md">
                <div>
                    <span class="font-anton text-2xl sm:text-3xl block">12.400+</span>
                    <span class="text-[.68rem] sm:text-xs/4 font-medium text-[#13234A]/80">Pesanan selesai</span>
                </div>
                <div class="border-l-2 border-[#183fad]/30 pl-3">
                    <span class="font-anton text-2xl sm:text-3xl block">4.9/5</span>
                    <span class="text-[.68rem] sm:text-xs/4 font-medium text-[#13234A]/80">Rating pelanggan</span>
                </div>
                <div class="border-l-2 border-[#183fad]/30 pl-3">
                    <span class="font-anton text-2xl sm:text-3xl block">1–3 hari</span>
                    <span class="text-[.68rem] sm:text-xs/4 font-medium text-[#13234A]/80">Estimasi produksi</span>
                </div>
            </div>
        </div>
    </div>
</header>
`;
};

/* ===== KOMPONEN: FEATURES ===== */
App.sections.features = function () {
    return `
<!-- ===== FEATURES ===== -->
<div class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
    <div class="flex items-start gap-3.5 bg-[#183fad] text-white rounded-3xl p-4 sm:p-5">
        <div class="size-11 shrink-0 rounded-2xl bg-[#F1BF0A] text-[#090909] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        </div>
        <div><h5 class="text-sm/5 font-bold">Kirim ke seluruh Indonesia</h5><p class="text-[.72rem]/4 text-white/60 mt-1">Partner logistik terpercaya, real-time tracking.</p></div>
    </div>
    <div class="flex items-start gap-3.5 bg-[#183fad] text-white rounded-3xl p-4 sm:p-5">
        <div class="size-11 shrink-0 rounded-2xl bg-[#F1BF0A] text-[#090909] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
        </div>
        <div><h5 class="text-sm/5 font-bold">Kualitas Grade A</h5><p class="text-[.72rem]/4 text-white/60 mt-1">Bahan premium, quality check tiap batch produksi.</p></div>
    </div>
    <div class="flex items-start gap-3.5 bg-[#183fad] text-white rounded-3xl p-4 sm:p-5">
        <div class="size-11 shrink-0 rounded-2xl bg-[#F1BF0A] text-[#090909] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </div>
        <div><h5 class="text-sm/5 font-bold">Harga Grosir Bersaing</h5><p class="text-[.72rem]/4 text-white/60 mt-1">Makin banyak pesan, makin hemat per satuan.</p></div>
    </div>
    <div class="flex items-start gap-3.5 bg-[#183fad] text-white rounded-3xl p-4 sm:p-5">
        <div class="size-11 shrink-0 rounded-2xl bg-[#F1BF0A] text-[#090909] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>
        </div>
        <div><h5 class="text-sm/5 font-bold">Customer Support Siaga</h5><p class="text-[.72rem]/4 text-white/60 mt-1">Tim admin responsif untuk revisi & pertanyaan.</p></div>
    </div>
</div>
`;
};
