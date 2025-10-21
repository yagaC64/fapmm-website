# FAPMM — Fundación Amigos Padre Mateo Mateo

Migración del sitio a Firebase + plan de mejoras

Meta: Baseline del contenido actual de https://mateomateo.org/ en Firebase Hosting y, luego, mejoras graduales (accesibilidad, rendimiento, organización de imágenes y módulo de donaciones). El sitio será en español y fácil de mantener para María.

## Fases

- **Fase 1 (baseline)**  
  - Reproducir las páginas actuales: Hogar, Sobre PMM, Sobre FAPMM, Obras, Contacto y Donaciones (PayPal).  
  - Mantener estilo Bootstrap (simple) y rutas estáticas.  
  - Subir a Firebase Hosting con emuladores locales para pruebas.
- **Fase 2 (mejoras)**  
  - Limpieza de CSS, imágenes optimizadas (WebP), metadatos SEO, accesibilidad (etiquetas alt, contraste), i18n básico y migración de componentes (si decidimos usar una SPA con Vite/React o Astro).

## Accesibilidad y mejoras rápidas (Fase 2)

- Añadir atributos `alt` descriptivos a todas las imágenes.
- Verificar contraste suficiente en botones y textos clave.
- Mantener jerarquía semántica de encabezados (H1 → H2 → H3).
- Minificar y optimizar imágenes (usar WebP cuando sea posible).
- Configurar SEO básico: `<title>`, `<meta name="description">` y etiquetas Open Graph (`og:`).

## Créditos y notas legales

- Fotografías y obras: atribución a la Familia Ramos-Mateo o a la Fundación, según corresponda.
- Texto biográfico: mantener la referencia del artículo original en la página `Sobre PMM`.

## Estructura propuesta

```text
fapmm-website/
├─ public/                  # Carpeta servida por Firebase Hosting
│  ├─ index.html            # Hogar
│  ├─ sobre-pmm/index.html
│  ├─ sobre-fapmm/index.html
│  ├─ obras/index.html
│  ├─ contacto/index.html
│  ├─ assets/
│  │  ├─ css/
│  │  │  └─ styles.css      # CSS local (podemos empezar con Bootstrap CDN y luego consolidar)
│  │  ├─ img/
│  │  │  ├─ logo-wide.webp   <!-- TODO: colocar logo aquí -->
│  │  │  ├─ hero.webp        <!-- TODO: fp1.webp equivalente -->
│  │  │  ├─ pmm300.jpg       <!-- TODO -->
│  │  │  ├─ fapmm.jpg        <!-- TODO -->
│  │  │  ├─ obrasfp.jpg      <!-- TODO -->
│  │  │  ├─ Picture1.jpg ... <!-- TODO: resto de imágenes -->
│  │  └─ js/
│  │     └─ main.js         # JS simple (navbar, galería, etc.)
│  └─ favicon.ico           # Opcional
├─ .env                     # Variables (NO commitear)
├─ .env.example             # Plantilla de variables
├─ .gitignore
├─ firebase.json
├─ .firebaserc
└─ README.md
```

## Diagrama (texto) del sitio

```
[Hogar]  (/)
  ├─ Hero: título "Fundación Amigos Padre Mateo Mateo"
  ├─ CTA: "Conocer más" -> /sobre-fapmm
  ├─ 3 Features: Sobre PMM | Sobre FAPMM | Obras
  └─ Sección Donaciones (PayPal)

[Sobre PMM]  (/sobre-pmm)
  ├─ Biografía (texto e imágenes: Picture1..13)
  └─ Fuente: Artículo de blog (referencia en el pie)

[Sobre FAPMM]  (/sobre-fapmm)
  ├─ Misión, propósitos y aviso de actividades
  ├─ Galería (FAPMM2, fapmm.jpg, etc.)
  └─ Donaciones (PayPal)

[Obras]  (/obras)
  └─ Ensayo crítico (texto largo) "El Arte: Sermón Paralelo..."

[Contacto]  (/contacto)
  ├─ Teléfono
  └─ Email fundacionpadremateomateo@gmail.com
```

**Placeholders de imágenes:** en `public/assets/img/` deja el nombre de archivo final y un comentario `<!-- TODO: reemplazar con imagen -->` si aún no está el asset. Ejemplo:

```html
<img src="/assets/img/hero.webp" alt="Obras del Padre Mateo" />
<!-- TODO: reemplazar hero.webp con FP1.webp original optimizado -->
```

## Requisitos

- Node.js 18+
- Firebase CLI (`npm i -g firebase-tools`)
- GitHub (repo nuevo)

## Variables de entorno

Crea `.env` (no se commitea) y comparte una plantilla como `.env.example`.

```
# Donaciones (PayPal)
PAYPAL_BUSINESS=fundacionpadremateomateo@gmail.com
PAYPAL_ITEM_NAME=Fundación Amigos Padre Mateo Mateo

# Sitio (metadatos)
SITE_TITLE=Padre Mateo Mateo
SITE_DESCRIPTION=Fundación Amigos Padre Mateo Mateo (FAPMM)
SITE_URL=https://fapmm.web.app   # cambiar después del deploy
```

En los formularios usa las variables vía reemplazo de cadenas simple durante el build o con JS mínimo al cargar.

## .gitignore

```
# Node / tooling
node_modules/
# Firebase
.firebase/
# Env
.env
# Editors / OS
.DS_Store
.vscode/
```

## Inicializar Firebase (Hosting + Emuladores)

```
# 1) Login
firebase login

# 2) Init en la carpeta del proyecto
firebase init hosting
#   ? Use an existing project / create new -> (elige o crea)
#   ? What do you want to use as your public directory? -> public
#   ? Configure as a single-page app? -> No (rutas estáticas)
#   ? Set up automatic builds and deploys with GitHub? -> (podemos decir que sí)
#   ? File public/index.html already exists. Overwrite? -> No

# 3) Emuladores locales
firebase emulators:start

# 4) Deploy
firebase deploy
```

## Nota para María (no técnica)

Para ver el sitio en su Mac, solo abra la aplicación Terminal, pegue `firebase emulators:start` y luego abra el enlace que aparece (normalmente http://localhost:5000).

## "Hey Codex" — Tareas iniciales (automatizadas)

1. Crear estructura del proyecto  
   ```bash
   # Hey Codex: run in terminal
   mkdir -p fapmm-website/public/{assets/css,assets/img,assets/js} \
     && cd fapmm-website \
     && git init
   ```
2. Añadir archivos base  
   ```text
   # Hey Codex: create files with these contents
   # .gitignore → (usa el bloque de este README)
   # .env.example → (usa el bloque .env example de este README)
   # README.md → (pega este README completo)
   # firebase.json → mínima config de hosting:
   {
     "hosting": {
       "public": "public",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
     }
   }
   # .firebaserc → placeholder (cambiar luego):
   {
     "projects": {
       "default": "fapmm-dev"
     }
   }
   ```
3. Scaffold de páginas (HTML estático)  
   ```text
   # Hey Codex: create these files with minimal shells:
   public/index.html
   public/sobre-pmm/index.html
   public/sobre-fapmm/index.html
   public/obras/index.html
   public/contacto/index.html
   public/assets/css/styles.css
   public/assets/js/main.js
   ```
4. Insertar placeholders de imágenes  
   ```text
   En cada página, crear <img> con rutas /assets/img/... y comentarios <!-- TODO --> para reemplazar luego.
   ```
