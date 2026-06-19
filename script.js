const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxTitle = document.querySelector("[data-lightbox-title]");
const lightboxIso = document.querySelector("[data-lightbox-iso]");
const lightboxShutter = document.querySelector("[data-lightbox-shutter]");
const lightboxFocal = document.querySelector("[data-lightbox-focal]");
const lightboxAperture = document.querySelector("[data-lightbox-aperture]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const languageButtons = document.querySelectorAll("[data-lang-option]");

const originalImageTitles = new Map(
  [...document.querySelectorAll("img.zoomable")].map((image) => [image.getAttribute("src"), image.alt]),
);

const imageTitlesEn = {
  "assets/Huerquehue Dump/Z63_8729.jpg": "Lake surrounded by forest and mountains in Huerquehue",
  "assets/Tolhuaca Dump/DJI_20260510171745_0007_D.jpg": "Aerial view of lagoon and forest in Tolhuaca",
  "assets/Tolhuaca Dump/Z63_8772.jpg": "Mountain reflected in a lake",
  "assets/Tolhuaca Dump/Z63_8787.jpg": "Tall waterfall on a rock wall",
  "assets/Tolhuaca Dump/Z63_8783.jpg": "Waterfall with a blue pool among vegetation",
  "assets/Huerquehue Dump/Z63_8736.jpg": "Mountain lake in Huerquehue",
  "assets/Huerquehue Dump/Z63_8648.jpg": "Waterfall among native forest",
  "assets/Huerquehue Dump/Z63_8689.jpg": "Turquoise lake seen from the forest",
  "assets/Huerquehue Dump/Z63_8603.jpg": "Mushrooms on a log in a humid forest",
  "assets/Pucon/Z63_8575.jpg": "Villarrica Volcano lit from Pucon",
  "assets/Pucon/Z63_8526.jpg": "Villarrica Lake and mountains from Pucon",
  "assets/Pucon/Z63_8545.jpg": "Waterfalls and wooden viewpoint in Pucon",
  "assets/Pucon/Z63_8333.jpg": "Autumn road among trees in Pucon",
  "assets/Curarrehue Dump/Z63_8305.jpg": "Vertical waterfall in Curarrehue forest",
  "assets/Curarrehue Dump/Z63_8159.jpg": "Araucaria tree in a snowy landscape",
  "assets/Curarrehue Dump/Z63_8271.jpg": "Tree lit by late afternoon sun",
  "assets/Curarrehue Dump/Z63_8221.jpg": "Orange mushrooms growing on wood",
  "assets/Tolhuaca Dump/Z63_8776.jpg": "Blue lake and forested slope",
  "assets/Tolhuaca Dump/Z63_8788.jpg": "Forest and water seen from the shade",
  "assets/Tolhuaca Dump/20260510_133516.jpg": "Hillside and rock columns",
  "assets/Tolhuaca Dump/Z63_8750.jpg": "Wooden trail among forest",
  "assets/Tolhuaca Dump/Z63_8744.jpg": "Walkway among trees",
  "assets/Tolhuaca Dump/Z63_8801.jpg": "Waterfall in Tolhuaca forest",
  "assets/Huerquehue Dump/Z63_8625.jpg": "Dark waterfall among trees",
  "assets/Huerquehue Dump/Z63_8630.jpg": "Snow-capped volcano seen through trees",
  "assets/Huerquehue Dump/Z63_8677.jpg": "Dark lake among native forest",
  "assets/Huerquehue Dump/Z63_8684.jpg": "Mountain river surrounded by vegetation",
  "assets/Huerquehue Dump/Z63_8721.jpg": "Lake with reflections and clouds",
  "assets/Pucon/20260505_114723.jpg": "Trail in a humid Pucon forest",
  "assets/Pucon/Z63_8088.jpg": "River among forest and mist in Pucon",
  "assets/Pucon/Z63_8339.jpg": "Forest road with a vehicle among trees",
  "assets/Pucon/Z63_8579.jpg": "Sunset over the lake in Pucon",
  "assets/Curarrehue Dump/Z63_8200.jpg": "Trail under forest in Curarrehue",
  "assets/Curarrehue Dump/Z63_8275.jpg": "Mushrooms on a log in close-up",
  "assets/Curarrehue Dump/Z63_8259.jpg": "Solitary tree and misty valley",
  "assets/Curarrehue Dump/Z63_8313.jpg": "Distant waterfall in dense forest",
  "assets/Curarrehue Dump/Z63_8323.jpg": "Blue waterfall in a dark forest",
  "assets/Curarrehue Dump/Z63_8237.jpg": "Lake and mountains from a viewpoint",
  "assets/Curarrehue Dump/Z63_8226.jpg": "Mountains and forest under mist",
  "assets/Me.jpg": "Mario photographing in a natural landscape",
};

const translations = {
  es: {
    documentTitle: "Mario Tobar | Fotografia de Naturaleza",
    description: "Portafolio minimalista de fotografia de naturaleza, bosques, lagos, cascadas y territorio del sur de Chile.",
    seriesLink: "Ver serie",
    nav: ["Home", "Portafolio", "About", "Contact"],
    menuLabel: "Abrir menu",
    heroEyebrow: "Fotografia de naturaleza",
    heroTitle: "Bosques, agua y territorio en imagenes que respiran.",
    heroText: "Portafolio fotografico de naturaleza, senderos, lagos y cascadas del sur de Chile, construido con una mirada minimalista y contemporanea.",
    heroButton: "Ver portafolio",
    intro: "Trabajo con luz natural, composiciones limpias y escenas donde la naturaleza conserva su escala. Cada serie reune una salida distinta, con su clima, su vegetacion y su propia forma de quedarse en la memoria.",
    portfolioEyebrow: "Portafolio",
    date: "Mayo 2026",
    mapLink: "Ver en Google Maps",
    detailEyebrow: "Mayo 2026",
    labels: {
      location: "Ubicacion",
      created: "Creacion",
      founded: "Fundacion",
      general: "Dato general",
      exif: "EXIF de la serie",
      iso: "ISO",
      shutter: "Obturacion",
      focal: "Longitud focal",
      aperture: "Apertura",
    },
    projects: {
      tolhuaca: {
        text: "Volcanes, miradores, reflejos y bosque de transicion bajo cielo despejado.",
        meta: [
          ["Ubicacion", "Comuna de Curacautin, provincia de Malleco, Region de La Araucania."],
          ["Creacion", "Parque nacional creado el 16 de octubre de 1935."],
          ["Dato general", "6.474 hectareas; destaca por Laguna Malleco, Laguna Verde y saltos de agua."],
          ["EXIF de la serie", "Camara: Nikon Z6 III, DJI FC9313 y Samsung Galaxy S24 Ultra. Lentes: NIKKOR Z 24-120mm f/4 S, TAMRON 16-30mm F2.8, DJI 24.0 mm f/1.8 y Samsung Wide Camera."],
        ],
      },
      huerquehue: {
        text: "Lagos, bosque nativo, agua en movimiento y luz filtrada entre senderos.",
        meta: [
          ["Ubicacion", "Region de La Araucania, cerca de Pucon y lago Caburgua."],
          ["Creacion", "Parque nacional creado el 9 de junio de 1967."],
          ["Dato general", "12.500 hectareas de bosque andino, lagunas y araucarias."],
          ["EXIF de la serie", "Camara: Nikon Z6 III. Lentes: NIKKOR Z 24-120mm f/4 S y TAMRON 16-30mm F2.8."],
        ],
      },
      pucon: {
        text: "Lago, volcan, bosque humedo y caminos interiores de la zona lacustre.",
        meta: [
          ["Ubicacion", "Ciudad y comuna de la provincia de Cautin, Region de La Araucania, en la ribera oriental del lago Villarrica."],
          ["Fundacion", "Fundada el 27 de febrero de 1883."],
          ["Dato general", "Reconocida por el lago Villarrica, el volcan Villarrica y su rol como capital chilena del turismo aventura."],
          ["EXIF de la serie", "Camara: Nikon Z6 III y Samsung Galaxy S24 Ultra. Lentes: NIKKOR Z 24-120mm f/4 S, TAMRON 16-30mm F2.8 y Samsung Wide Camera."],
        ],
      },
      curarrehue: {
        text: "Senderos cerrados, araucarias, cascadas y detalles pequenos del bosque.",
        meta: [
          ["Ubicacion", "Comuna de Curarrehue, provincia de Cautin, Region de La Araucania."],
          ["Creacion", "Declarada comuna el 8 de enero de 1981."],
          ["Dato general", "Territorio lacustre andino cercano al paso Mamuil Malal, con rios, volcanes y bosque nativo."],
          ["EXIF de la serie", "Camara: Nikon Z6 III. Lentes: NIKKOR Z 24-120mm f/4 S y TAMRON 16-30mm F2.8."],
        ],
      },
    },
    aboutEyebrow: "About",
    aboutTitle: "Una mirada paciente para lugares vivos.",
    aboutText: [
      "Soy Mario, fotografo de naturaleza. Me interesa documentar rutas, parques, bosques y escenas donde el paisaje aparece sin artificio, con una estetica sobria: menos ruido visual, mas presencia del territorio.",
      "Este portafolio reune exploraciones fotograficas por el sur de Chile y puede crecer con nuevas series, impresiones, relatos de viaje o encargos editoriales.",
    ],
    stats: ["Series iniciales", "Fotografias disponibles", "Chile como territorio"],
    contactEyebrow: "Contact",
    contactTitle: "Conversemos por Instagram.",
    contactText: "Para encargos, impresiones o colaboraciones, escribeme por Instagram con el tipo de serie, ubicacion y fechas aproximadas.",
    instagramLabel: "Instagram",
    instagramSmall: "Abrir perfil",
    footerLeft: "Mario Tobar Fotografia",
    footerRight: "Nature portfolio, Chile",
    close: "Cerrar",
    unavailable: "No disponible",
  },
  en: {
    documentTitle: "Mario Tobar | Nature Photography",
    description: "Minimal nature photography portfolio featuring forests, lakes, waterfalls, and southern Chilean landscapes.",
    seriesLink: "View series",
    nav: ["Home", "Portfolio", "About", "Contact"],
    menuLabel: "Open menu",
    heroEyebrow: "Nature photography",
    heroTitle: "Forests, water, and territory in images that breathe.",
    heroText: "A nature photography portfolio of trails, lakes, waterfalls, and southern Chile, built with a minimalist and contemporary eye.",
    heroButton: "View portfolio",
    intro: "I work with natural light, clean compositions, and scenes where nature keeps its scale. Each series gathers a different outing, with its own weather, vegetation, and way of staying in memory.",
    portfolioEyebrow: "Portfolio",
    date: "May 2026",
    mapLink: "View on Google Maps",
    detailEyebrow: "May 2026",
    labels: {
      location: "Location",
      created: "Created",
      founded: "Founded",
      general: "General note",
      exif: "Series EXIF",
      iso: "ISO",
      shutter: "Shutter speed",
      focal: "Focal length",
      aperture: "Aperture",
    },
    projects: {
      tolhuaca: {
        text: "Volcanoes, viewpoints, reflections, and transitional forest under clear skies.",
        meta: [
          ["Location", "Curacautin commune, Malleco province, Araucania Region."],
          ["Created", "National park created on October 16, 1935."],
          ["General note", "6,474 hectares; known for Malleco Lagoon, Green Lagoon, and waterfalls."],
          ["Series EXIF", "Camera: Nikon Z6 III, DJI FC9313, and Samsung Galaxy S24 Ultra. Lenses: NIKKOR Z 24-120mm f/4 S, TAMRON 16-30mm F2.8, DJI 24.0 mm f/1.8, and Samsung Wide Camera."],
        ],
      },
      huerquehue: {
        text: "Lakes, native forest, moving water, and filtered light along the trails.",
        meta: [
          ["Location", "Araucania Region, near Pucon and Lake Caburgua."],
          ["Created", "National park created on June 9, 1967."],
          ["General note", "12,500 hectares of Andean forest, lagoons, and araucaria trees."],
          ["Series EXIF", "Camera: Nikon Z6 III. Lenses: NIKKOR Z 24-120mm f/4 S and TAMRON 16-30mm F2.8."],
        ],
      },
      pucon: {
        text: "Lake, volcano, humid forest, and inner roads of the lake district.",
        meta: [
          ["Location", "City and commune in Cautin province, Araucania Region, on the eastern shore of Lake Villarrica."],
          ["Founded", "Founded on February 27, 1883."],
          ["General note", "Known for Lake Villarrica, Villarrica Volcano, and its role as Chile's adventure tourism capital."],
          ["Series EXIF", "Camera: Nikon Z6 III and Samsung Galaxy S24 Ultra. Lenses: NIKKOR Z 24-120mm f/4 S, TAMRON 16-30mm F2.8, and Samsung Wide Camera."],
        ],
      },
      curarrehue: {
        text: "Closed trails, araucaria trees, waterfalls, and small details of the forest.",
        meta: [
          ["Location", "Curarrehue commune, Cautin province, Araucania Region."],
          ["Created", "Declared a commune on January 8, 1981."],
          ["General note", "Andean lake territory near the Mamuil Malal pass, with rivers, volcanoes, and native forest."],
          ["Series EXIF", "Camera: Nikon Z6 III. Lenses: NIKKOR Z 24-120mm f/4 S and TAMRON 16-30mm F2.8."],
        ],
      },
    },
    aboutEyebrow: "About",
    aboutTitle: "A patient eye for living places.",
    aboutText: [
      "I am Mario, a nature photographer. I document routes, parks, forests, and scenes where the landscape appears without artifice, with a restrained aesthetic: less visual noise, more presence of the territory.",
      "This portfolio gathers photographic explorations across southern Chile and can grow with new series, prints, travel stories, or editorial assignments.",
    ],
    stats: ["Initial series", "Available photographs", "Chile as territory"],
    contactEyebrow: "Contact",
    contactTitle: "Let's talk on Instagram.",
    contactText: "For assignments, prints, or collaborations, write to me on Instagram with the type of series, location, and approximate dates.",
    instagramLabel: "Instagram",
    instagramSmall: "Open profile",
    footerLeft: "Mario Tobar Photography",
    footerRight: "Nature portfolio, Chile",
    close: "Close",
    unavailable: "Not available",
  },
};

const exifBySrc = {
  "assets/Curarrehue Dump/Z63_8159.jpg": { iso: "10000", shutter: "1/500s", focal: "120 mm", aperture: "f/4" },
  "assets/Curarrehue Dump/Z63_8200.jpg": { iso: "160", shutter: "1/100s", focal: "24 mm", aperture: "f/4" },
  "assets/Curarrehue Dump/Z63_8221.jpg": { iso: "8000", shutter: "1/200s", focal: "51 mm", aperture: "f/4" },
  "assets/Curarrehue Dump/Z63_8226.jpg": { iso: "450", shutter: "1/125s", focal: "31.5 mm", aperture: "f/8" },
  "assets/Curarrehue Dump/Z63_8237.jpg": { iso: "100", shutter: "1/200s", focal: "24 mm", aperture: "f/4" },
  "assets/Curarrehue Dump/Z63_8259.jpg": { iso: "100", shutter: "1/640s", focal: "16 mm", aperture: "f/4" },
  "assets/Curarrehue Dump/Z63_8271.jpg": { iso: "100", shutter: "1/125s", focal: "16 mm", aperture: "f/2.8" },
  "assets/Curarrehue Dump/Z63_8275.jpg": { iso: "1250", shutter: "1/60s", focal: "16 mm", aperture: "f/2.8" },
  "assets/Curarrehue Dump/Z63_8305.jpg": { iso: "1250", shutter: "30s", focal: "16 mm", aperture: "f/8" },
  "assets/Curarrehue Dump/Z63_8313.jpg": { iso: "320", shutter: "15s", focal: "17 mm", aperture: "f/4" },
  "assets/Curarrehue Dump/Z63_8323.jpg": { iso: "2000", shutter: "1/125s", focal: "29 mm", aperture: "f/8" },
  "assets/Huerquehue Dump/Z63_8603.jpg": { iso: "12800", shutter: "1/100s", focal: "24 mm", aperture: "f/4" },
  "assets/Huerquehue Dump/Z63_8625.jpg": { iso: "100", shutter: "1/100s", focal: "24 mm", aperture: "f/4" },
  "assets/Huerquehue Dump/Z63_8630.jpg": { iso: "100", shutter: "1/2500s", focal: "94 mm", aperture: "f/4" },
  "assets/Huerquehue Dump/Z63_8648.jpg": { iso: "900", shutter: "1/250s", focal: "59 mm", aperture: "f/4" },
  "assets/Huerquehue Dump/Z63_8677.jpg": { iso: "360", shutter: "1/320s", focal: "70 mm", aperture: "f/4" },
  "assets/Huerquehue Dump/Z63_8684.jpg": { iso: "100", shutter: "1/160s", focal: "24 mm", aperture: "f/4" },
  "assets/Huerquehue Dump/Z63_8689.jpg": { iso: "180", shutter: "1/100s", focal: "24 mm", aperture: "f/4" },
  "assets/Huerquehue Dump/Z63_8721.jpg": { iso: "110", shutter: "1/160s", focal: "35 mm", aperture: "f/4" },
  "assets/Huerquehue Dump/Z63_8729.jpg": { iso: "100", shutter: "1/400s", focal: "16 mm", aperture: "f/4" },
  "assets/Huerquehue Dump/Z63_8736.jpg": { iso: "100", shutter: "20s", focal: "16 mm", aperture: "f/11" },
  "assets/Me.jpg": { iso: "4000", shutter: "1/640s", focal: "24 mm", aperture: "f/4" },
  "assets/Pucon/20260505_114723.jpg": { iso: "1600", shutter: "1/50s", focal: "6.3 mm", aperture: "f/1.7" },
  "assets/Pucon/Z63_8088.jpg": { iso: "1000", shutter: "8s", focal: "27.5 mm", aperture: "f/4" },
  "assets/Pucon/Z63_8333.jpg": { iso: "320", shutter: "1/60s", focal: "16 mm", aperture: "f/8" },
  "assets/Pucon/Z63_8339.jpg": { iso: "100", shutter: "1/80s", focal: "16 mm", aperture: "f/4" },
  "assets/Pucon/Z63_8526.jpg": { iso: "100", shutter: "1/320s", focal: "22 mm", aperture: "f/8" },
  "assets/Pucon/Z63_8545.jpg": { iso: "800", shutter: "1/60s", focal: "16 mm", aperture: "f/4" },
  "assets/Pucon/Z63_8575.jpg": { iso: "180", shutter: "1/500s", focal: "120 mm", aperture: "f/4" },
  "assets/Pucon/Z63_8579.jpg": { iso: "100", shutter: "1/1000s", focal: "81 mm", aperture: "f/4" },
  "assets/Tolhuaca Dump/20260510_133516.jpg": { iso: "125", shutter: "1/1500s", focal: "6.3 mm", aperture: "f/1.7" },
  "assets/Tolhuaca Dump/DJI_20260510171745_0007_D.jpg": { iso: "290", shutter: "1/1000s", focal: "8.67 mm", aperture: "f/1.8" },
  "assets/Tolhuaca Dump/Z63_8744.jpg": { iso: "100", shutter: "1/160s", focal: "16 mm", aperture: "f/4" },
  "assets/Tolhuaca Dump/Z63_8750.jpg": { iso: "100", shutter: "1/80s", focal: "16 mm", aperture: "f/8" },
  "assets/Tolhuaca Dump/Z63_8772.jpg": { iso: "100", shutter: "1/800s", focal: "24 mm", aperture: "f/4" },
  "assets/Tolhuaca Dump/Z63_8776.jpg": { iso: "500", shutter: "1/200s", focal: "49 mm", aperture: "f/8" },
  "assets/Tolhuaca Dump/Z63_8783.jpg": { iso: "100", shutter: "1/250s", focal: "24 mm", aperture: "f/4" },
  "assets/Tolhuaca Dump/Z63_8787.jpg": { iso: "100", shutter: "1/500s", focal: "37 mm", aperture: "f/4" },
  "assets/Tolhuaca Dump/Z63_8788.jpg": { iso: "100", shutter: "1/160s", focal: "24 mm", aperture: "f/4" },
  "assets/Tolhuaca Dump/Z63_8801.jpg": { iso: "1800", shutter: "1/100s", focal: "24 mm", aperture: "f/8" },
};

let currentLanguage = "es";

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

const setTexts = (selector, values) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index]) element.textContent = values[index];
  });
};

