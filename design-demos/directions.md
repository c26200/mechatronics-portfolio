# Tres direcciones — Portafolio de Ingeniería Mecatrónica

## Brief de diseño

- **Narrativa:** enseñar cómo una idea de ingeniería pasa del boceto al sistema físico y su control.
- **Audiencia:** reclutadores, equipos técnicos y potenciales clientes.
- **Distancia:** la primera pantalla debe decir en pocos segundos quién es Carlos y qué conecta la Mecatrónica; los proyectos reales irán después.
- **Temperatura visual:** taller cercano, moderno y preciso; evitar que la interacción se vuelva un juego que esconda el trabajo.
- **Capacidad:** una portada que invita a explorar, y secciones de proyectos, áreas y contacto fáciles de encontrar.
- **Motivo visual:** objetos que habitan una superficie de trabajo y se mueven con el usuario.
- **Contexto existente:** hay un portafolio local de Carlos para Full Stack/IA; estas propuestas son un proyecto independiente y no copian ese tema visual. La imagen adjunta del usuario guía la primera dirección.

## Seis candidatos considerados

| # | Candidato | Origen del candidato | Idea visual | Decisión |
|---|---|---|---|
| 1 | **Taller intervenido** | Mejor ajuste al tema: parte de la imagen del usuario y de la composición de objetos de una mesa real. | Tapete verde cuadriculado, hojas, herramientas y notas; el tablero completo funciona como un escritorio que se puede acomodar. | Elegido: corresponde más directamente a la referencia. |
| 2 | **Banco de ensamblaje** | Segunda interpretación del mismo encargo: ensamblaje de piezas como objeto principal, no una página convertida en escritorio. | Madera pálida, piezas grandes, etiquetas de inventario y una retícula de taller cálida. | Reserva: demasiado cercano al uso literal de utilería; se prioriza una dirección más diferenciada. |
| 3 | **Mapa de mecanismos** | Referencia real: Bruno Simon (ver captura `refs/board-1.jpg`), limitada al descubrimiento espacial y a la interacción directa. | Navegación espacial sobre una retícula azul oscura con objetos enlazados como un diagrama interactivo. | Reserva: la interacción 3D puede eclipsar los proyectos y subir el costo de rendimiento/accesibilidad. |
| 4 | **Materia cinética** | Segunda referencia real: Lusion (ver captura `refs/board-2.jpg`), únicamente como ejemplo de escala y profundidad inmersiva. | Escena de laboratorio abstracta, negra y de escala cinematográfica, con una pieza en rotación. | Reserva: menos legible para un portafolio profesional y se aleja de la referencia lúdica. |
| 5 | **Instrumentación cromática** | Ruleta web: muestra 15, *Utility-First Colorful Docs*; se toma la claridad documental y el uso de color como señal. | Campo índigo, bloques claros y nodos cian/ámbar que se pueden mover para explorar sensor, control y actuador. | Elegido: prioriza lectura técnica y convierte el movimiento en un diagrama funcional. |
| 6 | **Bitácora de taller** | Ruleta este: muestra 07, *Solar-Term Palette*; se toma el acento cromático editorial (muestra consultada, no copiada). | Cuaderno de ingeniería abierto, dibujos esquemáticos, fichas y anotaciones sobre papel. | Elegido: el registro de proceso es protagonista, con una composición editorial más pausada. |

## Tres versiones completas

### 01 · Taller intervenido

- **Lógica:** construir desde la imagen aportada por el usuario; la página es un tapete de taller ilustrado en vista cenital.
- **Material protagonista:** papel rasgado para el mensaje, notas adhesivas, piezas geométricas y una retícula verde dibujada con CSS/SVG.
- **Composición:** objetos distribuidos alrededor del título; proyectos y habilidades aparecen como objetos que abren contenido real.
- **Interacción:** arrastrar con ratón o dedo, mover con flechas, guardar la disposición y restaurarla. Menú y enlaces siguen siendo HTML accesible.
- **Riesgo controlado:** solo esta dirección convierte casi toda la primera pantalla en un objeto/escenario. En móvil los objetos se ordenan y no es obligatorio arrastrar.
- **Referencia de forma:** imagen adjunta del usuario (retícula verde, papel, útiles y composición manual).

### 02 · Instrumentación cromática

- **Lógica:** una estación de control índigo, clara en sus datos aunque cromáticamente intensa. La interacción tiene una función: reacomodar el diagrama de bloques.
- **Material protagonista:** diagrama SVG con nodos de sensor, control y actuador, estado del sistema y señal cromática azul/cian.
- **Composición:** declaración tipográfica a la izquierda; diagrama interactivo a la derecha; áreas y proyectos en un índice modular bajo el pliegue.
- **Interacción:** nodos movibles, foco por teclado y enlaces a secciones. En pantallas pequeñas el diagrama se apila y conserva su orden.
- **Referencia real comprobada:** https://bruno-simon.com — referencia únicamente para interacción espacial directa; no se copia su entorno 3D, paleta oscura ni navegación de videojuego. Captura: `refs/board-1.jpg`.
- **Diferencia clave:** presenta la ingeniería como un sistema legible, no como un escritorio ilustrado.

### 03 · Bitácora de taller

- **Lógica:** poner el proceso de pensar, dibujar, probar y documentar por delante de los instrumentos.
- **Material protagonista:** cuaderno abierto sobre papel solar/amarillo, papel cuadriculado, nota manuscrita, diagrama esquemático y una ficha de proyecto vacía lista para reemplazar.
- **Composición:** portada tipo cuaderno editorial con serif expresiva; bloques de proyectos como fichas sujetas a una página, y un índice de disciplinas directo.
- **Interacción:** las fichas se arrastran y vuelven a su sitio; las secciones inferiores mantienen lectura lineal.
- **Referencia de materia:** muestra `07-traditional-colors-solar-terms.jpg` consultada como contraste cromático editorial; aquí solo inspira el uso de acentos medidos, no su navegación de paleta.
- **Diferencia clave:** más silenciosa y documental que la primera; más humana que el diagrama de control de la segunda.

## Formato y validación

- Prototipos autónomos: `dir-1.html`, `dir-2.html`, `dir-3.html`; HTML/CSS/JS nativos para poder comparar sin que el framework afecte la dirección visual.
- Seis miniaturas en `thumbs.html`.
- Capturas de revisión: `captures/dir-1-1440x900.png` a `captures/dir-3-1440x900.png`, sus equivalentes `390x844`, y `captures/thumbs.png`.
- Las tres direcciones se muestran antes de implementar el sitio. Astro queda verificado en `../product-facts.md`.

## Supuestos pendientes de confirmar

1. Este portafolio de Mecatrónica debe vivir separado del portafolio de Full Stack/IA existente.
2. Se usa «Carlos Gordillo» como nombre provisional.
3. No se inventan proyectos, experiencia, cifras ni certificaciones. Los campos de ejemplo se reemplazarán con datos reales tras elegir dirección.
4. Los temas movibles son un realce, no la única forma de navegar.
