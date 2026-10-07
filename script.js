// ============================================================
//  OBRAS — Para añadir una obra nueva, copia un bloque { ... }
//  y cambia los datos. Pon la imagen en img/obras/.
//  categoria: "urbano" | "encargo" | "estudio"
// ============================================================
const OBRAS = [
  {
    imagen: "img/obras/venus-en-el-anden.svg",
    titulo: "Venus en el andén",
    descripcion: "La diosa del amor esperando el último metro de la noche. Un busto clásico trabajado en carboncillo, rodeado de las firmas y los colores que dejan los que pasan por el andén.",
    tecnica: "Carboncillo y lápices de colores",
    medidas: "42 × 59,4 cm",
    anio: 2025,
    categoria: "urbano",
  },
  {
    imagen: "img/obras/apolo-con-auriculares.svg",
    titulo: "Apolo con auriculares",
    descripcion: "El dios de la música ya no necesita lira. Una reflexión sobre cómo seguimos buscando lo mismo —belleza, ritmo, evasión— con herramientas nuevas.",
    tecnica: "Grafito y lápices de colores",
    medidas: "40 × 40 cm",
    anio: 2025,
    categoria: "urbano",
  },
  {
    imagen: "img/obras/atenea-turno-de-noche.svg",
    titulo: "Atenea, turno de noche",
    descripcion: "La diosa de la sabiduría bajo la luz azul de un letrero de 24 horas. Una pieza sobre las personas que sostienen la ciudad mientras dormimos.",
    tecnica: "Carboncillo sobre papel tintado",
    medidas: "50 × 70 cm",
    anio: 2024,
    categoria: "urbano",
  },
  {
    imagen: "img/obras/estudio-de-mirada.svg",
    titulo: "Estudio de mirada",
    descripcion: "Un ejercicio de paciencia: horas de capas de grafito para conseguir el brillo húmedo de un ojo. Los estudios son donde aprendo antes de cada gran pieza.",
    tecnica: "Grafito",
    medidas: "29,7 × 21 cm",
    anio: 2024,
    categoria: "estudio",
  },
  {
    imagen: "img/obras/medusa-de-barrio.svg",
    titulo: "Medusa de barrio",
    descripcion: "Medusa no convierte en piedra: devuelve la mirada. Una relectura del mito desde la calle, con serpientes que parecen trazos de spray.",
    tecnica: "Carboncillo y lápices de colores",
    medidas: "50 × 65 cm",
    anio: 2025,
    categoria: "urbano",
  },
  {
    imagen: "img/obras/encargo-retrato-familiar.svg",
    titulo: "Retrato en grafito",
    descripcion: "Encargo privado: un retrato de perfil en grafito puro, regalo de aniversario. Sin color, solo luz y sombra, para que hable la expresión.",
    tecnica: "Grafito",
    medidas: "29,7 × 42 cm (A3)",
    anio: 2025,
    categoria: "encargo",
  },
  {
    imagen: "img/obras/david-en-granada.svg",
    titulo: "El David en Granada",
    descripcion: "El David de Miguel Ángel paseando entre arcos nazaríes y atardeceres naranjas del Albaicín. Florencia y Granada en la misma hoja.",
    tecnica: "Carboncillo, grafito y lápices de colores",
    medidas: "70 × 50 cm",
    anio: 2024,
    categoria: "urbano",
  },
  {
    imagen: "img/obras/corona-de-carton.svg",
    titulo: "Corona de cartón",
    descripcion: "Un emperador romano con una corona de cumpleaños. Una obra sobre el poder, el juego y lo poco en serio que deberíamos tomarnos a nosotros mismos.",
    tecnica: "Grafito y lápices de colores",
    medidas: "40 × 50 cm",
    anio: 2025,
    categoria: "urbano",
  },
  {
    imagen: "img/obras/hermes-con-gorra.svg",
    titulo: "Hermes con gorra",
    descripcion: "El mensajero de los dioses, hoy repartidor. Gorra rosa, prisa eterna y el mismo perfil de mármol de siempre.",
    tecnica: "Carboncillo y lápices de colores",
    medidas: "40 × 40 cm",
    anio: 2024,
    categoria: "urbano",
  },
  {
    imagen: "img/obras/santo-reino.svg",
    titulo: "Santo Reino",
    descripcion: "Un homenaje a Jaén: una corona de olivo para un busto clásico, con aceitunas en lugar de laureles. Raíces y mitología en la misma pieza.",
    tecnica: "Grafito y lápices de colores",
    medidas: "42 × 59,4 cm",
    anio: 2025,
    categoria: "urbano",
  },
  {
    imagen: "img/obras/encargo-color.svg",
    titulo: "Retrato en color",
    descripcion: "Encargo privado en lápices de colores, con un fondo cálido para acompañar la luz de la fotografía original.",
    tecnica: "Lápices de colores",
    medidas: "29,7 × 42 cm (A3)",
    anio: 2025,
    categoria: "encargo",
  },
  {
    imagen: "img/obras/cupido-sin-flechas.svg",
    titulo: "Cupido sin flechas",
    descripcion: "¿Qué hace Cupido cuando se le acaban las flechas? Pintar corazones en las paredes. Una pieza tierna sobre el amor de barrio.",
    tecnica: "Grafito y lápices de colores",
    medidas: "40 × 50 cm",
    anio: 2024,
    categoria: "urbano",
  },
];