const projectKeyFromLink = (link) => link.getAttribute("href").replace("#", "").replace("-gallery", "");

const updateProjectCard = (link, language) => {
  const card = link.closest(".project");
  const key = projectKeyFromLink(link);
  const project = translations[language].projects[key];
  if (!card || !project) return;

  card.querySelector(".project-copy > span").textContent = translations[language].date;
  card.querySelector(".project-copy > p").textContent = project.text;
  card.querySelectorAll(".project-meta div").forEach((item, index) => {
    const meta = project.meta[index];
    if (!meta) return;
    item.querySelector("dt").textContent = meta[0];
    item.querySelector("dd").textContent = meta[1];
  });
  card.querySelector(".map-link").textContent = translations[language].mapLink;
};

const updateImageTitles = (language) => {
  document.querySelectorAll("img.zoomable").forEach((image) => {
    const src = image.getAttribute("src");
    image.alt = language === "en" ? imageTitlesEn[src] || originalImageTitles.get(src) : originalImageTitles.get(src);
  });
};

const applyLanguage = (language) => {
  const selectedLanguage = translations[language] ? language : "es";
  const t = translations[selectedLanguage];
  currentLanguage = selectedLanguage;

  document.documentElement.lang = selectedLanguage;
  document.title = t.documentTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", t.description);
  document.body.style.setProperty("--series-link-label", `"${t.seriesLink}"`);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === selectedLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  toggle.setAttribute("aria-label", t.menuLabel);
  setTexts(".site-nav a", t.nav);
  setText(".hero .eyebrow", t.heroEyebrow);
  setText(".hero h1", t.heroTitle);
  setText(".hero-content p:not(.eyebrow)", t.heroText);
  setText(".hero .button", t.heroButton);
  setText(".intro p", t.intro);
  setText("#portfolio .section-heading .eyebrow", t.portfolioEyebrow);

  document.querySelectorAll(".project-copy h3 a").forEach((link) => updateProjectCard(link, selectedLanguage));
  setTexts(".project-detail .eyebrow", [t.detailEyebrow, t.detailEyebrow, t.detailEyebrow, t.detailEyebrow]);

  setText("#about .eyebrow", t.aboutEyebrow);
  setText("#about h2", t.aboutTitle);
  setTexts(".about-copy p:not(.eyebrow)", t.aboutText);
  setTexts(".stats dd", t.stats);

  setText("#contact .eyebrow", t.contactEyebrow);
  setText("#contact h2", t.contactTitle);
  setText("#contact p:not(.eyebrow)", t.contactText);
  setText(".instagram-card span", t.instagramLabel);
  setText(".instagram-card small", t.instagramSmall);

  setText(".site-footer p:first-child", t.footerLeft);
  setText(".site-footer p:last-child", t.footerRight);
  setText("[data-lightbox-close]", t.close);
  document.querySelector("[data-lightbox-close]").setAttribute("aria-label", t.close);
  document.querySelector("[data-lightbox]").setAttribute("aria-label", selectedLanguage === "en" ? "Expanded image" : "Imagen ampliada");
  document.querySelectorAll(".lightbox dt").forEach((item, index) => {
    item.textContent = [t.labels.iso, t.labels.shutter, t.labels.focal, t.labels.aperture][index];
  });

  updateImageTitles(selectedLanguage);
};

