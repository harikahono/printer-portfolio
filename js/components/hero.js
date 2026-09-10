/* ===== KOMPONEN: HERO ===== */
window.App = window.App || {};
window.App.components = window.App.components || {};

App.components.hero = function () {
    return `
<!-- ===== HERO ===== -->
<header data-reveal class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto bg-[#D4DC24] text-[#1E2412] p-8 sm:p-14 rounded-tl-4xl rounded-b-4xl relative z-0 overflow-hidden">
    <span aria-hidden="true" class="font-anton absolute top-6 left-0 text-[9rem] lg:text-[13rem] leading-none text-[#1E2412]/[0.07] select-none pointer-events-none whitespace-nowrap z-0">ANUGRAH PRINTER</span>
    <!-- <img src="assets/ANUGERAH/hero-mesin-cetak.webp" alt="Mesin cetak offset di workshop Anugerah Printer" class="hidden lg:block absolute top-3 right-10 w-[56%] aspect-[10/7] object-cover"> -->
    <div class="grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-center relative z-10">
        <div class="flex flex-col">
            <h1 class="font-anton text-4xl/10 sm:text-5xl/14 lg:text-6xl/16 text-[#1E2412]">CETAK OFFSET, DIGITAL, DAN MERCHANDISE DI PONDOK LABU.</h1>
            <p class="mt-4 mb-8 text-[#1E2412]/70 max-w-md text-sm/6 sm:text-base/7">Kirim brief lewat WhatsApp atau datang ke workshop. Tim internal bantu cek file, bahan, finishing, dan estimasi harga.</p>
            <div class="flex flex-wrap items-center gap-4">
                <a href="https://wa.me/6285885928506?text=Halo%20Anugerah%20Printer,%20saya%20ingin%20konsultasi%20tentang%20produk%20cetak" target="_blank" rel="noopener" class="flex items-center gap-2 bg-[#1E2412] rounded-full py-1.5 pl-1.5 pr-4 text-white whitespace-nowrap relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1.5 after:rounded-full after:bg-white after:h-9 after:w-9 hover:after:w-full after:transition-[width] after:duration-1600 after:ease-[linear(0,0.029_0.8%,0.13_1.8%,0.908_7.2%,1.051_9.1%,1.112_11.2%,1.116_12.2%,1.106_13.4%,1.007_19.5%,0.987_23.1%,1.001_35%,1)] overflow-hidden hover:after:h-full hover:after:left-0 hover:text-[#1E2412] transition-colors">
                    <div class="bg-white text-[#1E2412] rounded-full p-1.5 relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                    <span class="relative z-10">Minta Quote via WhatsApp</span>
                </a>
                <a href="#kategori" class="inline-flex min-h-11 items-center gap-2 rounded-full py-2.5 px-6 text-sm/4 font-bold border-2 border-[#1E2412]/20 hover:border-[#1E2412] hover:bg-[#1E2412] hover:text-white transition-colors">Lihat Layanan Kami</a>
            </div>
            <div class="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#1E2412] rounded-2xl p-4 text-white max-w-xl">
                <div>
                    <span class="font-anton text-2xl sm:text-3xl block">10+</span>
                    <span class="text-[.68rem] sm:text-xs/4 font-medium text-white/70">Beroperasi Sejak 2010</span>
                </div>
                <div class="border-l-2 border-white/20 pl-3">
                    <span class="font-anton text-xl sm:text-2xl block">09.00 – 21.00</span>
                    <span class="text-[.68rem] sm:text-xs/4 font-medium text-white/70">Senin–Sabtu</span>
                </div>
                <div class="border-l-2 border-white/20 pl-3">
                    <span class="font-anton text-2xl sm:text-3xl block">In-House</span>
                    <span class="text-[.68rem] sm:text-xs/4 font-medium text-white/70">Tim Desain & Produksi</span>
                </div>
                <div class="border-l-2 border-white/20 pl-3">
                    <span class="font-anton text-2xl sm:text-3xl block">Direct</span>
                    <span class="text-[.68rem] sm:text-xs/4 font-medium text-white/70">Supplier Kertas & Bahan Baku</span>
                </div>
            </div>
        </div>
    </div>
</header>
`;
};

