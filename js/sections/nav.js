/* ===== KOMPONEN: NAVBAR ===== */
window.App = window.App || {};
window.App.sections = window.App.sections || {};

App.sections.nav = function () {
    return `
<!-- ===== NAVBAR ===== -->
<nav class="flex items-stretch justify-between max-w-7xl 2xl:max-w-[1440px] w-full mx-auto relative z-10">
    <div class="flex items-center gap-1.5 bg-white px-5 rounded-br-4xl relative after:content-[''] after:absolute after:bg-[#183fad] after:w-1/2 after:h-1/2 after:-bottom-1 after:-right-1 after:z-[-1] self-stretch w-full max-w-48">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="6" fill="#F1BF0A" />
            <rect x="11" y="13" width="18" height="11" rx="1.5" fill="#090909"/>
            <rect x="7" y="24.5" width="26" height="3.5" rx="1.75" fill="#090909"/>
            <rect x="14" y="16" width="7" height="5.5" rx="0.75" fill="#F1BF0A"/>
            <circle cx="25" cy="17.5" r="1.5" fill="#F1BF0A"/>
        </svg>
        <span class="font-anton select-none whitespace-nowrap">PRIMACETAK</span>
    </div>

    <div class="flex items-center gap-4 flex-1 bg-[#183fad] text-white p-3.5 rounded-t-4xl">
        <ul class="hidden md:flex items-center gap-5 py-2.5 text-sm/6 font-medium">
            <li><a href="#produk" class="hover:text-[#F1BF0A] transition-colors">Produk</a></li>
            <li class="relative group">
                <a href="#kategori" class="hover:text-[#F1BF0A] transition-colors inline-flex items-center gap-1">Kategori
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"/></svg>
                </a>
                <div class="absolute left-0 top-full pt-4 hidden group-hover:block z-50 min-w-52">
                    <div class="bg-white rounded-2xl shadow-[0_18px_40px_-16px_rgba(19,35,74,.35)] p-2 text-[#183fad] text-sm/5 font-semibold">
                        ${App.data.navKategori.map(l => `<a href="#" class="block px-3.5 py-2 rounded-xl hover:bg-[#e9ecf6] transition-colors">${l}</a>`).join('')}
                    </div>
                </div>
            </li>
            <li><a href="#best-seller" class="hover:text-[#F1BF0A] transition-colors">Best Seller</a></li>
            <li><a href="#blog" class="hover:text-[#F1BF0A] transition-colors">Blog</a></li>
        </ul>

        <div class="flex items-center gap-4 ml-auto">
        <button type="button" class="md:hidden cursor-pointer rounded" onclick="toggleMenu()" aria-label="Buka Menu" aria-expanded="false" aria-controls="mobile-menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9 text-[#F1BF0A]">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
            </svg>
        </button>

        <div class="hidden xl:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 min-w-0 w-44">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-4 shrink-0 opacity-70"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Cari produk cetak..." class="bg-transparent text-xs/4 placeholder:text-white/50 outline-none w-full min-w-0" />
        </div>

        <a href="#" class="relative flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-[#F1BF0A] hover:text-[#090909] transition-colors" aria-label="Keranjang">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
            <span class="absolute -top-1 -right-1 bg-[#F1BF0A] text-[#090909] text-[.6rem] font-bold size-4 rounded-full flex items-center justify-center">3</span>
        </a>

        <a href="#produk" class="hidden min-[480px]:flex items-center gap-2 bg-[#F1BF0A] rounded-full py-1.5 pl-1.5 pr-4 text-[#090909] whitespace-nowrap relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1.5 after:rounded-full after:bg-white after:h-9 after:w-9 hover:after:w-full after:transition-[width] after:duration-1600 after:ease-[linear(0,0.029_0.8%,0.13_1.8%,0.908_7.2%,1.051_9.1%,1.112_11.2%,1.116_12.2%,1.106_13.4%,1.007_19.5%,0.987_23.1%,1.001_35%,1)] overflow-hidden hover:after:h-full hover:after:left-0">
            <div class="rounded-full p-1.5 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>
            <span class="relative z-10">Mulai Belanja</span>
        </a>
        </div>
    </div>
</nav>

<!-- ===== MENU MOBILE (DRAWER) ===== -->
<div id="menu-backdrop" class="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" onclick="toggleMenu()" aria-hidden="true"></div>
<aside id="mobile-menu" class="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-[#183fad] text-white rounded-l-4xl shadow-2xl transition-transform duration-300 flex flex-col md:hidden" style="translate: 100%" aria-label="Menu navigasi">
    <div class="flex items-center justify-between p-5 border-b border-white/10 shrink-0">
        <a href="#" class="flex items-center gap-2 font-anton text-lg">
            <span class="size-8 rounded-lg bg-[#F1BF0A] flex items-center justify-center text-[#090909] text-sm">PC</span>PRIMACETAK
        </a>
        <button type="button" class="size-10 rounded-full bg-white/10 hover:bg-[#F1BF0A] hover:text-[#090909] transition-colors flex items-center justify-center" onclick="toggleMenu()" aria-label="Tutup menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
    </div>
    <nav class="flex flex-col px-5 pt-4 gap-1 shrink-0">
        <a href="#produk" class="font-anton text-2xl py-2.5 border-b border-white/10 hover:text-[#F1BF0A] transition-colors">Produk</a>
        <a href="#best-seller" class="font-anton text-2xl py-2.5 border-b border-white/10 hover:text-[#F1BF0A] transition-colors">Best Seller</a>
        <a href="#blog" class="font-anton text-2xl py-2.5 border-b border-white/10 hover:text-[#F1BF0A] transition-colors">Blog</a>
    </nav>
    <div class="px-5 pt-5 shrink-0">
        <p class="text-[#F1BF0A] text-[.7rem] font-bold tracking-[.14em] uppercase mb-3">Kategori</p>
        <div class="grid grid-cols-2 gap-2">
            ${App.data.navKategori.map(l => `<a href="#kategori" class="bg-white/10 hover:bg-white/20 rounded-xl px-3 py-2 text-sm/4 transition-colors">${l}</a>`).join('')}
        </div>
    </div>
    <div class="mt-auto p-5 shrink-0">
        <a href="#produk" class="flex items-center justify-center gap-2 bg-[#F1BF0A] rounded-full py-3 text-[#090909] font-bold text-sm hover:bg-[#e0a800] transition-colors">Mulai Belanja
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
        </a>
    </div>
</aside>
`;
};