const savedLanguage = localStorage.getItem("preferredLanguage");
const browserLanguage = (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
const initialLanguage = savedLanguage || browserLanguage;

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    localStorage.setItem("preferredLanguage", button.dataset.langOption);
    applyLanguage(button.dataset.langOption);
  });
});

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

toggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") return;
  header.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
});

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

const openLightbox = (image) => {
  const src = decodeURIComponent(new URL(image.currentSrc || image.src, window.location.href).pathname).replace(/^\//, "");
  const exif = exifBySrc[src] || {};
  const unavailable = translations[currentLanguage].unavailable;

  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxTitle.textContent = image.alt;
  lightboxIso.textContent = exif.iso || image.dataset.iso || unavailable;
  lightboxShutter.textContent = exif.shutter || image.dataset.shutter || unavailable;
  lightboxFocal.textContent = exif.focal || image.dataset.focal || unavailable;
  lightboxAperture.textContent = exif.aperture || unavailable;
  lightbox.hidden = false;
  document.body.classList.add("is-lightbox-open");
  lightboxClose.focus();
};

const closeLightbox = () => {
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.classList.remove("is-lightbox-open");
};

document.querySelectorAll(".zoomable").forEach((image) => {
  image.addEventListener("click", () => openLightbox(image));
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});

applyLanguage(initialLanguage);
