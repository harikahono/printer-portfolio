/* ===== KOMPONEN: NAVBAR ===== */
window.App = window.App || {};
window.App.components = window.App.components || {};

App.components.nav = function () {
    const isSub = /\/(layanan|portofolio|tentang-kami|kontak)(\/|$)/.test(location.pathname);
    const home = isSub ? '../index.html' : '';
    const root = isSub ? '../' : '';
    return `
<!-- ===== NAVBAR ===== -->
<nav class="flex items-stretch justify-between max-w-7xl 2xl:max-w-[1440px] w-full mx-auto relative z-10">
    <a href="${home || 'index.html'}" class="flex items-center shrink-0 bg-[#EFECD8] px-5 rounded-br-4xl relative after:content-[''] after:absolute after:bg-[#D4DC24] after:w-1/2 after:h-1/2 after:-bottom-1 after:-right-1 after:z-[-1] self-stretch">
        <img src="${root}assets/logoanugerah.png" alt="Anugerah Printer" class="h-16 sm:h-20 w-auto object-contain">
    </a>

    <div class="flex items-center gap-4 flex-1 bg-[#D4DC24] text-[#1E2412] p-3.5 rounded-t-4xl">
        <ul class="hidden md:flex items-center gap-5 py-2.5 text-sm/6 font-medium ml-4">
            <li><a href="${root}layanan/" class="hover:text-white transition-colors">Layanan</a></li>
            <li><a href="${root}portofolio/" class="hover:text-white transition-colors">Portofolio</a></li>
            <li><a href="${root}tentang-kami/" class="hover:text-white transition-colors">Tentang Kami</a></li>
            <li><a href="${root}kontak/" class="hover:text-white transition-colors">Kontak</a></li>
        </ul>

        <div class="flex items-center gap-4 ml-auto">
        <button type="button" class="md:hidden size-11 flex items-center justify-center cursor-pointer rounded" onclick="toggleMenu()" aria-label="Buka Menu" aria-expanded="false" aria-controls="mobile-menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9 text-[#1E2412]">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
            </svg>
        </button>

        <a href="https://wa.me/6285885928506?text=Halo%20Anugerah%20Printer,%20saya%20ingin%20konsultasi%20tentang%20produk%20cetak" target="_blank" rel="noopener" class="hidden min-[480px]:flex items-center gap-2 bg-[#1E2412] rounded-full py-1.5 pl-1.5 pr-4 text-white whitespace-nowrap relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1.5 after:rounded-full after:bg-white after:h-9 after:w-9 hover:after:w-full after:transition-[width] after:duration-1600 after:ease-[linear(0,0.029_0.8%,0.13_1.8%,0.908_7.2%,1.051_9.1%,1.112_11.2%,1.116_12.2%,1.106_13.4%,1.007_19.5%,0.987_23.1%,1.001_35%,1)] overflow-hidden hover:after:h-full hover:after:left-0 hover:text-[#1E2412]">
            <div class="bg-white text-[#1E2412] rounded-full p-1.5 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>
            <span class="relative z-10">Hubungi via WhatsApp</span>
        </a>
        </div>
    </div>
</nav>

<!-- ===== MENU MOBILE (DRAWER) ===== -->
<div id="menu-backdrop" class="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" onclick="toggleMenu()" aria-hidden="true"></div>
<aside id="mobile-menu" class="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-[#1E2412] text-white rounded-l-4xl shadow-2xl transition-transform duration-300 flex flex-col md:hidden" style="translate: 100%" aria-label="Menu navigasi">
    <div class="flex items-center justify-between p-5 border-b border-white/10 shrink-0">
        <a href="${home || 'index.html'}" class="flex items-center">
            <img src="${root}assets/logoanugerah.png" alt="Anugerah Printer" class="h-7 w-auto object-contain">
        </a>
        <button type="button" class="size-11 rounded-full bg-white/10 hover:bg-[#D4DC24] hover:text-[#1E2412] transition-colors flex items-center justify-center" onclick="toggleMenu()" aria-label="Tutup menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
    </div>
    <nav class="flex flex-col px-5 pt-4 gap-1 shrink-0">
        <a href="${root}layanan/" class="font-anton text-2xl py-2.5 border-b border-white/10 hover:text-[#D4DC24] transition-colors">Layanan</a>
        <a href="${root}portofolio/" class="font-anton text-2xl py-2.5 border-b border-white/10 hover:text-[#D4DC24] transition-colors">Portofolio</a>
        <a href="${root}tentang-kami/" class="font-anton text-2xl py-2.5 border-b border-white/10 hover:text-[#D4DC24] transition-colors">Tentang Kami</a>
        <a href="${root}kontak/" class="font-anton text-2xl py-2.5 border-b border-white/10 hover:text-[#D4DC24] transition-colors">Kontak</a>
    </nav>
    <div class="mt-auto p-5 shrink-0">
        <a href="https://wa.me/6285885928506?text=Halo%20Anugerah%20Printer,%20saya%20ingin%20konsultasi%20tentang%20produk%20cetak" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 bg-[#D4DC24] rounded-full py-3 text-[#1E2412] font-bold text-sm hover:bg-[#c2c51f] transition-colors">Hubungi via WhatsApp
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
        </a>
    </div>
</aside>
`;
};
