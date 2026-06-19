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

  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxTitle.textContent = image.alt;
  lightboxIso.textContent = exif.iso || image.dataset.iso || "No disponible";
  lightboxShutter.textContent = exif.shutter || image.dataset.shutter || "No disponible";
  lightboxFocal.textContent = exif.focal || image.dataset.focal || "No disponible";
  lightboxAperture.textContent = exif.aperture || "No disponible";
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
