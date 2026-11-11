export const profile = {
  name: 'Carlos Gordillo',
  role: 'Mechatronics Engineer',
  // Contact details already published in the existing software portfolio.
  email: 'cmgm26200@gmail.com',
  github: 'https://github.com/c26200',
  statement: 'I shape ideas. I build systems.',
};

// Starting categories only. Confirm the skills, tools and technologies before
// presenting these as personal claims.
export const practiceAreas = [
  {
    id: 'mechanical-design',
    label: 'Mechanical design',
    prompt: 'Add the CAD tools, mechanisms and manufacturing processes you know.',
    mark: 'A',
  },
  {
    id: 'electronics-embedded',
    label: 'Electronics and embedded systems',
    prompt: 'Add the sensors, electronics and platforms you have used.',
    mark: 'B',
  },
  {
    id: 'control-automation',
    label: 'Control and automation',
    prompt: 'Add the control, instrumentation, PLCs and integrated systems you have worked with.',
    mark: 'C',
  },
];

// Empty visual templates; these do not represent completed projects.
export const projectPrompts = [
  {
    id: 'mechanics-project-card',
    label: 'MECHANICAL / CAD',
    title: '[Project name]',
    prompt: 'Describe the challenge, your contribution and a verifiable result.',
    visual: 'mechanism',
    tilt: '-1.6deg',
    position: 'high',
  },
  {
    id: 'electronics-project-card',
    label: 'ELECTRONICS / CONTROL',
    title: '[Project name]',
    prompt: 'Add the process, actual components and tests performed.',
    visual: 'circuit',
    tilt: '1.5deg',
    position: 'middle',
  },
  {
    id: 'integration-project-card',
    label: 'INTEGRATION / PROTOTYPE',
    title: '[Project name]',
    prompt: 'Explain which subsystems you connected and what you learned.',
    visual: 'signal',
    tilt: '-.8deg',
    position: 'low',
  },
];