// ============================================================
//  Galería y visor
// ============================================================
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
let visibles = OBRAS.map((_, i) => i);
let actual = 0;

function pintarGaleria(filtro) {
  visibles = OBRAS.map((_, i) => i).filter(
    (i) => filtro === "todas" || OBRAS[i].categoria === filtro
  );
  gallery.innerHTML = "";
  visibles.forEach((i, pos) => {
    const obra = OBRAS[i];
    const item = document.createElement("button");
    item.className = "gallery__item";
    item.style.animationDelay = `${pos * 60}ms`;
    item.setAttribute("aria-label", `Ver ${obra.titulo}`);
    item.innerHTML = `
      <img src="${obra.imagen}" alt="${obra.titulo}" loading="lazy">
      <span class="gallery__caption">${obra.titulo}</span>`;
    item.addEventListener("click", () => abrir(pos));
    gallery.appendChild(item);
  });
}

function mostrar(pos) {
  actual = (pos + visibles.length) % visibles.length;
  const obra = OBRAS[visibles[actual]];
  document.getElementById("lb-img").src = obra.imagen;
  document.getElementById("lb-img").alt = obra.titulo;
  document.getElementById("lb-title").textContent = obra.titulo;
  document.getElementById("lb-desc").textContent = obra.descripcion;
  document.getElementById("lb-tech").textContent = obra.tecnica;
  document.getElementById("lb-size").textContent = obra.medidas;
  document.getElementById("lb-year").textContent = obra.anio;
  document.getElementById("lb-meta").textContent =
    obra.categoria === "encargo" ? "Encargo" : obra.categoria === "estudio" ? "Estudio" : "Clásicos urbanos";
}

function abrir(pos) {
  mostrar(pos);
  lightbox.showModal();
  document.body.style.overflow = "hidden";
}

function cerrar() {
  lightbox.close();
}

lightbox.addEventListener("close", () => (document.body.style.overflow = ""));
lightbox.querySelector(".lightbox__close").addEventListener("click", cerrar);
lightbox.querySelector(".lightbox__nav--prev").addEventListener("click", () => mostrar(actual - 1));
lightbox.querySelector(".lightbox__nav--next").addEventListener("click", () => mostrar(actual + 1));
// Cerrar al pulsar fuera del contenido
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) cerrar();
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.open) return;
  if (e.key === "ArrowLeft") mostrar(actual - 1);
  if (e.key === "ArrowRight") mostrar(actual + 1);
});

// Filtros
document.querySelectorAll(".filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    pintarGaleria(btn.dataset.filter);
  })
);

// Menú móvil
const toggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const abierto = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", abierto);
});
document.querySelectorAll(".nav__links a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", false);
  })
);

document.getElementById("year").textContent = new Date().getFullYear();
pintarGaleria("todas");
