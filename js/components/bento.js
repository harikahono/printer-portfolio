/* ===== ALUR — request quote slip ===== */
window.App = window.App || {};
window.App.components = window.App.components || {};

App.components.bento = function () {
    return `
<section data-reveal class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto mt-16" id="alur-pemesanan">
    <div class="grid lg:grid-cols-[.8fr_1.2fr] gap-4 items-stretch">
        <div data-reveal data-reveal-delay="1" class="bg-[#D4DC24] rounded-[2rem] rounded-br-[3rem] p-6 sm:p-8 flex flex-col justify-between">
            <div>
                <h2 class="font-anton text-3xl sm:text-5xl leading-[.95] text-[#1E2412]">REQUEST QUOTE<br>WORK ORDER</h2>
                <p class="text-sm/6 text-[#1E2412]/70 mt-4">Format singkat: kirim brief, cek spesifikasi, setujui estimasi, lalu produksi jalan.</p>
            </div>
            <a href="https://wa.me/6285885928506?text=Halo%20Anugerah%20Printer,%20saya%20ingin%20request%20penawaran%20harga" target="_blank" rel="noopener" class="mt-8 inline-flex w-max items-center gap-2 bg-[#1E2412] text-white rounded-full px-5 py-3 text-sm font-bold">Minta Quote <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></a>
        </div>

        <div data-reveal data-reveal-delay="2" class="bg-[#EFECD8] border border-[#1E2412]/10 rounded-[2rem] rounded-tl-[3rem] p-5 sm:p-6">
            <div class="flex items-center justify-between border-b border-[#1E2412]/10 pb-3">
                <span class="font-bold tracking-[.14em] text-[11px] text-[#62684A]">ANUGRAH / JOB SLIP</span>
                <span class="rounded-full bg-white px-3 py-1 text-[10px] font-extrabold text-[#1E2412]">FREE CONSULTATION</span>
            </div>
            <div class="divide-y divide-[#1E2412]/10">
                <div class="grid sm:grid-cols-[64px_1fr] gap-3 py-4"><span class="font-anton text-3xl text-[#1E2412]/20">01</span><div><h3 class="font-bold text-[#1E2412]">Kirim brief via WhatsApp</h3><p class="text-sm/5 text-[#62684A] mt-1">Ceritakan produk, ukuran, jumlah, bahan, dan deadline.</p></div></div>
                <div class="grid sm:grid-cols-[64px_1fr] gap-3 py-4"><span class="font-anton text-3xl text-[#1E2412]/20">02</span><div><h3 class="font-bold text-[#1E2412]">Kami cek file & spesifikasi</h3><p class="text-sm/5 text-[#62684A] mt-1">Tim desain bantu review supaya siap produksi.</p></div></div>
                <div class="grid sm:grid-cols-[64px_1fr] gap-3 py-4"><span class="font-anton text-3xl text-[#1E2412]/20">03</span><div><h3 class="font-bold text-[#1E2412]">Estimasi disetujui dulu</h3><p class="text-sm/5 text-[#62684A] mt-1">Biaya mengikuti bahan, ukuran, finishing, volume, dan deadline.</p></div></div>
                <div class="grid sm:grid-cols-[64px_1fr] gap-3 py-4"><span class="font-anton text-3xl text-[#1E2412]/20">04</span><div><h3 class="font-bold text-[#1E2412]">Produksi jalan</h3><p class="text-sm/5 text-[#62684A] mt-1">Ambil di Pondok Labu atau kirim sesuai kesepakatan.</p></div></div>
            </div>
        </div>
    </div>
</section>
`;
};
