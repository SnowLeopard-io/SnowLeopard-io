export type Project = {
  name: string
  repo: string
  url: string
  tagline: string
  body: string
  stack: string[]
  role: 'Owner' | 'Contributor'
}

export const projects: Project[] = [
  {
    name: 'CogitoAgent',
    repo: 'CogitoAgent',
    url: 'https://github.com/SnowLeopard-io/CogitoAgent',
    tagline: 'The autonomous thinking agent',
    body: `An AI agent that continuously thinks, plans and acts — cloud-driven for intelligence, executed locally for privacy. Integrates 200+ practical tools; secure by default, none of your data leaves the machine.`,
    stack: ['TypeScript', 'Node.js', 'Electron', 'AI/ML'],
    role: 'Owner',
  },
  {
    name: 'NodeVerdict',
    repo: 'NodeVerdict',
    url: 'https://github.com/SnowLeopard-io/NodeVerdict',
    tagline: 'A diagnosis at base camp',
    body: `A browser-based Node.js diagnostic viewer. Consumes TracingChannel native events, reads heap snapshots and CPU flame graphs — every analysis happens locally, nothing is uploaded.`,
    stack: ['TypeScript', 'React', 'Vite', 'D3.js'],
    role: 'Owner',
  },
  {
    name: 'Kil0yOS',
    repo: 'Miwafi/Kil0yOS',
    url: 'https://github.com/Miwafi/Kil0yOS',
    tagline: 'A microkernel from the snowline up',
    body: `A 64-bit x86-64 microkernel operating system — PMM, VMM, filesystem, network stack and a tiling GUI desktop, built the hard way in C and assembly.`,
    stack: ['C', 'Assembly', 'x86-64'],
    role: 'Contributor',
  },
  {
    name: 'LingFrame',
    repo: 'LingFrame/LingFrame',
    url: 'https://github.com/LingFrame/LingFrame',
    tagline: 'Governance for long-running runtimes',
    body: `A JVM runtime governance framework for systems that run for months: ling isolation, hot unload, and runtime control — keeping the machine healthy at altitude.`,
    stack: ['Java', 'Spring Boot'],
    role: 'Contributor',
  },
]