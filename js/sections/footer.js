/* ===== KOMPONEN: FOOTER ===== */
window.App = window.App || {};
window.App.sections = window.App.sections || {};

App.sections.footer = function () {
    const cols = Object.entries(App.data.footer).map(([title, links]) => `
        <div>
            <h5 class="text-sm/4 font-bold mb-4">${title}</h5>
            <ul class="space-y-2.5 text-xs/4 text-white/60">
                ${links.map(l => `<li><a href="#" class="hover:text-[#F1BF0A] transition-colors">${l}</a></li>`).join('')}
            </ul>
        </div>`).join('');

    return `
<!-- ===== FOOTER ===== -->
<footer class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto bg-[#183fad] text-white px-4 sm:px-9.5 pb-4 mt-16 pt-6 sm:pt-10 rounded-t-4xl relative z-0 overflow-hidden">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
        <div class="col-span-2 md:col-span-1">
            <a href="#" class="flex items-center gap-2 font-anton text-lg text-white"><span class="size-8 rounded-lg bg-[#F1BF0A] flex items-center justify-center text-[#090909] text-sm">PC</span>PRIMACETAK</a>
            <p class="text-sm/5 text-white/60 mt-3 max-w-56">Solusi cetak dan merchandise untuk bisnis dan personal — dari 1 lembar sampai ribuan pcs, kami sanggup.</p>
        </div>
        ${cols}
    </div>
    <div class="border-t border-white/20 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex gap-2.5">
            <a href="#" aria-label="Instagram" class="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F1BF0A] hover:text-[#090909] transition-colors"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
            <a href="#" aria-label="Facebook" class="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F1BF0A] hover:text-[#090909] transition-colors"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" aria-label="TikTok" class="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F1BF0A] hover:text-[#090909] transition-colors"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
        </div>
        <p class="text-xs/4 text-white/50 text-center sm:text-left">© 2026 PrimaCetak · 0800-1-CETAK · halo@primacetak.id</p>
        <p class="text-xs/4 text-white/50">Privacy Policy · Terms · ID / EN</p>
    </div>
</footer>
`;
};
