export const profile = {
  name: 'Carlos Gordillo',
  role: 'Ingeniero Mecatrónico',
  // Datos de contacto ya publicados en el portafolio de Software/Full Stack.
  email: 'cmgm26200@gmail.com',
  github: 'https://github.com/c26200',
  statement: 'Diseño ideas. Construyo sistemas.',
};

// Estos temas son una estructura inicial. Completar con las competencias,
// herramientas y tecnologías que Carlos confirme como propias.
export const practiceAreas = [
  {
    id: 'mecanica',
    label: 'Diseño mecánico',
    prompt: 'Añadir CAD, mecanismos y procesos de fabricación que dominas.',
    mark: 'A',
  },
  {
    id: 'electronica',
    label: 'Electrónica y embebidos',
    prompt: 'Añadir sensores, electrónica y plataformas que has utilizado.',
    mark: 'B',
  },
  {
    id: 'control',
    label: 'Control y automatización',
    prompt: 'Añadir control, instrumentación, PLC y sistemas integrados reales.',
    mark: 'C',
  },
];

// Plantillas visuales vacías; no representan proyectos reales.
export const projectPrompts = [
  {
    id: 'ficha-mecanica',
    label: 'MECÁNICA / CAD',
    title: '[Nombre del proyecto]',
    prompt: 'Describe el reto, tu aporte y el resultado verificable.',
    visual: 'mechanism',
    tilt: '-1.6deg',
    position: 'alto',
  },
  {
    id: 'ficha-electronica',
    label: 'ELECTRÓNICA / CONTROL',
    title: '[Nombre del proyecto]',
    prompt: 'Añade el proceso, los componentes reales y las pruebas realizadas.',
    visual: 'circuit',
    tilt: '1.5deg',
    position: 'medio',
  },
  {
    id: 'ficha-integracion',
    label: 'INTEGRACIÓN / PROTOTIPO',
    title: '[Nombre del proyecto]',
    prompt: 'Explica qué subsistemas conectaste y qué aprendiste.',
    visual: 'signal',
    tilt: '-.8deg',
    position: 'bajo',
  },
];
