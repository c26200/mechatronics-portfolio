# Portafolio de Mecatrónica

Sitio independiente en **Astro** para separar el perfil de hardware/Mecatrónica del portafolio existente de software. El diseño aprobado usa el tapete verde en toda la página y una composición de tarjetas de proyectos tipo cuaderno.

## Desarrollo

```bash
npm install
npm run dev
npm run check
npm run build
```

Requiere Node.js 22.22.0 o superior. Astro genera un sitio estático en `dist/`.

## Contenido editable

- `src/data/portfolio.ts`: nombre, contacto, áreas sugeridas y fichas de proyectos.
- Los proyectos son plantillas vacías y los diagramas son ilustraciones temporales, no trabajos reales.
- El correo y el perfil de GitHub se reutilizaron del portafolio público existente; se pueden cambiar en el mismo archivo.

## Interacción

- Notas, herramientas y fichas de proyecto se pueden mover con ratón o tacto.
- Foco + flechas de teclado ofrece una alternativa accesible.
- La distribución se guarda en el navegador y puede restablecerse desde la mesa.
- El fondo verde cuadriculado continúa por toda la página, también detrás de las secciones inferiores.

## Dirección y referencia

- `design-demos/direction-approved.md`: elección y alcance acordados.
- `design-demos/directions.md`: las seis opciones y el razonamiento de diseño.
- `design-demos/thumbs.html`: comparativa visual de las seis candidatas.
- `product-facts.md`: fuentes oficiales y verificación de Astro.
