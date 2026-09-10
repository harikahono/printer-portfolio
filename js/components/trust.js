/* ===== TESTIMONI / LOGO KLIEN ===== */
window.App = window.App || {};
window.App.components = window.App.components || {};

App.components.trust = function () {
    const clients = [
        { name: "Bukalapak", img: "assets/CLIENTS/bukalapak.webp" },
        { name: "G4S", img: "assets/CLIENTS/g4s.webp" },
        { name: "OK Bank", img: "assets/CLIENTS/ok-bank.webp" },
        { name: "The Energy", img: "assets/CLIENTS/the-energy.webp" },
        { name: "Standarpen Indonesia", img: "assets/CLIENTS/standarpen.webp" },
        { name: "Paxel", img: "assets/CLIENTS/paxel.webp" },
        { name: "Avrist Insurance", img: "assets/CLIENTS/avrist.webp" },
        { name: "Ramayana Insurance", img: "assets/CLIENTS/ramayana.webp" },
        { name: "Glico Manufacturing", img: "assets/CLIENTS/glico.webp" },
        { name: "Pos Indonesia", img: "assets/CLIENTS/pos-indonesia.webp" },
    ];
    return `
<section data-reveal class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto mt-16">
    <h2 class="font-anton text-3xl sm:text-4xl text-[#1E2412]">DIPERCAYA BERBAGAI KLIEN</h2>
    <p class="text-sm/5 text-[#62684A] mt-2">Dan ratusan klien lainnya dari berbagai industri di Jakarta dan sekitarnya.</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-6">
        ${clients.map(c => `<div class="h-20 rounded-2xl border border-[#1E2412]/10 bg-white flex items-center justify-center p-3"><img src="${c.img}" alt="${c.name}" loading="lazy" class="max-h-12 max-w-full w-auto object-contain"></div>`).join('')}
    </div>
    <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-white border border-[#1E2412]/10 rounded-3xl p-6"><p class="text-sm/6 text-[#62684A]">"Hasil cetak offset sangat presisi dan rapi. Tim responsif dan harga kompetitif."</p><p class="text-xs font-bold text-[#1E2412] mt-3">PT Contoh — Corporate Client</p></div>
        <div class="bg-[#1E2412] text-white rounded-3xl p-6"><p class="text-sm/6 text-white/80">"Pengerjaan cepat dan kualitas merchandise bagus. Recommended untuk branding!"</p><p class="text-xs font-bold mt-3">Brand Contoh — Merchandise Order</p></div>
    </div>
</section>
`;
};
