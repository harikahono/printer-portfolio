/* ===== PROOF — production capability folder ===== */
window.App = window.App || {};
window.App.components = window.App.components || {};

App.components.produk = function () {
    return `
<section data-reveal class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto mt-16" id="mengapa-kami">
    <div class="relative overflow-hidden rounded-[2rem] rounded-tl-[2.75rem] bg-[#1E2412] text-white p-6 sm:p-8">
        <span aria-hidden="true" class="absolute -right-4 -top-8 font-anton text-[7rem] sm:text-[10rem] leading-none text-white/[0.04]">READY</span>

        <div class="relative z-10 grid lg:grid-cols-[.9fr_1.1fr] gap-8 items-end">
            <div>
                <h2 class="font-anton text-3xl sm:text-5xl leading-[.95]">BUKAN MAKELAR.<br><span class="text-[#D4DC24]">PRODUKSI SENDIRI.</span></h2>
                <p class="text-sm/6 text-white/65 mt-4 max-w-md">Kontrol penuh dari file, bahan, mesin, sampai finishing — jadi diskusi harga tetap realistis tanpa mengorbankan hasil.</p>
            </div>

            <div class="grid gap-2">
                ${['Offset Press','Digital Printing','UV Printing','DTF','Lasercutting','Supplier Kertas'].map((item, i) => `
                <div class="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-white/10 py-2.5 ${i === 0 ? 'border-t-0' : ''}">
                    <span class="font-bold text-sm/4">${item}</span>
                    <span class="rounded-full bg-[#D4DC24] px-3 py-1 text-[10px] font-extrabold tracking-[.12em] text-[#1E2412]">READY</span>
                </div>`).join('')}
            </div>
        </div>

        <div class="relative z-10 mt-7 grid sm:grid-cols-2 gap-3">
            <div class="rounded-2xl bg-white/8 border border-white/10 p-4"><span class="font-anton text-2xl text-[#D4DC24]">FLEKSIBEL</span><p class="text-xs/5 text-white/65 mt-1">Estimasi harga bisa didiskusikan mengikuti volume, bahan, dan finishing.</p></div>
            <div class="rounded-2xl bg-white/8 border border-white/10 p-4"><span class="font-anton text-2xl">BUKA 21.00</span><p class="text-xs/5 text-white/65 mt-1">Konsultasi tetap nyaman setelah jam kantor, Senin sampai Sabtu.</p></div>
        </div>
    </div>
</section>
`;
};
