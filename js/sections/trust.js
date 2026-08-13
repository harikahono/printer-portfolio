/* ===== KOMPONEN: TRUST / CLIENTS (MARQUEE) ===== */
window.App = window.App || {};
window.App.sections = window.App.sections || {};

App.sections.trust = function () {
    const set = App.data.clients.map(c => `<span class="font-anton text-xl text-[#183fad] opacity-30">${c}</span>`).join('');
    return `
<!-- ===== TRUST / CLIENTS ===== -->
<div class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto mt-16">
    <p class="text-center text-[.72rem] font-bold tracking-[.14em] uppercase text-[#4565bc] mb-10">Didukung & digunakan oleh</p>
    <div class="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div class="marquee">
            <div class="marquee-set">
                ${set}
            </div>
            <div class="marquee-set">
                ${set}
            </div>
        </div>
    </div>
</div>
`;
};
