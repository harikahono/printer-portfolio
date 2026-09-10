/* ===== TESTIMONI / LOGO KLIEN ===== */
window.App = window.App || {};
window.App.components = window.App.components || {};

App.components.trust = function () {
    const clients = [
        { name: "Bukalapak", img: "assets/CLIENTS/bukalapak.webp", url: "https://bukalapak.com" },
        { name: "G4S", img: "assets/CLIENTS/g4s.webp", url: "https://g4sindonesia.com" },
        { name: "OK Bank", img: "assets/CLIENTS/ok-bank.webp", url: "https://okbank.co.id" },
        { name: "The Energy", img: "assets/CLIENTS/the-energy.webp", url: "https://theenergy.co.id" },
        { name: "Standarpen Indonesia", img: "assets/CLIENTS/standarpen.webp", url: "https://standardpen.id" },
        { name: "Paxel", img: "assets/CLIENTS/paxel.webp", url: "https://paxel.co" },
        { name: "Avrist Insurance", img: "assets/CLIENTS/avrist.webp", url: "https://avrist.com" },
        { name: "Ramayana Insurance", img: "assets/CLIENTS/ramayana.webp", url: "https://asuransiramayana.co.id" },
        { name: "Glico Manufacturing", img: "assets/CLIENTS/glico.webp", url: "https://www.glico.com" },
        { name: "Pos Indonesia", img: "assets/CLIENTS/pos-indonesia.webp", url: "https://posindonesia.co.id" },
    ];
    const card = (c, hidden) => `<a href="${c.url}" target="_blank" rel="noopener"${hidden ? ' tabindex="-1" aria-hidden="true"' : ''} class="logo-card"><img src="${c.img}" alt="${hidden ? '' : c.name}" loading="lazy"></a>`;
    return `
<section data-reveal class="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto mt-16">
    <h2 class="font-anton text-3xl sm:text-4xl text-[#1E2412]">DIPERCAYA BERBAGAI KLIEN</h2>
    <p class="text-sm/5 text-[#62684A] mt-2">Dan ratusan klien lainnya dari berbagai industri di Jakarta dan sekitarnya.</p>
    <div class="logo-marquee mt-6">
        <div class="logo-track">
            ${clients.map(c => card(c, false)).join('')}${clients.map(c => card(c, true)).join('')}
        </div>
    </div>
</section>
`;
};
