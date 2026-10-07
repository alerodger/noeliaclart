# noeliaclart — Portfolio de Noelia Calahorro

**🌐 [noeliaclart.com](https://noeliaclart.com)** · **📷 [@noeliaclart](https://www.instagram.com/noeliaclart/)**

Web portfolio de **Noelia Calahorro**, artista de Jaén y Granada especializada en dibujo realista
con carboncillo, grafito y lápices de colores. Su obra mezcla personajes clásicos con el arte urbano
y moderno, y acepta encargos de retratos personalizados en papel.

La web tiene un estilo limpio en blanco y negro, que combina tipografía clásica con trazos de
rotulador urbano, e incluye modo claro y oscuro.

## Apartados

- **Inicio**: presentación de la artista y acceso rápido a la obra y a los encargos.
- **Obra**: galería en mosaico con filtros (*Clásicos urbanos*, *Encargos*, *Estudios*). Al pulsar una
  obra se abre un visor con el título, la descripción, la técnica, las medidas y el año.
- **Sobre mí**: quién es Noelia, su forma de trabajar y los materiales que usa.
- **Eventos**: exposiciones, talleres y dibujo en directo. Se separan solos en *Próximos* y *Pasados*
  según la fecha actual.
- **Encargos**: cómo pedir un retrato personalizado, los pasos del proceso y los formatos disponibles.
- **Contacto**: enlace directo a Instagram.

## Estructura

Web estática (HTML + CSS + JavaScript), sin dependencias ni proceso de compilación.

```
index.html      → contenido y secciones de la página
styles.css      → diseño y colores (tema claro / oscuro)
script.js       → listas de obras y eventos, galería, visor y cambio de tema
img/obras/      → imágenes de las obras
CNAME           → dominio propio para GitHub Pages
```

## Ver la web en local

Abre `index.html` con doble clic, o sírvela con `python3 -m http.server` y entra en http://localhost:8000.

## Añadir o cambiar obras

1. Copia las fotos (`.jpg` o `.webp`, unos 1200 px de lado largo) a `img/obras/`.
2. Abre `script.js` y edita la lista `OBRAS` del principio: imagen, título, descripción, técnica,
   medidas, año y categoría (`urbano`, `encargo` o `estudio`).
3. Para quitar una obra, borra su bloque `{ ... }`.

La galería se ordena sola en mosaico, sea cual sea la proporción de cada foto.

## Añadir eventos

En `script.js`, lista `EVENTOS`: copia un bloque `{ ... }` y cambia título, fecha (`"AAAA-MM-DD"`),
`fechaFin` (opcional, para exposiciones de varios días), lugar, tipo, descripción y `enlace` (opcional).
No hace falta ordenarlos ni moverlos: la web los separa sola en **Próximos** y **Pasados** según la fecha de hoy.

## Modo claro / oscuro

El botón de la luna/sol en el menú cambia el tema. La primera vez se usa el del sistema del visitante,
y después se recuerda su elección. Los colores están al principio de `styles.css`
(`:root` para claro y `:root[data-theme="dark"]` para oscuro).

---

© Noelia Calahorro. Todas las obras son propiedad de la artista.
