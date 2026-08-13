/* ===== KOMPONEN: NEWSLETTER ===== */
window.App = window.App || {};
window.App.sections = window.App.sections || {};

App.sections.newsletter = function () {
    return `
<!-- ===== NEWSLETTER ===== -->
<div class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto bg-[#183fad] text-white mt-16 rounded-4xl px-6 sm:px-10 py-8 sm:py-10">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
            <h3 class="font-anton text-3xl sm:text-4xl">DAPETIN PROMO & TIPS DESAIN TIAP MINGGU</h3>
            <p class="text-white/70 text-sm/5 mt-1.5">Newsletter singkat, gak spam — janji.</p>
        </div>
        <form class="flex bg-white rounded-full p-1.5 max-w-md w-full lg:w-auto lg:min-w-80" onsubmit="return false;">
            <input type="email" placeholder="Email kamu" required class="flex-1 min-w-0 bg-transparent border-none outline-none px-4 text-sm/4 text-[#090909] placeholder:text-[#090909]/40" />
            <button type="submit" class="bg-[#F1BF0A] text-[#090909] font-bold text-sm/4 px-6 py-3 rounded-full shrink-0 hover:bg-[#e0a800] transition-colors">Langganan</button>
        </form>
    </div>
</div>
`;
};
