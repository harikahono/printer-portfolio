/* ===== KARTU PRODUK — catalog showcase (no cart/fav) ===== */
window.App = window.App || {};
window.App.components = window.App.components || {};

(function () {
  App.components.productCard = function (p) {
    const isSub = location.pathname.split('/').length > 2;
    const base = isSub ? '../' : '';
    const href = isSub ? 'id-card.html' : 'produk/id-card.html';
    return `
      <a href="${href}" class="flex-none w-56 sm:w-60 snap-start pt-4 pb-6 px-2 block">
        <div class="flex flex-col transition-transform duration-200 hover:-translate-y-2 cursor-pointer">
          <div class="flex items-end">
            <div class="bg-white rounded-tl-3xl rounded-tr-xl px-3 py-2 flex gap-2 items-center relative z-10">
              <span class="line-through text-[#b7bac5] text-xs font-medium">Rp${p.original}</span>
              <span class="font-bold text-sm whitespace-nowrap text-[#1E2412]">Rp${p.price}</span>
            </div>
          </div>
          <div class="bg-white rounded-b-3xl rounded-tr-3xl p-2.5 pt-0 flex flex-col relative z-0 drop-shadow-[0_6px_16px_rgba(19,35,74,.08)] hover:drop-shadow-[0_16px_32px_rgba(19,35,74,.18)] transition-[drop-shadow] duration-200">
            <h3 class="px-1 text-sm py-2 truncate text-[#1E2412] font-semibold">${p.name}</h3>
            <div class="w-full shrink-0 rounded-2xl h-40 overflow-hidden bg-white">
              <img src="${base}${p.img}" alt="${p.name}" loading="lazy" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </a>`;
  };
})();
