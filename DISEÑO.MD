# Especificación y Diseño de Landing Page

> Adaptación del sistema de diseño **7shifts** para un espacio híbrido (Gimnasio + Café / Coworking / Salas de Reunión) usando Next.js estático, Tailwind CSS y Framer Motion.

---

## 1. Tokens de Diseño (Mantenidos)

### Colores
| Nombre Token | Valor Hex | Uso / Rol en la Landing Page |
| :--- | :--- | :--- |
| `--color-indigo-bolt` | `#4570ff` | CTA Principal (Botones pill llenos, estados activos de nav/agendamiento). |
| `--color-ember-orange` | `#ff6808` | Acento de marca, bordes resaltados, subrayado manuscrito hero, destacado de ofertas/descuentos. |
| `--color-lime-highlighter`| `#c6ff94` | Acento de texto sobre fondos oscuros (tags, badges de descuento, enlaces en modo oscuro). |
| `--color-lavender-mist` | `#ebdcff` | Fondo pastel para tarjetas simples (ej. Sala de Reuniones). |
| `--color-ice-blue` | `#d6e0ff` | Fondo pastel para tarjetas simples (ej. Menú del Café). |
| `--color-lilac-bloom` | `#c293f1` | Fondo pastel de tarjeta (ej. Gimnasio). |
| `--color-deep-navy` | `#193f78` | Fondo oscuro saturado para tarjeta (ej. Agendamiento). |
| `--color-warm-bone` | `#f1f0ec` | Superficie secundaria (Off-white para secciones y fondos suaves). |
| `--color-paper-white` | `#ffffff` | Fondo base de página, tarjetas blancas y contenedor del navbar. |
| `--color-ink-black` | `#000000` | Texto principal, fondos full-bleed negros (Hero / CTA final). |
| `--color-smoke` | `#6e6d6c` | Texto secundario y descripciones. |
| `--color-hairline` | `#e5e7eb` | Bordes sutiles e insumos de separación. |

### Tipografía
- **Fuente Principal:** Inter / DM Sans (Sans-serif geométrica)
  - `400` (Cuerpo / Copy)
  - `500` (Subtítulos, Botones, Enlaces de Navegación)
  - `700` (Eyebrows / Labels con `letter-spacing: +0.025em`)
- **Fuente de Acento Manuscrita:** `Nanum Pen Script` (o `Caveat`)
  - Usada **únicamente** para subrayar 1 palabra clave del Hero Headline en color Ember Orange (`#ff6808`).

### Geometría y Redondeos
- **Navbar:** `16px` (pill / flotante)
- **Hero Plate (Full-bleed):** `0px` o `40px` en borde inferior para transición suave
- **Tarjetas (Features / Precios):** `20px`
- **Botones y Tags:** `9999px` (True Pill)
- **Inputs:** `12px`

---

2. Reglas de Arquitectura Mobile-First y Diseño Responsivo

### A. Principios Fundamentales Mobile-First
1. **CSS Base Sin Media Queries:**
   - La estructura CSS por defecto representa la vista móvil (pantallas pequeñas)[cite: 2].
   - El contenido fluye verticalmente de forma natural (`flex-col` o `grid-cols-1`).
2. **Uso Exclusivo de Media Queries Progresivas (`min-width`):**
   - **Regla estricta:** Usar **únicamente** `@media (min-width: ...)`[cite: 2]. Evitar `max-width`[cite: 2].
   - Ejemplo Tailwind: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
3. **Mejora Progresiva (*Progressive Enhancement*):**
   - Evitar ocultar contenido en móvil; adaptar la complejidad visual y el layout a medida que la pantalla se expande[cite: 2].

### B. Breakpoints Estándar
| Token | Breakpoint | Dispositivos Destino |
| :--- | :--- | :--- |
| **Base** | `< 640px` | Smartphones portrait |
| **`sm`** | `640px` | Phablets / Smartphones landscape |
| **`md`** | `768px` | Tablets portrait |
| **`lg`** | `1024px` | Tablets landscape / Laptops pequeñas |
| **`xl`** | `1280px` | Laptops estándar / Desktops |
| **`2xl`**| `1536px` | Pantallas de alta resolución / Widescreen |

### C. Zonas Táctiles e Interacción Móvil
1. **Dimensiones Táctiles Mínimas:** Área interactiva mínima de **44×44px** (`min-h-[44px]`) en botones y enlaces móviles para evitar toques erróneos.
2. **Espaciado Táctil:** Margen mínimo de `8px` a `12px` entre elementos interactivos adyacentes.
3. **Inputs y Formularios:** Tamaño de fuente mínimo de **16px** en inputs para evitar el zoom automático no deseado en navegadores móviles (iOS Safari / Android Chrome).
4. **Sin Dependencia de Hover:** Ninguna acción ni contenido clave debe depender exclusivamente del evento `:hover`.

