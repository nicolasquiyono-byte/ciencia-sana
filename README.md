# ciencia sana — sitio web

Landing page de ciencia sana. Un solo archivo `index.html` (HTML + CSS + JS) con las
imágenes en la carpeta `images/`. Sin librerías ni build: se abre directo en el navegador.

## Estructura
```
ciencia-sana/
├── index.html      ← toda la página (estilos y JS incluidos)
└── images/         ← fotos de producto (vial y cápsulas)
```

## Verlo rápido
Doble clic en `index.html` o, desde la terminal en esta carpeta:
```
python3 -m http.server 8000
```
y abre http://localhost:8000

---

## Editarlo con Claude Code

### 1. Instala Claude Code (una sola vez)
- macOS / Linux:
  ```
  curl -fsSL https://claude.ai/install.sh | bash
  ```
- Windows (PowerShell):
  ```
  irm https://claude.ai/install.ps1 | iex
  ```
- (Alternativa con npm, requiere Node 18+): `npm install -g @anthropic-ai/claude-code`

### 2. Abre el proyecto
```
cd ciencia-sana
claude
```

### 3. Pídele cambios en lenguaje natural
Claude Code lee y edita `index.html` directamente. Ejemplos:
- "Conecta el botón Ver detalles a una página de producto por cada item."
- "Agrega un carrito con total en MXN y botón de WhatsApp para pedir."
- "Crea una sección de testimonios antes del footer."
- "Conviértelo en PWA (manifest + service worker) para instalarlo como app."
- "Hazme una variante del hero en fondo blanco con el logo en azul."

### 4. Previsualiza mientras editas
Pídele: "levanta un servidor local para ver los cambios" (corre `python3 -m http.server`).
Refresca el navegador tras cada cambio.

### 5. Publícalo
Cuando esté listo: "prepara este sitio para deploy en Vercel" (o Netlify),
o súbelo a tu hosting actual.

---

## Notas
- Los péptidos en vial son de uso en investigación; las cápsulas están etiquetadas como
  suplemento dietario. El disclaimer ya está en el footer.
- Para agregar/editar productos: duplica un bloque `<a class="card">…</a>` dentro de
  `<div class="grid">` y cambia nombre, color (`style="background:#..."`), función e imágenes.
- Paleta por producto (tag de color): verde claro, verde bosque, azul, amarillo, morado,
  vino, naranja, teal, índigo.