/* ===== PREVIEW LAYANAN — folder stack (anti monoton) ===== */
App.components.features = function () {
    return `
<section data-reveal class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto mt-16">
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
            <h2 class="font-anton text-3xl sm:text-4xl text-[#1E2412]">LAYANAN PRINTING KOMPREHENSIF</h2>
            <p class="text-sm/5 text-[#62684A] mt-2 max-w-xl">Pilih jenis pekerjaan, lalu kirim spesifikasi untuk estimasi bahan, jumlah, dan finishing.</p>
        </div>
        <a href="layanan/" class="inline-flex min-h-11 items-center gap-2 text-sm/4 font-bold text-[#1E2412] hover:text-[#62684A] transition-colors">Lihat Semua Layanan
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
    </div>

    <!-- folder stack: hero folder + stacked tabs -->
    <div class="grid lg:grid-cols-[1.35fr_.65fr] gap-4 mt-6">
        <!-- main folder: Offset -->
        <a href="layanan/#offset" class="group relative bg-[#1E2412] text-white rounded-[2rem] rounded-tl-[2.5rem] p-7 sm:p-8 overflow-hidden flex flex-col min-h-[340px] hover:-translate-y-1 transition-transform">
            <div class="flex items-start justify-between gap-4">
                <div class="size-11 rounded-2xl bg-[#D4DC24] text-[#1E2412] flex items-center justify-center shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
                <span class="text-[11px] font-bold tracking-[.14em] uppercase bg-white/10 rounded-full px-3 py-1.5">Paling Dicari</span>
            </div>
            <h3 class="font-anton text-3xl sm:text-[2rem] leading-none mt-6">CETAK OFFSET</h3>
            <p class="text-sm/6 text-white/70 mt-3 max-w-md">Buku, majalah, katalog, brosur, amplop, kalender, kop surat, dan map folder. Cocok untuk cetak volume besar.</p>
            <div class="mt-auto flex items-center gap-2 text-sm font-bold">Lihat Detail <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></div>
            <span aria-hidden="true" class="pointer-events-none absolute -right-6 -bottom-8 font-anton text-[7rem] leading-none text-white/[0.06] select-none">OFFSET</span>
        </a>

        <!-- stacked tabs -->
        <div class="flex flex-col gap-4">
            <a href="layanan/#indoor-outdoor" class="group bg-white border border-[#1E2412]/10 rounded-3xl rounded-tr-[1.75rem] p-5 flex gap-4 items-start hover:border-[#D4DC24] hover:-translate-y-0.5 transition-all">
                <div class="size-11 rounded-2xl bg-[#EFECD8] text-[#1E2412] flex items-center justify-center shrink-0 group-hover:bg-[#D4DC24] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg></div>
                <div><h3 class="font-bold text-[#1E2412] text-sm">Indoor/Outdoor Printing</h3><p class="text-xs/5 text-[#62684A] mt-1">Spanduk Flexi, Roll Up, X Banner, Stiker, Kanvas</p></div>
            </a>
            <a href="layanan/#merchandise" class="group bg-white border border-[#1E2412]/10 rounded-3xl p-5 flex gap-4 items-start hover:border-[#D4DC24] hover:-translate-y-0.5 transition-all">
                <div class="size-11 rounded-2xl bg-[#D4DC24] text-[#1E2412] flex items-center justify-center shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h12l4 4-4 4H6z"/><path d="M6 10v8a2 2 0 0 0 2 2h8"/><path d="M12 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg></div>
                <div><h3 class="font-bold text-[#1E2412] text-sm">Merchandise & DTF</h3><p class="text-xs/5 text-[#62684A] mt-1">Mug, Tumbler, Payung, Kaos DTF, Goodie Bag</p></div>
            </a>
            <a href="layanan/#uv-printing" class="group bg-[#D4DC24] rounded-3xl rounded-br-[1.75rem] p-5 flex gap-4 items-start hover:-translate-y-0.5 transition-transform">
                <div class="size-11 rounded-2xl bg-[#1E2412] text-white flex items-center justify-center shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z"/><path d="M9 12l2 2 4-4"/></svg></div>
                <div><h3 class="font-bold text-[#1E2412] text-sm">UV Printing & Custom</h3><p class="text-xs/5 text-[#1E2412]/70 mt-1">Cetak di media kayu, akrilik, kaca, dan produk custom lain.</p></div>
            </a>
        </div>
    </div>
</section>
`;
};
