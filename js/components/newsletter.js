/* ===== CTA AKHIR ===== */
window.App = window.App || {};
window.App.components = window.App.components || {};

App.components.newsletter = function () {
    return `
<section data-reveal class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto bg-[#D4DC24] mt-16 rounded-4xl px-6 sm:px-10 py-10">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
            <h3 class="font-anton text-3xl sm:text-4xl text-[#1E2412]">SIAP MENCETAK KEBUTUHAN BISNIS ANDA?</h3>
            <p class="text-[#1E2412]/70 text-sm/5 mt-1.5 max-w-xl">Hubungi tim kami untuk diskusi produk dan estimasi harga yang pas di kantong. Konsultasi gratis!</p>
        </div>
        <div class="flex flex-wrap gap-3">
            <a href="https://wa.me/6285885928506?text=Halo%20Anugerah%20Printer%2C%20saya%20ingin%20konsultasi%20gratis%20tentang%20kebutuhan%20cetak%20bisnis%3A%0AKebutuhan%3A%20%0ANama%3A%20" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-[#1E2412] text-white rounded-full py-3 px-6 font-bold hover:bg-black transition-colors">Chat via WhatsApp Sekarang</a>
            <a href="portofolio/" class="inline-flex items-center gap-2 bg-white text-[#1E2412] rounded-full py-3 px-6 font-bold border border-[#1E2412]/10 hover:border-[#1E2412] transition-colors">Lihat Portofolio Kami</a>
        </div>
    </div>
</section>
`;
};
