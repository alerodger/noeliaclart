# noeliaclart — Portfolio de Noelia Calahorro

Web estática (HTML + CSS + JS, sin instalaciones ni dependencias).

```
index.html      → contenido de la página (textos, secciones)
styles.css      → diseño
script.js       → listado de obras + galería + visor
img/obras/      → imágenes de las obras
```

## Ver la web en tu ordenador

Abre `index.html` con doble clic. (o `python3 -m http.server` y entra en http://localhost:8000)

## Cambiar las obras por fotos reales

1. Copia las fotos (`.jpg` o `.webp`, unos 1200 px de lado largo) a `img/obras/`.
2. Abre `script.js` y edita la lista `OBRAS` del principio: imagen, título, descripción, técnica, medidas, año y categoría (`urbano`, `encargo` o `estudio`).
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

## Publicarla gratis

### Opción A — Netlify Drop (la más fácil, 1 minuto)
1. Entra en https://app.netlify.com/drop
2. Arrastra la carpeta `noeliaclart` entera a la página.
3. Listo: te da una URL tipo `https://noeliaclart.netlify.app` (puedes cambiar el nombre en *Site settings*; crea una cuenta gratuita para que no caduque).
Para actualizarla, vuelve a arrastrar la carpeta en *Deploys*.

### Opción B — GitHub Pages
1. Crea un repositorio en GitHub llamado, por ejemplo, `noeliaclart`.
2. Sube estos archivos (botón *Add file → Upload files*).
3. En *Settings → Pages*, elige *Deploy from a branch*, rama `main`, carpeta `/ (root)`.
4. En un par de minutos estará en `https://TU-USUARIO.github.io/noeliaclart/`.

Las dos opciones permiten conectar un dominio propio (p. ej. `noeliaclart.com`) más adelante.
