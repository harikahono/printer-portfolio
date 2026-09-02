/* ===== TESTIMONI / LOGO PLACEHOLDER ===== */
window.App = window.App || {};
window.App.components = window.App.components || {};

App.components.trust = function () {
    return `
<section data-reveal class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto mt-16">
    <h2 class="font-anton text-3xl sm:text-4xl text-[#1E2412]">DIPERCAYA BERBAGAI KLIEN</h2>
    <p class="text-sm/5 text-[#62684A] mt-2">Dan ratusan klien lainnya — placeholder logo, ganti dengan logo klien real bila tersedia.</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
        ${[1,2,3,4,5,6].map(() => `<div class="h-20 rounded-2xl border border-dashed border-[#1E2412]/15 bg-white flex items-center justify-center text-xs font-bold tracking-widest text-[#62684A]/50">LOGO</div>`).join('')}
    </div>
    <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-white border border-[#1E2412]/10 rounded-3xl p-6"><p class="text-sm/6 text-[#62684A]">"Hasil cetak offset sangat presisi dan rapi. Tim responsif dan harga kompetitif."</p><p class="text-xs font-bold text-[#1E2412] mt-3">PT Contoh — Corporate Client</p></div>
        <div class="bg-[#1E2412] text-white rounded-3xl p-6"><p class="text-sm/6 text-white/80">"Pengerjaan cepat dan kualitas merchandise bagus. Recommended untuk branding!"</p><p class="text-xs font-bold mt-3">Brand Contoh — Merchandise Order</p></div>
    </div>
</section>
`;
};
