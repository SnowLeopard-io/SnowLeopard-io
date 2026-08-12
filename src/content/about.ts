export type Fact = {
  icon: string
  label: string
  value: string
}

export const about = {
  kicker: 'Base Camp · 4,450 m — who is climbing',
  heading: 'One climber, many lines.',
  lead: `I am a Grade 12 student at Chongqing No.1 High School, camped high in the clouds of autonomous systems. Currently shepherding CogitoAgent — an AI agent that is cloud-driven yet executed locally, guarding privacy while chasing curiosity. On the side I rope into the microkernel world of Kil0yOS and the runtime governance of LingFrame.`,
  facts: [
    { icon: '🎓', label: 'Student', value: 'Chongqing No.1 High School · Grade 12' },
    { icon: '🧭', label: 'Currently', value: 'CogitoAgent — an autonomous AI agent' },
    { icon: '⚙️', label: 'Contributing', value: 'Kil0yOS (microkernel OS) · LingFrame (JVM governance)' },
    { icon: '🌱', label: 'Learning', value: 'Cloud architecture · LLMs · autonomous systems' },
    { icon: '🌍', label: 'Home', value: 'Chongqing, China' },
    { icon: '⛰️', label: 'Fun fact', value: 'The snow leopard is perfectly adapted to high mountains' },
  ],
  stack: [
    { lang: 'C', note: 'systems' },
    { lang: 'Java', note: 'runtime' },
    { lang: 'JavaScript', note: 'web' },
    { lang: 'TypeScript', note: 'web' },
    { lang: 'Node.js', note: 'tooling' },
    { lang: 'Python', note: 'scripting' },
    { lang: 'Electron', note: 'desktop' },
    { lang: 'AI/ML', note: 'intelligence' },
  ],
}