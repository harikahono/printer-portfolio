/* ===== DATA SENTRAL ===== */
window.App = window.App || {};

window.App.data = {
    /* Produk */
    produkBaru: [
        {cat:"ID Card", name:"ID Card Kantor / Event", price:"4.400", original:"6.000", type:"navy", img:"assets/PRODUK/idcard.webp"},
        {cat:"Sticker", name:"Sticker Label Industrial", price:"60.000", original:"75.000", type:"yellow", img:"assets/PRODUK/stickerlabel.webp"},
        {cat:"Souvenir", name:"Souvenir Wisuda / Graduation", price:"12.500", original:"18.000", type:"light", img:"assets/PRODUK/SouvenirWisuda.webp"},
        {cat:"Kertas", name:"Sticker Label Kertas Kraft", price:"65.000", original:"80.000", type:"paper", img:"assets/PRODUK/stikerkraft.webp"},
        {cat:"Tableware", name:"Meja Foil Custom", price:"1.900", original:"3.000", type:"navy", img:"assets/PRODUK/mejafoil.webp"},
        {cat:"Kartu", name:"Kartu Nama Doff Premium", price:"70.000", original:"90.000", type:"yellow", img:"assets/PRODUK/KartuNamaDoff.webp"},
    ],
    produkLaris: [
        {cat:"Medali", name:"Medali Akrilik Custom", price:"20.000", original:"28.000", type:"light", img:"assets/PRODUK/MedaliAkrilik.webp"},
        {cat:"Buku", name:"Buku Kop Surat Perusahaan", price:"103.000", original:"130.000", type:"paper", img:"assets/PRODUK/BukuKopSuratPerusahaan.webp"},
        {cat:"Lanyard", name:"Lanyard Premium Woven", price:"12.000", original:"18.000", type:"navy", img:"assets/PRODUK/LanyardPremiumWoven.webp"},
        {cat:"Paper Bag", name:"Paper Bag Custom Logo", price:"16.000", original:"25.000", type:"yellow", img:"assets/PRODUK/PaperBag.webp"},
        {cat:"Spanduk", name:"Spanduk Pertemuan Sinoo Baru", price:"70.000", original:"95.000", type:"light", img:"assets/PRODUK/Spanduk.webp"},
    ],

    /* Section produk: (sec = id section, row = id scroll-row) */
    produkRows: [
        {sec:"produk", row:"row-new", title:"BARU TIBA"},
        {sec:"best-seller", row:"row-best", title:"PALING LARIS"},
    ],

    /* Bento kategori */
    bento: [
        {img:"assets/BENTO/DigitalPrinting.webp", title:"Digital Printing", desc:"A0 – A4, poster, spanduk cepat", from:"#D4DC24", to:"#d9a600", big:true},
        {img:"assets/BENTO/StickerLabel.webp", title:"Sticker & Label", desc:"Custom shape, vinyl, kertas", from:"#62684A", to:"#1E2412"},
        {img:"assets/BENTO/NameCard.webp", title:"Name Card", desc:"Kartu nama & undangan", from:"#62684A", to:"#1E2412"},
        {img:"assets/BENTO/DisplayPromotion.webp", title:"Display Promotion", desc:"X-banner, roll-up, booth", from:"#7f94c8", to:"#62684A"},
        {img:"assets/BENTO/LargeFormat.webp", title:"Large Format", desc:"Banner, MMT, canvas", from:"#62684A", to:"#1E2412"},
        {img:"assets/BENTO/GarmentTextile.webp", title:"Garment & Textile", desc:"Kaos, tas custom, jersey", from:"#1E2412", to:"#1E2412"},
        {img:"assets/BENTO/Stationary.webp", title:"Stationary", desc:"Buku agenda, kalender", from:"#62684A", to:"#1E2412"},
        {img:"assets/BENTO/Merchandise.webp", title:"Merchandise", desc:"Tumbler, totebag, mug", from:"#7f94c8", to:"#62684A"},
        {img:"assets/BENTO/Packaging.webp", title:"Packaging", desc:"Paper bag, box, wrapping", from:"#1E2412", to:"#1E2412"},
    ],

    /* Dropdown nav Kategori */
    navKategori: ["Digital Printing", "Sticker & Label", "Name Card", "Large Format", "Garment & Textile", "Stationary", "Packaging", "Merchandise"],

    /* Marquee client */
    clients: ["Bukalapak", "G4S", "OK Bank", "The Energy", "Standarpen Indonesia", "Paxel", "Avrist Insurance", "Ramayana Insurance", "Glico Manufacturing", "Pos Indonesia"],

    /* Footer kolom link */
    footer: {
        "Kategori": ["Digital Printing", "Sticker & Label", "Large Format", "Merchandise"],
        "Tentang Kami": ["Profil Perusahaan", "Karir", "Blog", "Hubungi Kami"],
        "Bantuan": ["Cara Pesan", "Lacak Pesanan", "Metode Pembayaran", "FAQ"],
    },
};
