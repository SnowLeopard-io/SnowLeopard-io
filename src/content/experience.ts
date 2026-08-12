export type Expedition = {
  leg: string
  place: string
  when: string
  title: string
  body: string
  tags: string[]
  state: 'active' | 'joined' | 'planned'
}

/** Experience as a plain record of the climb, leg by leg. */
export const expeditions: Expedition[] = [
  {
    leg: 'Leg 01',
    place: 'The classroom',
    when: 'Grade 12',
    title: 'The foundation years',
    body: `Chongqing No.1 High School. The curriculum sets the base altitude; everything above it is climbed alone, with a compiler and a debugger for crampons.`,
    tags: ['C', 'Java', 'TypeScript', 'Python'],
    state: 'active',
  },
  {
    leg: 'Leg 02',
    place: 'Open source',
    when: 'Contributing',
    title: 'Down to the metal',
    body: `Cutting code on Kil0yOS, a 64-bit microkernel built in C and assembly — PMM, VMM, filesystem, network stack, tiling GUI. A second rope into LingFrame, governing long-running JVMs.`,
    tags: ['C', 'Assembly', 'x86-64', 'Java'],
    state: 'joined',
  },
  {
    leg: 'Leg 03',
    place: 'The summit push',
    when: 'Now',
    title: 'Agents that think for themselves',
    body: `Building CogitoAgent, an autonomous AI agent with 200+ tools — cloud-driven for intelligence, executed locally for privacy. This is the current expedition.`,
    tags: ['TypeScript', 'Node.js', 'Electron', 'AI/ML'],
    state: 'active',
  },
  {
    leg: 'Leg 04',
    place: 'The next ridge',
    when: 'Planned',
    title: 'Cloud-native autonomy',
    body: `Learning how LLMs and distributed systems fuse into agents that operate, coordinate and recover on their own — the route past this camp.`,
    tags: ['LLMs', 'Cloud', 'Distributed Systems'],
    state: 'planned',
  },
]