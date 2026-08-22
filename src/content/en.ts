import { banner, bannerNarrow } from './assets'
import type { Content } from './types'

export const en: Content = {
  ui: {
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', notes: 'Notes', writing: 'Writing' },
    langToggleLabel: 'Language',
    langToggleToZh: '中',
    langToggleToEn: 'EN',
    roleOwner: 'Owner',
    roleContributor: 'Contributor',
  },

  site: {
    handle: 'SnowLeopard-io',
    name: 'Snow Leopard',
    wordmark: 'SNOW LEOPARD',
    eyebrow: 'Chongqing · China',
    tagline:
      'Sheathe the edge to read the world; keep the stillness to cross the years.',
    roles: [
      'Autonomous AI Agent Developer',
      'Cloud-driven · Locally Executed',
      'C · Java · JavaScript · Python',
      'Building intelligent systems',
    ],
    banner,
    bannerNarrow,
    email: '1486853830@qq.com',
    links: [
      { label: 'GitHub', href: 'https://github.com/SnowLeopard-io', handle: 'SnowLeopard-io' },
      { label: 'Gitee', href: 'https://gitee.com/cnt-code', handle: 'cnt-code' },
      { label: 'CSDN', href: 'https://blog.csdn.net/h1486853830', handle: 'h1486853830' },
    ],
    statusLabel: 'Currently building',
    buildingName: 'CogitoAgent',
    ctaPrimary: 'View my work',
    ctaSecondary: 'GitHub',
  },

  about: {
    eyebrow: 'About',
    heading: 'Building systems infrastructure, from the kernel to the browser.',
    lead: `I'm a Grade 12 student at Chongqing No.1 High School, building systems infrastructure at the intersection of compilers, operating systems, and AI. I created SpecterCore (a browser-based Windows compatibility layer with an x86→WASM JIT), ErgalicsStudio (a WebGPU-accelerated scientific computing workstation), and CogitoAgent (an autonomous AI agent). I also contribute to the microkernel OS Kil0yOS and the JVM governance framework LingFrame.`,
    facts: [
      { label: 'Student', value: 'Chongqing No.1 High School · Grade 12' },
      { label: 'Building', value: 'SpecterCore (x86→WASM compat) · ErgalicsStudio (WebGPU compute) · CogitoAgent (AI agent)' },
      { label: 'Contributing', value: 'Kil0yOS (microkernel OS) · LingFrame (JVM governance)' },
      { label: 'Deepening', value: 'Compiler backends · WebGPU compute · LLM agents · Distributed systems' },
      { label: 'Focus areas', value: 'Browser-based systems infra · Low-level software · Autonomous agents' },
      { label: 'Based in', value: 'Chongqing, China' },
    ],
    stackLabel: 'Tech stack',
    stack: [
      { lang: 'C', note: 'systems', level: 32 },
      { lang: 'Java', note: 'runtime', level: 30 },
      { lang: 'JavaScript', note: 'web', level: 88 },
      { lang: 'TypeScript', note: 'web', level: 90 },
      { lang: 'Node.js', note: 'tooling', level: 85 },
      { lang: 'Python', note: 'scripting', level: 30 },
      { lang: 'AI/ML', note: 'intelligence', level: 75 },
      { lang: 'Electron', note: 'desktop', level: 78 },
      { lang: 'Git', note: 'version control', level: 88 },
    ],
  },

  stats: [
    { key: 'repos', value: 6, label: 'Repositories' },
    { key: 'stars', value: 0, suffix: '+', label: 'Stars earned' },
    { key: 'followers', value: 0, label: 'Followers' },
    { key: 'languages', value: 6, label: 'Languages' },
  ],

  projects: {
    eyebrow: 'Projects',
    heading: 'Selected work',
    lead: `Open-source projects I own and contribute to. Each one is a deliberate attempt to build something that lasts.`,
    projects: [
      {
        name: 'SpecterCore',
        repo: 'SpecterCore',
        url: 'https://github.com/SnowLeopard-io/SpecterCore',
        tagline: 'Run Windows x86 apps in the browser',
        body: `A browser-based Windows compatibility layer that executes unmodified PE32/PE32+ binaries through an x86→WASM JIT, intercepts Win32 API calls via trap-stub IAT rewriting, and bridges them onto browser primitives — OPFS for files, WebUSB for devices, WebGPU for graphics, AudioWorklet for audio.`,
        stack: ['TypeScript', 'WebAssembly', 'WebGPU', 'React'],
        role: 'Owner',
      },
      {
        name: 'ErgalicsStudio',
        repo: 'ErgalicsStudio',
        url: 'https://github.com/SnowLeopard-io/ErgalicsStudio',
        tagline: 'In-browser scientific computing workstation',
        body: `A professional scientific computing workstation in the browser — interactive data exploration, GPU compute scheduling via WebGPU/WGSL, and a sandboxed plugin system, all powered by a Rust/WASM core.`,
        stack: ['TypeScript', 'Rust', 'WebGPU', 'React'],
        role: 'Owner',
      },
      {
        name: 'CogitoAgent',
        repo: 'CogitoAgent',
        url: 'https://github.com/SnowLeopard-io/CogitoAgent',
        tagline: 'An autonomous AI agent',
        body: `An AI agent that thinks, plans and acts on its own. Cloud-driven for intelligence, executed locally for privacy — with 200+ integrated tools, your data never leaves your machine.`,
        stack: ['TypeScript', 'Node.js', 'Electron', 'AI/ML'],
        role: 'Owner',
      },
      {
        name: 'NodeVerdict',
        repo: 'NodeVerdict',
        url: 'https://github.com/SnowLeopard-io/NodeVerdict',
        tagline: 'Local-first Node.js diagnostics',
        body: `A browser-based diagnostic viewer for Node.js. Reads TracingChannel native events, heap snapshots and CPU flame graphs — everything is processed in the browser, nothing is uploaded.`,
        stack: ['TypeScript', 'React', 'Vite', 'D3.js'],
        role: 'Owner',
      },
      {
        name: 'Kil0yOS',
        repo: 'Miwafi/Kil0yOS',
        url: 'https://github.com/Miwafi/Kil0yOS',
        tagline: 'A microkernel from scratch',
        body: `A 64-bit x86-64 microkernel with memory management, a VMM, filesystem, network stack and a tiling GUI desktop — built the hard way in C and assembly.`,
        stack: ['C', 'Assembly', 'x86-64'],
        role: 'Contributor',
      },
      {
        name: 'LingFrame',
        repo: 'LingFrame/LingFrame',
        url: 'https://github.com/LingFrame/LingFrame',
        tagline: 'Governance for long-running JVMs',
        body: `Runtime governance for systems that must never rest: ling isolation, hot unload and runtime control for the processes that keep the lights on.`,
        stack: ['Java', 'Spring Boot'],
        role: 'Contributor',
      },
    ],
  },

  featured: {
    eyebrow: 'Flagship project',
    name: 'CogitoAgent',
    tagline: 'An autonomous AI agent',
    summary:
      'CogitoAgent is an autonomous agent that thinks, plans and acts on its own. It borrows the cloud for intelligence but keeps memory and secrets on your machine — 200+ tools, privacy by architecture, autonomy you can verify.',
    highlights: [
      'Cloud-driven intelligence, local execution — your data never leaves the device.',
      '200+ integrated tools spanning file systems, shells, the web and code.',
      'Verifiable autonomy: it can show its work, revoke access and forget on command.',
      'Built with TypeScript, Node.js and Electron for cross-platform desktop.',
    ],
    metrics: [
      { value: '200+', label: 'Integrated tools' },
      { value: '100%', label: 'Local execution' },
      { value: '0', label: 'Data leaves device' },
    ],
    stack: ['TypeScript', 'Node.js', 'Electron', 'AI/ML'],
    url: 'https://github.com/SnowLeopard-io/CogitoAgent',
    cta: 'Explore CogitoAgent',
  },

  experience: {
    eyebrow: 'Experience',
    heading: 'The path so far',
    lead: `Where I come from, what I'm doing now, and where the next step points.`,
    entries: [
      {
        period: 'Education',
        title: 'Chongqing No.1 High School',
        body: `Studying while building. Self-taught across C, Java, JavaScript and Python, and steadily laying the foundation of algorithms and systems thinking.`,
        tags: ['C', 'Java', 'Python', 'Algorithms'],
        state: 'active',
      },
      {
        period: 'Open source',
        title: 'Contributor to Kil0yOS & LingFrame',
        body: `Writing low-level code for a 64-bit microkernel operating system, and a second rope into JVM runtime governance with Java and Spring Boot.`,
        tags: ['C', 'Assembly', 'Java', 'OS Development'],
        state: 'contribution',
      },
      {
        period: 'Present',
        title: 'Founder of CogitoAgent',
        body: `Designing an autonomous AI agent: 200+ tools, cloud-driven intelligence, local execution, privacy first. This is where most of my energy goes.`,
        tags: ['TypeScript', 'Node.js', 'Electron', 'AI/ML'],
        state: 'active',
      },
      {
        period: 'Direction',
        title: 'Autonomous & distributed systems',
        body: `Studying how LLMs and distributed infrastructure combine into agents that operate, coordinate and recover on their own.`,
        tags: ['LLMs', 'Cloud', 'Distributed Systems'],
        state: 'upcoming',
      },
    ],
  },

  notes: {
    eyebrow: 'Notes',
    heading: 'Ideas worth writing down',
    lead: `A few principles I'm developing as I build — the arguments I keep having with myself.`,
    notes: [
      {
        index: 'N–001',
        subject: 'Privacy is an architecture',
        body: `An agent can borrow the cloud for intelligence, but memory and secrets should stay at home. Privacy is a design decision, not a feature.`,
      },
      {
        index: 'N–002',
        subject: 'Trust is a boundary',
        body: `Microkernels teach a principle that scales: give the critical core as little as possible to get wrong. The same instinct should govern every AI boundary.`,
      },
      {
        index: 'N–003',
        subject: 'Long-running systems decay',
        body: `Software ages like glaciers — silently. Hot unload and isolation exist to repair it while it is still running.`,
      },
      {
        index: 'N–004',
        subject: 'Autonomy must be verifiable',
        body: `An agent with 200+ tools should be able to show its work, revoke its access and forget on command. Power without accountability is just a bug.`,
      },
    ],
  },

  writing: {
    eyebrow: 'Writing',
    heading: 'Notes from the build',
    lead: `Long-form thoughts on agents, systems and the discipline of shipping them. (Swap these placeholders for your real CSDN articles.)`,
    articles: [
      {
        title: 'Building CogitoAgent: cloud-driven intelligence, local execution',
        excerpt:
          'How I split an autonomous agent into a cloud brain and a local body — and why privacy had to be an architecture, not a setting.',
        date: '2026',
        tag: 'AI Agents',
        url: 'https://blog.csdn.net/h1486853830',
      },
      {
        title: 'Writing a 64-bit microkernel in C and assembly',
        excerpt:
          'Notes from contributing to Kil0yOS: memory management, a VMM, and the brutal discipline of getting the smallest possible thing right.',
        date: '2026',
        tag: 'Operating Systems',
        url: 'https://blog.csdn.net/h1486853830',
      },
      {
        title: 'Runtime governance for long-running JVMs with LingFrame',
        excerpt:
          'Ling isolation, hot unload and runtime control — keeping processes that must never rest from quietly decaying.',
        date: '2026',
        tag: 'JVM',
        url: 'https://blog.csdn.net/h1486853830',
      },
      {
        title: 'Why privacy is an architecture, not a feature',
        excerpt:
          'An argument I keep having with myself, now written down: autonomy without accountability is just a very capable bug.',
        date: '2026',
        tag: 'Principles',
        url: 'https://blog.csdn.net/h1486853830',
      },
    ],
  },

  connect: {
    eyebrow: 'Contact',
    title: 'Let’s connect',
    lead: `I read every message. If you're working on agents, systems, or anything in between, I'd be glad to talk.`,
  },
}
