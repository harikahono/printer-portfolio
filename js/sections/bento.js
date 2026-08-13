/* ===== KOMPONEN: BENTO KATEGORI ===== */
window.App = window.App || {};
window.App.sections = window.App.sections || {};

App.sections.bento = function () {
    return `
<!-- ===== BENTO KATEGORI ===== -->
<section class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto mt-16" id="kategori">
    <div class="flex items-end justify-between gap-4">
        <h2 class="font-anton text-4xl/10 sm:text-5xl/14">JELAJAHI KATEGORI</h2>
        <span class="text-sm/4 font-semibold text-[#4565bc]">9 kategori · 200+ produk</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6" style="grid-auto-rows:170px">
        ${App.data.bento.map(b => `
        <div class="bento-tile rounded-3xl overflow-hidden relative text-white p-5 flex flex-col justify-end bg-gradient-to-br from-[${b.from}] to-[${b.to}]${b.big ? ' md:col-span-2 md:row-span-2' : ''} hover:-translate-y-1 transition-transform cursor-pointer">
            <img src="${b.img}" alt="${b.title}" loading="lazy" class="absolute inset-0 w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-[#183fad]/90 via-[#183fad]/45 to-transparent"></div>
            <h4 class="font-anton text-lg${b.big ? ' sm:text-xl' : ''} relative z-10">${b.title}</h4><p class="text-[.72rem]/4 opacity-75 relative z-10">${b.desc}</p>
        </div>`).join('')}
    </div>
</section>
`;
};
