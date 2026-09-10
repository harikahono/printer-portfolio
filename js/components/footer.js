/* ===== KOMPONEN: FOOTER ===== */
window.App = window.App || {};
window.App.components = window.App.components || {};

App.components.footer = function () {
    const isSub = /\/(layanan|portofolio|tentang-kami|kontak)(\/|$)/.test(location.pathname);
    const root = isSub ? '../' : '';
    const href = {
        "Digital Printing": `${root}layanan/#indoor-outdoor`,
        "Sticker & Label": `${root}layanan/#indoor-outdoor`,
        "Large Format": `${root}layanan/#indoor-outdoor`,
        "Merchandise": `${root}layanan/#merchandise`,
        "Profil Perusahaan": `${root}tentang-kami/`,
        "Karir": `${root}kontak/`,
        "Blog": `${root}tentang-kami/`,
        "Hubungi Kami": `${root}kontak/`,
        "Cara Pesan": `${root}#alur-pemesanan`,
        "Lacak Pesanan": `https://wa.me/6285885928506?text=Halo%20Anugerah%20Printer,%20saya%20ingin%20cek%20status%20pesanan`,
        "Metode Pembayaran": `${root}kontak/`,
        "FAQ": `${root}kontak/`,
    };
    const cols = Object.entries(App.data.footer).map(([title, links]) => `
        <div>
            <h5 class="text-sm/4 font-bold mb-4">${title}</h5>
            <ul class="space-y-2.5 text-xs/4 text-white/60">
                ${links.map(l => `<li><a href="${href[l]}" class="inline-flex min-h-11 items-center hover:text-[#D4DC24] transition-colors">${l}</a></li>`).join('')}
            </ul>
        </div>`).join('');

    return `
<!-- ===== FOOTER ===== -->
<footer class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto bg-[#1E2412] text-white px-4 sm:px-9.5 pb-4 mt-16 pt-6 sm:pt-10 rounded-t-4xl relative z-0 overflow-hidden">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
        <div class="col-span-2 md:col-span-1">
            <a href="${root}index.html" class="inline-flex min-h-11 items-center"><img src="${root}assets/logoanugerah.png" alt="Anugerah Printer" class="h-8 w-auto object-contain bg-white rounded-md p-0.5"></a>
            <p class="text-sm/5 text-white/60 mt-3 max-w-56">Solusi percetakan terpercaya sejak 2010. Spesialis offset, digital printing, dan merchandise custom.</p>
        </div>
        ${cols}
    </div>
    <div class="border-t border-white/20 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex gap-2.5">
            <a href="https://instagram.com/anugerahdigitalprinter" target="_blank" rel="noopener" aria-label="Instagram" class="size-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4DC24] hover:text-[#1E2412] transition-colors"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
            <a href="https://wa.me/6285885928506" target="_blank" rel="noopener" aria-label="WhatsApp" class="size-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4DC24] hover:text-[#1E2412] transition-colors"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L9 10.66a16 16 0 0 0 4.34 4.34l1.22-1.22a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z"/></svg></a>
            <a href="https://www.google.com/maps/search/Jl.+H.+Ipin+No.+5+Pondok+Labu" target="_blank" rel="noopener" aria-label="Google Maps" class="size-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4DC24] hover:text-[#1E2412] transition-colors"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg></a>
        </div>
        <p class="text-xs/4 text-white/50 text-center sm:text-left">© 2026 Anugerah Printer · Jl. H. Ipin No. 5, Pondok Labu, Jakarta Selatan</p>
        <p class="text-xs/4 text-white/50">Privacy Policy · Terms · ID / EN</p>
    </div>
</footer>
`;
};