### D. Unidades Fluidas y Control de Desbordamiento
1. **Prevención de Scroll Horizontal:** `max-width: 100%` en imágenes/videos y uso de `box-sizing: border-box`. Ningún contenedor debe superar el `100vw`.
2. **Unidades Relativas:** Usar `rem` para tipografía, `em` para paddings/margins internos de componentes, e `svh` / `dvh` para alturas relativas de pantalla móvil.
3. **Medios Flexibles:**
   ```css
   img, video {
     max-width: 100%;
     height: auto;
     display: block;
   }

---

## 3. Especificación de Secciones (Simplificadas)

### A. Hero Section (Header de Pantalla Completa)
- **Layout:** Abarca el 100% del viewport (`100vh` o `min-h-screen`). Fondo compuesto por un video en bucle o imagen en alta resolución con overlay oscuro.
- **Navbar Incorporado:**
  - Logo en blanco a la izquierda.
  - Links centrales (`#servicios`, `#testimonios`, `#planes`, `#contacto`).
  - Botón de acción rápido a la derecha: Pill Button `#4570ff` ("Reservar Espacio").
- **Contenido Central:**
  - Headline con tipografía geométrica (48px - 64px, peso 500) en blanco.
  - Subrayado manuscrito en `#ff6808` (`Nanum Pen Script`) sobre la palabra principal.
  - Subtítulo explicativo en `#f1f0ec` (18px, peso 400).
  - **CTA Principal:** Pill button azul Indigo (`#4570ff`) + Botón delineado secundario (`border: 2px #ff6808`).

### B. Features Section (Servicios en Tarjetas Simples Animadas)
- **Fondo:** `#ffffff` o `#f1f0ec` (Warm Bone).
- **Layout:** Grid de 5 tarjetas interactiva con entrada escalonada (*stagger*) vía Framer Motion.
- **Rotación de Colores Pastel/Saturados en las Tarjetas (Bordes redondeados a 20px):**
  1. **Café y Bebidas:** Fondo `#d6e0ff` (Ice Blue) | Texto `#000000`
  2. **Gimnasio:** Fondo `#c293f1` (Lilac Bloom) | Texto `#000000`
  3. **Salas de Reuniones:** Fondo `#ebdcff` (Lavender Mist) | Texto `#000000`
  4. **Agendamiento:** Fondo `#193f78` (Deep Navy) | Texto `#ffffff`
  5. **Menú del Café:** Fondo `#ffffff` con borde `#e5e7eb` | Texto `#000000`
- **Animación:** Hover con leve elevación (`y: -6px`) e interactividad fluida al desplazar la vista.

### C. Testimonios (Slide Animado tipo Collage)
- **Fondo:** `#000000` (Fanja oscura para resaltar colores).
- **Layout:** Carrusel / Slide animado horizontal contínuo o con controles fluidos.
- **Composición Visual:**
  - Collage de fotografías reales de usuarios disfrutando el gimnasio, el café o las salas de reuniones.
  - **Subtítulos sobrepuestos:** Citas del testimonio colocadas dinámicamente tipo subtítulo con resaltados en color `#c6ff94` (Lime Highlighter).

### D. Sección de Precios (3 Tarjetas Animadas + Descuento Escalable)
- **Fondo:** `#f1f0ec` (Warm Bone).
- **Subtítulo / Eyebrow:** Label en mayúsculas a 14px peso 700 (`letter-spacing: +0.025em`).
- **3 Tarjetas de Suscripción (Gimnasio):**
  1. **Plan Mensual:** Fondo `#ffffff`, borde `#e5e7eb`.
  2. **Plan Semestral:** Fondo `#ffffff`, borde `#ff6808` (Destacado).
  3. **Plan Anual:** Fondo `#000000` (Dark Contrast Card), texto blanco.
- **Feature Destacado (Beneficio Escalable):**
  - Badge animado que resalta: *"Hasta 15% OFF en todo el Menú del Café para miembros de la suscripción anual"*.
- **Animaciones:** Entrada progresiva con Scroll Reveal (*Framer Motion*).

### E. Sección CTA Final (Día Gratis & Agendamiento)
- **Fondo:** `#000000` o `#193f78` (Deep Navy).
- **Propuesta de Valor:** Probar 1 Día Gratis de Gimnasio o Agendar una cita con un agente de ventas para conocer las salas/espacios.
- **Componente:**
  - Formulario / Selector rápido simplificado con inputs de `12px` de radio.
  - Botón de envío Pill `#4570ff` ("Reclamar mi día gratis / Agendar visita").

### F. Footer
- **Fondo:** `#000000`
- **Contenido:**
  - Contactos (Teléfono, Correo, Dirección).
  - Redes Sociales con íconos vectoriales simples (`Lucide React`).
  - Información legal, copyright y enlaces a secciones.
  - Subtexto secundario en `#6e6d6c` (Smoke).